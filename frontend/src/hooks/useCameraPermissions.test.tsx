import {renderHook,waitFor} from '@testing-library/react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {useCameraPermissions} from './useCameraPermissions';

jest.mock('react-native-vision-camera', () => ({
    useCameraPermission: jest.fn(() => ({
        hasPermission: false,
        requestPermission: jest.fn(()=> true),
    })),
}));

describe('useCameraPermissions', () => {
    it('Solicita permissão corretamente', async () => {
        const mockRequestPermission = jest.fn(() => true);
        (useCameraPermission as jest.Mock).mockReturnValue({
            hasPermission: false,
            requestPermission: mockRequestPermission,
        });
        const {result} = renderHook(() => useCameraPermissions());
        await waitFor(() => {
            expect(result.current).toBe(true);
        });
        expect(mockRequestPermission).toHaveBeenCalledTimes(1);
        expect(result.current).toBe(true);
    });

    it('Lida com permissão já concedida', async () => {
        const mockRequestPermission = jest.fn(() => true);
        (useCameraPermission as jest.Mock).mockReturnValue({
            hasPermission: true,
            requestPermission: mockRequestPermission,
        });
        const {result} = renderHook(() => useCameraPermissions());
        expect(result.current).toBe(true);
    });
});
