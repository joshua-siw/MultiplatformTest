import React from 'react';
import { View, StyleSheet } from 'react-native';

type ImageProps = {
    children?: React.ReactNode;
    style?: object;
};

const ImageShared: React.FC<ImageProps> = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export default ImageShared;