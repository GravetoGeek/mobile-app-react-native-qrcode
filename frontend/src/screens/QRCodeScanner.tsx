// src/screens/QRCodeScanner.tsx
import React from 'react';
import {Alert,StyleSheet,Text,View} from 'react-native';
import {Camera,useCameraDevice} from 'react-native-vision-camera';
import ContentWrapper from '../components/organisms/ContentWrapper';
import ShowQrcodeData from '../components/organisms/ShowQrcodeData';
import {useQRScanner} from '../hooks/useQRScanner';
import showQrcodeData from '../styles/components/organisms/showQrcodeData';
import qrCodeScannerStyle from '../styles/screens/qrCodeScannerStyle';
import {QRCodeScannerScreenNavigationProp} from '../types';

/**
 * Componente da tela de escaneamento de QRCode.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {QRCodeScannerScreenNavigationProp} props.navigation - Propriedade de navegação para navegar entre as telas.
 * @returns {JSX.Element} JSX Elemento representando a tela de escaneamento de QRCode.
 */
const QRCodeScanner: React.FC<{navigation: QRCodeScannerScreenNavigationProp}> = ({navigation: _navigation}) => {
    const device = useCameraDevice('back');
    const {scannedData,isScanning,resetScanner,codeScanner} = useQRScanner();

    // Retorno antecipado para quando o dispositivo não estiver disponível
    if(!device) {
        return (
            <View style={qrCodeScannerStyle.centered}>
                <Text>Camera não detectada.</Text>
            </View>
        );
    }

    return (
        <ContentWrapper>
            {isScanning ? (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    codeScanner={codeScanner}
                    onError={(error) => {
                        console.error('Erro na câmera:', error);
                        Alert.alert('Erro', 'Não foi possível iniciar a câmera. Por favor, tente novamente mais tarde.');
                    }}
                />
            ) :
                <ShowQrcodeData
                    title="Dados do código de Barras/QRCode:"
                    textButton="Escanear novamente"
                    data={scannedData}
                    onPress={resetScanner}
                    style={showQrcodeData} />
            }
        </ContentWrapper>
    );
};

export default QRCodeScanner;

