import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ImageShared } from './Image.shared';

const AndroidLogo = () => {
    return (
        <Image source={{ uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" }} style={styles.image} />
    );
};


const ImageAndroid: React.FC = (props) => {
    return <ImageShared {...props} ><AndroidLogo></AndroidLogo></ImageShared>;
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default ImageAndroid;