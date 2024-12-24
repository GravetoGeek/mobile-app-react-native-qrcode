import React from 'react';
import {Text,View} from 'react-native';
import Button from '../atoms/Button';


interface ShowQrcodeDataProps {
    title: string;
    textButton: string;
    data: object;
    onPress: () => void;
    style?: {
        title: object;
        data: object;
        Button: object;
        container: object;
    };
}

const ShowQrcodeData: React.FC<ShowQrcodeDataProps> = ({title,data,textButton,onPress,style}) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <Text style={style.data}>{JSON.stringify(data,null,2)}</Text>
            <Button title={textButton} style={style.button} onPress={onPress} />
        </View>
        // {/* Exibir e atualizar o qrCode dinâmicamente */}

    );
};

export default ShowQrcodeData;
