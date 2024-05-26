import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import ImageShared from './Image.shared';


const IOSLogo = () => {
    return (
        <ImageBackground source={require('assets/logos/IOS_logo_(2013).png')} />
    );
};


const ImageIOS: React.FC = (props) => {
    return <ImageShared style={styles.iosBackground} {...props} ><IOSLogo></IOSLogo></ImageShared>;
};

const styles = StyleSheet.create({
    iosBackground: {
        backgroundColor: '#add8e6',
    },
});

export default ImageIOS;