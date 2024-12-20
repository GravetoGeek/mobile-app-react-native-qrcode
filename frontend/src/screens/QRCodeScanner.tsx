// src/screens/QRCodeScanner.tsx
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Camera,useCameraDevice} from 'react-native-vision-camera';
import Button from '../components/atoms/Button';
import ContentWrapper from '../components/organisms/ContentWrapper';
import {useQRScanner} from '../hooks/useQRScanner';
import qrCodeScannerStyle from '../styles/screens/qrCodeScannerStyle';
import {QRCodeScannerScreenNavigationProp} from '../types';

const QRCodeScanner: React.FC<{navigation: QRCodeScannerScreenNavigationProp}> = ({navigation: _navigation}) => {
    const device = useCameraDevice('back');
    const {scannedData,isScanning,resetScanner,codeScanner} = useQRScanner();

    // Retorno antecipado para quando o dispositivo não estiver disponível
    if(!device) {
        return (
            <View style={qrCodeScannerStyle.centered}>
                <Text>Camera Not Found</Text>
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
                />
            ) : (
                <View>
                    <Text style={qrCodeScannerStyle.resultText}>Dados do código de Barras/QRCode:</Text>
                    <Text style={qrCodeScannerStyle.resultText}>{JSON.stringify(scannedData,null,2)}</Text>
                    <Button title="Scan Again" onPress={resetScanner} />
                </View>


            )}
        </ContentWrapper>
    );
};

export default QRCodeScanner;

