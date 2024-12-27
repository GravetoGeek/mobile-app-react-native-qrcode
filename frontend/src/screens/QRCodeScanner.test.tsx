import {fireEvent,render} from '@testing-library/react-native';
import React from 'react';
import {useCameraDevice} from 'react-native-vision-camera';
import {useQRScanner} from '../hooks/useQRScanner';
import QRCodeScanner from './QRCodeScanner';

jest.mock('react-native-vision-camera', () => ({
    Camera: jest.fn(),
    useCameraDevice: jest.fn(),
}));

jest.mock('../hooks/useQRScanner');

const createMockNavigation = () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    getParent: jest.fn(),
    setParams: jest.fn(),
    navigateDeprecated: jest.fn(),
    preload: jest.fn(),
    reset: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    setStateForNextRouteNamesChange: jest.fn(),
    setOptions: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    popTo: jest.fn(),
});

describe('QRCodeScanner', () => {
    beforeEach(() => {
        (useQRScanner as jest.Mock).mockReturnValue({
            scannedData: null,
            isScanning: false,
            resetScanner: jest.fn(),
            codeScanner: jest.fn(),
        });
    });

    it('renders correctly when device is not available', () => {
        (useCameraDevice as jest.Mock).mockReturnValue(null);
        const navigation = createMockNavigation();
        const {getByText} = render(<QRCodeScanner navigation={navigation} />);
        expect(getByText('Camera não detectada.')).toBeTruthy();
    });

    it('renders correctly when device is available', () => {
        (useCameraDevice as jest.Mock).mockReturnValue({id: 'back'});
        (useQRScanner as jest.Mock).mockReturnValue({
            scannedData: null,
            isScanning: false,
            resetScanner: jest.fn(),
            codeScanner: jest.fn(),
        });
        const navigation = createMockNavigation();
        const {getByText} = render(<QRCodeScanner navigation={navigation} />);
        expect(getByText('Dados do código de Barras/QRCode:')).toBeTruthy();
    });

    it('handles scan reset correctly', () => {
        const resetScanner = jest.fn();
        (useCameraDevice as jest.Mock).mockReturnValue({id: 'back'});
        (useQRScanner as jest.Mock).mockReturnValue({
            scannedData: 'test data',
            isScanning: false,
            resetScanner,
            codeScanner: jest.fn(),
        });
        const navigation = createMockNavigation();
        const {getByText} = render(<QRCodeScanner navigation={navigation} />);
        fireEvent.press(getByText('Escanear novamente'));
        expect(resetScanner).toHaveBeenCalled();
    });
});
