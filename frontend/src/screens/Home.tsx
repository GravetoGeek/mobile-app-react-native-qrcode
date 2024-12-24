import React from 'react';
import {Text,View} from 'react-native';
import Button from '../components/atoms/Button';
import ContentWrapper from '../components/organisms/ContentWrapper';
import homeStyle from '../styles/screens/homeStyle';
import {HomeScreenNavigationProp} from '../types';

/**
 * Componente da tela inicial do aplicativo.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {HomeScreenNavigationProp} props.navigation - Propriedade de navegação para navegar entre as telas.
 * @returns {JSX.Element} JSX Elemento representando a tela inicial.
 */
const Home: React.FC<{navigation: HomeScreenNavigationProp}> = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    return (
        <ContentWrapper>
            <View style={homeStyle.screen}>
                <Text style={homeStyle.title}>Home Screen</Text>
                {/* Botão para navegar para a tela de escaneamento de QRCode */}
                <Button
                    title="Escanear QRCode"
                    onPress={() =>
                        navigation.navigate('QRCodeScanner', {title: 'QRCode Scanner', headerShown: true})
                    }
                />
                {/* Botão para navegar para a tela de registro de QRCode */}
                <Button
                    title="Registrar QRCode"
                    onPress={() =>
                        navigation.navigate('QRCodeRegistration', {title: 'QRCode Registration', headerShown: true})
                    }
                />
            </View>
        </ContentWrapper>
    );
};

export default Home;
