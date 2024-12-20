import {useEffect,useState} from 'react';
import {useCameraPermission} from 'react-native-vision-camera';

export const useCameraPermissions = () => {
    const {hasPermission,requestPermission} = useCameraPermission();
    const [permissionGranted,setPermissionGranted] = useState(false);

    useEffect(() => {
        (async () => {
            if(!hasPermission) {
                const granted = await requestPermission();
                setPermissionGranted(granted);
            } else {
                setPermissionGranted(true);
            }
        })();
    },[]);

    return permissionGranted;
};
