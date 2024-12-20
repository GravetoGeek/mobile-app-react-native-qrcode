import {StyleSheet} from 'react-native';
import colors from '../../colors';
import spacing from '../../spacing';
import typography from '../../typography';

const contentWrapperStyle = StyleSheet.create({
    container: {
        flexGrow: 1, // Ocupa todo o espaço disponível
        paddingHorizontal: 16, // Padding nas laterais
        paddingVertical: 10,  // Espaço vertical
    },
});

export default contentWrapperStyle;
