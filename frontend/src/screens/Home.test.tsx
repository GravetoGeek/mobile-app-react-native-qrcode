import {fireEvent,render} from '@testing-library/react-native';
import React from 'react';
import Home from './Home';

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

describe('Home', () => {
    it('renders correctly', () => {
        const navigation = createMockNavigation();
        const {getByText} = render(<Home navigation={navigation} />);
        expect(getByText('Home Screen')).toBeTruthy();
    });

    it('navigates to QRCodeScanner screen', () => {
        const navigation = createMockNavigation();
        const {getByText} = render(<Home navigation={navigation} />);
        fireEvent.press(getByText('Escanear QRCode'));
        expect(navigation.navigate).toHaveBeenCalledWith('QRCodeScanner', {title: 'QRCode Scanner', headerShown: true});
    });

    it('navigates to QRCodeRegistration screen', () => {
        const navigation = createMockNavigation();
        const {getByText} = render(<Home navigation={navigation} />);
        fireEvent.press(getByText('Registrar QRCode'));
        expect(navigation.navigate).toHaveBeenCalledWith('QRCodeRegistration', {title: 'QRCode Registration', headerShown: true});
    });
});
