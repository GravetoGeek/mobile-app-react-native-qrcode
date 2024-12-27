import {fireEvent,render} from '@testing-library/react-native';
import React from 'react';
import {createQRCode} from '../services/qrcodeService';
import QRCodeRegistration from './QRCodeRegistration';

jest.mock('../services/qrcodeService');
jest.mock('react-native-fs', () => ({
    writeFile: jest.fn(() => Promise.resolve()),
    DownloadDirectoryPath: '/mocked/path',
}));
jest.mock('react-native-qrcode-svg', () => 'QRCode');

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

describe('QRCodeRegistration', () => {
    it('renders correctly', () => {
        const navigation = createMockNavigation();
        const {getByPlaceholderText, getByText} = render(<QRCodeRegistration navigation={navigation} />);
        expect(getByPlaceholderText('Descrição')).toBeTruthy();
        expect(getByText('Registrar')).toBeTruthy();
    });

    it('handles registration correctly', async () => {
        (createQRCode as jest.Mock).mockResolvedValue({id: 'test-id', data: 'test data'});
        const navigation = createMockNavigation();
        const {getByPlaceholderText, getByText} = render(<QRCodeRegistration navigation={navigation} />);
        fireEvent.changeText(getByPlaceholderText('Descrição'), 'Test Description');
        fireEvent.press(getByText('Registrar'));
        expect(createQRCode).toHaveBeenCalledWith({
            type: 'qr',
            data: 'Test Description',
        });
    });
});
