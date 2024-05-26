import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import ImageShared from './Image.shared';

const AndroidLogo = () => {
    return (
        <ImageBackground source={require('assets/logos/128px-Android_logo_green.svg.png')} />
    );
};


const ImageAndroid: React.FC = (props) => {
    return <ImageShared style={styles.iosBackground} {...props} ><AndroidLogo></AndroidLogo></ImageShared>;
};

const styles = StyleSheet.create({
    iosBackground: {
        backgroundColor: '#add8e6',
    },
});

export default ImageAndroid;