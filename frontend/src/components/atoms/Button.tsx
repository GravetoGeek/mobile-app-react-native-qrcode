// src/components/Button/index.js
import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import buttonStyle from '../../styles/components/atoms/buttonStyle';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: {
        button?: object;
        text?: object;
        disabled?: object;
    };
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, disabled = false}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style?.button,buttonStyle.button, disabled && style?.disabled]}
            disabled={disabled}
        >
            <Text style={[style?.text,buttonStyle.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
