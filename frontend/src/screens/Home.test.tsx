import {fireEvent,render} from '@testing-library/react-native';
import React from 'react';
import Home from './Home';

describe('Home', () => {
    it('renders correctly', () => {
        const {getByText} = render(<Home navigation={{}} />);
        expect(getByText('Home Screen')).toBeTruthy();
    });

    it('navigates to QRCodeScanner screen', () => {
        const navigate = jest.fn();
        const {getByText} = render(<Home navigation={{navigate}} />);
        fireEvent.press(getByText('Escanear QRCode'));
        expect(navigate).toHaveBeenCalledWith('QRCodeScanner', {title: 'QRCode Scanner', headerShown: true});
    });

    it('navigates to QRCodeRegistration screen', () => {
        const navigate = jest.fn();
        const {getByText} = render(<Home navigation={{navigate}} />);
        fireEvent.press(getByText('Registrar QRCode'));
        expect(navigate).toHaveBeenCalledWith('QRCodeRegistration', {title: 'QRCode Registration', headerShown: true});
    });
});
