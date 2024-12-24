import {StyleSheet} from 'react-native';

const qrCodeRegistrationStyle = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9', // Fundo mais agradável
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333', // Melhor contraste para o texto
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5, // Cantos arredondados para inputs
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fff', // Fundo branco para inputs
    },
    pickerItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    pickerItemText: {
        color: '#000', // Texto em preto para melhor contraste
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000', // Sombra para destacar o modal
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
    },
    attributeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    selectButton: {
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    selectButtonText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    attributeInput: {
        flex: 1,
        marginHorizontal: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        backgroundColor: '#fff', // Fundo branco para inputs de atributos
    },
    qrCodeImage: {
        flex: 1, // Ocupa o espaço restante
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
});

export default qrCodeRegistrationStyle;
