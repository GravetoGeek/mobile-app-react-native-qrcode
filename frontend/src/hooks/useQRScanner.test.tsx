import {act,renderHook,waitFor} from '@testing-library/react-native';
import {CodeType,useCodeScanner} from 'react-native-vision-camera';
import {useQRScanner} from './useQRScanner';

jest.mock('react-native-vision-camera', () => ({
    useCodeScanner: jest.fn(),
}));

function setScannedData(firstCode: string) {
    return firstCode;
}
let isScanning = true;

function setIsScanning(value: boolean) {
    isScanning = value;
}

describe('useQRScanner', () => {
    it('Inicializa corretamente', () => {
        (useCodeScanner as jest.Mock).mockReturnValue(jest.fn());
        const {result} = renderHook(() => useQRScanner());
        expect(result.current.scannedData).toBeNull();
        expect(result.current.isScanning).toBe(true);
    });

    it('Escaneia o código corretamente', async () => {
        const mockOnCodeScanned = jest.fn((codes: CodeType[]) => {
            if (codes.length > 0) {
                const firstCode = codes[0];
                setScannedData(firstCode);
                setIsScanning(false);
            }
        });
        const mockCodeScanner = {
            onCodeScanned: mockOnCodeScanned,
            codeTypes: ['qr' as CodeType],
        };
        (useCodeScanner as jest.Mock).mockReturnValue(mockCodeScanner);
        const { result } = renderHook(() => useQRScanner());

        // Simulate scanning a QR code
        act(() => {
            mockOnCodeScanned([{ code: 'qr' } as unknown as CodeType]);
        });

        await waitFor(() => {
            expect(result.current.scannedData).not.toBeNull();
            expect(result.current.isScanning).toBe(false);
        });
        expect(result.current.isScanning).toBe(false);
    });

    it('Reseta o scanner corretamente', () => {
        const {result} = renderHook(() => useQRScanner());
        act(() => {
            result.current.resetScanner();
        });
        expect(result.current.scannedData).toBeNull();
        expect(result.current.isScanning).toBe(true);
    });
});

