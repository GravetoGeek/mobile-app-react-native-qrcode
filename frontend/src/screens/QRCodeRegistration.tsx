import React,{useState} from 'react';
import {Alert,FlatList,Modal,Text,TextInput,TouchableOpacity,View} from 'react-native';
import * as RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';
import Button from '../components/atoms/Button';
import ContentWrapper from '../components/organisms/ContentWrapper';
import {createQRCode} from '../services/qrcodeService';
import qrCodeRegistrationStyle from '../styles/screens/qrCodeRegistrationStyle';
import {QRCodeRegistrationScreenNavigationProp} from '../types';

const codeTypes = [
    {label: 'QR',value: 'qr'},
];

/**
 * Componente da tela de registro de QRCode.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {QRCodeRegistrationScreenNavigationProp} props.navigation - Propriedade de navegação para navegar entre as telas.
 * @returns {JSX.Element} JSX Elemento representando a tela de registro de QRCode.
 */
const QRCodeRegistration: React.FC<{navigation: QRCodeRegistrationScreenNavigationProp}> = ({navigation: _navigation}) => {
    const [description,setDescription] = useState('');
    const [camposAdicionais,setCamposAdicionais] = useState(false);
    const [codeType,setCodeType] = useState('qr');
    const [attributes,setAttributes] = useState<Attribute[]>([]);
    const [modalVisible,setModalVisible] = useState(false);
    const [qrData,setQrData] = useState(null);
    let qrCodeRef = null;


    interface Attribute {
        key: string;
        value: string;
    }

    function transformJson(input: Attribute[]): Record<string,unknown> {
        // Reduz o array para um único objeto com as chaves e valores correspondentes
        const transformed = input.reduce((acc,item) => {
            acc[item.key] = item.value;
            return acc;
        },{} as Record<string,unknown>);

        // Retorna um objeto
        return transformed;
    }

    /**
     * Função para registrar o QRCode no backend.
     */
    const handleRegister = async () => {
        try{
            let payload: {type: string; data: any} = {type: '',data: null};

            if(camposAdicionais) {
                if(attributes.some(({key,value}) => !key || !value)) {
                    Alert.alert('Erro','Por favor, preencha todos os campos antes de registrar o QR Code.');
                    return;
                }
                payload.type = codeType;
                payload.data = transformJson(attributes);
                payload.data.description = description;
                payload.data = JSON.stringify(payload.data);


            }
            else {
                payload = {
                    type: codeType,
                    data: description,
                };
            }


            const response = await createQRCode(payload);

            if(response.status !== 201) {
                let error = await response.json();
                if(error?.message) {
                    error = error.message;
                    Alert.alert('Erro ao registrar QR Code.');
                }
            }

            const responseData = await response.json();
            Alert.alert('Sucesso','QR Code registrado com sucesso!');
            setQrData(responseData.data);
        } catch(error) {
            Alert.alert('Erro na rede, verifique sua conexão e tente novamente.');
        }
    };

    /**
     * Função para adicionar um novo campo de atributo.
     */
    const handleAddAttribute = () => {
        setCamposAdicionais(true);
        setAttributes([...attributes,{key: '',value: ''}]);
    };

    /**
     * Função para atualizar o valor de um atributo específico.
     *
     * @param {number} index - Índice do atributo a ser atualizado.
     * @param {string} key - Chave do atributo.
     * @param {string} value - Valor do atributo.
     */
    const handleAttributeChange = (index: number,key: string,value: string) => {
        const newAttributes = [...attributes];
        newAttributes[index] = {key,value};
        setAttributes(newAttributes);
    };

    /**
     * Função para renderizar um item da lista de tipos de código.
     *
     * @param {Object} item - Item da lista.
     * @returns {JSX.Element} JSX Elemento representando o item da lista.
     */
    const renderCodeTypeItem = ({item}) => (
        <TouchableOpacity
            style={qrCodeRegistrationStyle.pickerItem}
            onPress={() => {
                setCodeType(item.value);
                setModalVisible(false);
            }}
        >
            <Text style={qrCodeRegistrationStyle.pickerItemText}>{item.label}</Text>
        </TouchableOpacity>
    );

    const handleDownloadQRCode = async () => {
        if (qrCodeRef) {
            qrCodeRef.toDataURL(async (data: any) => {
                let fileName = `qrcode-${new Date().getTime()}.png`;
                const path: string = `${RNFS.DownloadDirectoryPath}/${fileName}`;
                try {
                    await RNFS.writeFile(path, data, 'base64');
                    Alert.alert('Sucesso', `QR Code salvo em: ${path}`);
                } catch (error) {
                    Alert.alert('Erro', 'Não foi possível salvar a imagem.');
                }
            });
        } else {
            Alert.alert('Erro', 'QR Code não está disponível para download.');
        }
    };

    return (
        <ContentWrapper>
            <View style={qrCodeRegistrationStyle.screen}>
                <Text style={qrCodeRegistrationStyle.title}>Registrar Código de Barras/QRCode</Text>

                <TextInput
                    style={qrCodeRegistrationStyle.input}
                    placeholder="Descrição"
                    placeholderTextColor="#888"
                    value={description}
                    onChangeText={setDescription}
                />

                <TouchableOpacity
                    style={[qrCodeRegistrationStyle.input,qrCodeRegistrationStyle.selectButton]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={qrCodeRegistrationStyle.selectButtonText}>
                        {codeTypes.find(type => type.value === codeType)?.label || 'Selecionar Tipo'}
                    </Text>
                </TouchableOpacity>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={qrCodeRegistrationStyle.modalOverlay}>
                        <View style={qrCodeRegistrationStyle.modalContainer}>
                            <FlatList
                                data={codeTypes}
                                renderItem={renderCodeTypeItem}
                                keyExtractor={(item) => item.value}
                            />
                            <Button title="Fechar" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>

                {attributes.map((attribute,index) => (
                    <View key={index} style={qrCodeRegistrationStyle.attributeContainer}>
                        <TextInput
                            style={[qrCodeRegistrationStyle.input,qrCodeRegistrationStyle.attributeInput]}
                            placeholder="Informação"
                            placeholderTextColor="#888"
                            value={attribute.key}
                            onChangeText={(text) => handleAttributeChange(index,text,attribute.value)}
                        />
                        <TextInput
                            style={[qrCodeRegistrationStyle.input,qrCodeRegistrationStyle.attributeInput]}
                            placeholder="Valor"
                            placeholderTextColor="#888"
                            value={attribute.value}
                            onChangeText={(text) => handleAttributeChange(index,attribute.key,text)}
                        />
                    </View>
                ))}

                <Button title="Adicionar Campo" onPress={handleAddAttribute} />
                <Button title="Registrar" onPress={handleRegister} />
                {!!qrData && (
                    <View style={qrCodeRegistrationStyle.qrCodeImage}>
                        <TouchableOpacity onPress={handleDownloadQRCode}>
                            <QRCode
                                value={qrData}
                                size={400}
                                getRef={(ref) => (qrCodeRef = ref)}
                            />
                        </TouchableOpacity>
                    </View>
                )}

            </View>
        </ContentWrapper>
    );
};

export default QRCodeRegistration;
