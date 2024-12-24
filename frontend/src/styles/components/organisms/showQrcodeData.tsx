import {StyleSheet} from 'react-native';
import colors from '../../colors';
import spacing from '../../spacing';
import typography from '../../typography';

const showQrcodeData = StyleSheet.create( {
    title: {
        fontSize: typography.body.fontSize,
        marginBottom: spacing.sm,
    },
    data: {
        fontSize: typography.caption.fontSize,
        marginBottom: spacing.md,
    },
    Button: {
        fontSize: typography.body.fontSize,
        marginBottom: spacing.md,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: spacing.md,
    },


});
export default showQrcodeData;


