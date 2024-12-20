import {StyleSheet} from 'react-native';
import colors from '../../colors';
import spacing from '../../spacing';
import typography from '../../typography';

const buttonStyle = StyleSheet.create({
    button: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginVertical: spacing.sm,
        borderRadius: 8,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    disabled: {
        backgroundColor: colors.textLight,
    },
    text: {
        fontSize: typography.body.fontSize,
        fontWeight: typography.body.fontWeight,
        color: colors.textLight,
    },
});

export default buttonStyle;
