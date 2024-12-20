import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList={
    Home: undefined;
    QRCodeRegistration: { title: string; headerShown: boolean }
    QRCodeScanner: { title: string; headerShown: boolean };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type QRCodeScannerScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'QRCodeScanner'>;
export type QRCodeRegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'QRCodeRegistration'>;
