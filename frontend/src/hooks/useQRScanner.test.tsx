import {act,renderHook} from '@testing-library/react-hooks';
import {useCodeScanner} from 'react-native-vision-camera';
import {useQRScanner} from './useQRScanner';

jest.mock('react-native-vision-camera', () => ({
    useCodeScanner: jest.fn(),
}));

describe('useQRScanner', () => {
    it('initializes correctly', () => {
        useCodeScanner.mockReturnValue(jest.fn());
        const {result} = renderHook(() => useQRScanner());
        expect(result.current.scannedData).toBeNull();
        expect(result.current.isScanning).toBe(true);
    });

    it('scans code correctly', () => {
        const mockCodeScanner = jest.fn();
        useCodeScanner.mockReturnValue(mockCodeScanner);
        const {result} = renderHook(() => useQRScanner());
        act(() => {
            result.current.codeScanner.onCodeScanned([{data: 'test data'}]);
        });
        expect(result.current.scannedData.data).toBe('test data');
        expect(result.current.isScanning).toBe(false);
    });

    it('resets scanner correctly', () => {
        const {result} = renderHook(() => useQRScanner());
        act(() => {
            result.current.resetScanner();
        });
        expect(result.current.scannedData).toBeNull();
        expect(result.current.isScanning).toBe(true);
    });
});
