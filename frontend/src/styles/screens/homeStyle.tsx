import {StyleSheet} from 'react-native';
import colors from '../colors';
import spacing from '../spacing';
import typography from '../typography';

const homeStyle = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    title: {
        fontWeight: typography.header.fontWeight,
        fontSize: typography.header.fontSize,
        color: colors.primary,
        marginBottom: spacing.lg,
    },
    button: {
        backgroundColor: colors.secondary,
        padding: spacing.md,
        borderRadius: 8,
        fontWeight: typography.button.fontWeight,
        fontSize: typography.button.fontSize,
        color: colors.textLight,
    },
});

export default homeStyle;
