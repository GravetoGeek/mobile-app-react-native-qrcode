import {StyleSheet} from 'react-native';
import colors from './colors';
import spacing from './spacing';
import typography from './typography';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.md,
        margin: spacing.md,
    },
    header: {
        fontWeight: typography.header.fontWeight,
        fontSize: typography.header.fontSize,
        color: colors.primary,
        marginBottom: spacing.md,
    },
    button: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        borderRadius: 8,
        fontSize: typography.body.fontSize,
        fontWeight: typography.body.fontWeight,
        color: '#FFF',
        textAlign: 'center',
    },
});

export default globalStyles;
