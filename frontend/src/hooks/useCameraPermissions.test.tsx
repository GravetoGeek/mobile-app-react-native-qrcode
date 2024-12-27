import {act,renderHook} from '@testing-library/react-hooks';
import {useCameraPermission} from 'react-native-vision-camera';
import {useCameraPermissions} from './useCameraPermissions';

jest.mock('react-native-vision-camera', () => ({
    useCameraPermission: jest.fn(),
}));

describe('useCameraPermissions', () => {
    it('requests permission correctly', async () => {
        const mockRequestPermission = jest.fn().mockResolvedValue(true);
        useCameraPermission.mockReturnValue({
            hasPermission: false,
            requestPermission: mockRequestPermission,
        });
        const {result, waitForNextUpdate} = renderHook(() => useCameraPermissions());
        await waitForNextUpdate();
        expect(result.current).toBe(true);
        expect(mockRequestPermission).toHaveBeenCalled();
    });

    it('handles already granted permission', async () => {
        useCameraPermission.mockReturnValue({
            hasPermission: true,
            requestPermission: jest.fn(),
        });
        const {result} = renderHook(() => useCameraPermissions());
        expect(result.current).toBe(true);
    });
});
