import {fireEvent,render} from '@testing-library/react-native';
import React from 'react';
import {createQRCode} from '../services/qrcodeService';
import QRCodeRegistration from './QRCodeRegistration';

jest.mock('../services/qrcodeService');

describe('QRCodeRegistration', () => {
    it('renders correctly', () => {
        const {getByPlaceholderText, getByText} = render(<QRCodeRegistration navigation={{}} />);
        expect(getByPlaceholderText('Descrição')).toBeTruthy();
        expect(getByText('Registrar')).toBeTruthy();
    });

    it('handles registration correctly', async () => {
        createQRCode.mockResolvedValue({id: 'test-id', data: 'test data'});
        const {getByPlaceholderText, getByText} = render(<QRCodeRegistration navigation={{}} />);
        fireEvent.changeText(getByPlaceholderText('Descrição'), 'Test Description');
        fireEvent.press(getByText('Registrar'));
        expect(createQRCode).toHaveBeenCalledWith({
            type: 'qr',
            data: '{"description":"Test Description"}',
        });
    });
});
