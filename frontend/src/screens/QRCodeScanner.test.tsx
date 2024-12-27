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

describe('QRCodeScanner', () => {
    it('renders correctly when device is not available', () => {
        useCameraDevice.mockReturnValue(null);
        const {getByText} = render(<QRCodeScanner navigation={{}} />);
        expect(getByText('Camera não detectada.')).toBeTruthy();
    });

    it('renders correctly when device is available', () => {
        useCameraDevice.mockReturnValue({id: 'back'});
        useQRScanner.mockReturnValue({
            scannedData: null,
            isScanning: true,
            resetScanner: jest.fn(),
            codeScanner: jest.fn(),
        });
        const {getByText} = render(<QRCodeScanner navigation={{}} />);
        expect(getByText('Dados do código de Barras/QRCode:')).toBeTruthy();
    });

    it('handles scan reset correctly', () => {
        const resetScanner = jest.fn();
        useCameraDevice.mockReturnValue({id: 'back'});
        useQRScanner.mockReturnValue({
            scannedData: 'test data',
            isScanning: false,
            resetScanner,
            codeScanner: jest.fn(),
        });
        const {getByText} = render(<QRCodeScanner navigation={{}} />);
        fireEvent.press(getByText('Escanear novamente'));
        expect(resetScanner).toHaveBeenCalled();
    });
});
