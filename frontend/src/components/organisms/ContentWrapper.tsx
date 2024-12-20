// src/components/Layout/ContentWrapper.tsx
import React from 'react';
import {ScrollView} from 'react-native';
import contentWrapperStyle from '../../styles/components/organisms/contentWrapperStyle';

interface ContentWrapperProps {
    children: React.ReactNode;
    style?: {
        container?: object;
    };
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, style }) => {
    return (
        <ScrollView
            contentContainerStyle={[style?.container,contentWrapperStyle.container]}
            keyboardShouldPersistTaps="handled"
        >
            {children}
        </ScrollView>
    );
};

export default ContentWrapper;
