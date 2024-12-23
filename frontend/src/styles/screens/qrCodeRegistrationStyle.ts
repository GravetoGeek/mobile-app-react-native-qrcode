import {StyleSheet} from 'react-native';
const qrCodeRegistrationStyle = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    pickerItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    pickerItemText: {
        color: 'red',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
    },
    attributeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    selectButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    selectButtonText: {
        fontSize: 16,
        color: '#333',
    },
    attributeInput: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default qrCodeRegistrationStyle;