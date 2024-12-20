import React from 'react';
import {Text,View} from 'react-native';
import Button from '../components/atoms/Button';
import ContentWrapper from '../components/organisms/ContentWrapper';
import homeStyle from '../styles/screens/homeStyle';
import {HomeScreenNavigationProp} from '../types';


const Home: React.FC<{navigation: HomeScreenNavigationProp}> = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    return (
        <ContentWrapper>
            <View style={homeStyle.screen}>
                <Text style={homeStyle.title}>Home Screen</Text>
                <Button
                    title="Escanear QRCode"
                    onPress={() =>
                        navigation.navigate('QRCodeScanner',{title: 'QRCode Scanner',headerShown: true})
                    }
                />
                <Button
                    title="Registrar QRCode"
                    onPress={() =>
                        navigation.navigate('QRCodeRegistration',{title: 'QRCode Registration',headerShown: true})
                    }
                />
            </View>
        </ContentWrapper>
    );
};

export default Home;
