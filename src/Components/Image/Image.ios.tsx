import React from 'react';
import { ImageShared } from './Image.shared';
import { Image, StyleSheet } from 'react-native';


const IOSLogo = () => {
    return (
        <Image source={{ uri: "https://banner2.cleanpng.com/20180622/ozk/kisspng-iphone-5-ipod-touch-apple-ios-11-ios-logo-5b2d20e40fd9f0.5796429015296841960649.jpg" }} style={styles.image} />
    );
};


const ImageIOS: React.FC = (props) => {
    return <ImageShared style={styles.iosBackground} {...props} ><IOSLogo></IOSLogo></ImageShared>;
};

const styles = StyleSheet.create({
    iosBackground: {
        backgroundColor: '#add8e6',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default ImageIOS