import {StyleSheet} from 'react-native';
import colors from '../colors';
import spacing from '../spacing';
import typography from '../typography';

const qrCodeScannerStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    resultText: {
        fontSize: typography.body.fontSize,
        marginBottom: spacing.md,
    },
});

export default qrCodeScannerStyle;
