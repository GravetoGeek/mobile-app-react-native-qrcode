import {useEffect,useState} from 'react';
import {Code,useCodeScanner} from 'react-native-vision-camera';

interface UseQRScannerResult {
    scannedData: Code | null;
    isScanning: boolean;
    resetScanner: () => void;
    codeScanner: ReturnType<typeof useCodeScanner>;
}

export const useQRScanner = (): UseQRScannerResult => {
    const [scannedData, setScannedData] = useState<Code | null>(null);
    const [isScanning, setIsScanning] = useState(true);

    const codeScanner = useCodeScanner({
        codeTypes: [
            'aztec',
            'codabar',
            'code-128',
            'code-39',
            'code-93',
            'data-matrix',
            'ean-13',
            'ean-8',
            'itf',
            'pdf-417',
            'qr',
            'upc-a',
            'upc-e',
        ],
        onCodeScanned: (codes: Code[]) => {
            if (codes.length > 0 && isScanning) {
                const firstCode = codes[0] || 'No data';
                setScannedData(firstCode);
                setIsScanning(false); // Pausa o scanner após a leitura bem-sucedida
            }
        },
    });

    const resetScanner = () => {
        setScannedData(null);
        setIsScanning(true);
    };

    useEffect(() => {
        return () => {
            resetScanner();
        };
    }, []);

    return {
        scannedData,
        isScanning,
        resetScanner,
        codeScanner,
    };
};
