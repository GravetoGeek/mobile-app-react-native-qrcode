import React from 'react';
import {StyleSheet,Text,TextInput} from 'react-native';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({label,value,onChange,placeholder,secureTextEntry}) => {
    return (
        <React.Fragment>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 4,
    },
});

export default InputField;
