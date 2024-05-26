import React from "react";
import { Image, StyleSheet } from "react-native-macos";
import { ImageShared } from "./Image.shared";

const MacOSLogo = () => {
    return (
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_960_720.png" }} style={styles.image} />
    );
};

const ImageMacOS: React.FC = (props) => {
    return <ImageShared style={styles.macOSBackground} {...props} ><MacOSLogo></MacOSLogo></ImageShared>;
};

const styles = StyleSheet.create({
    macOSBackground: {
        backgroundColor: '#add8e6',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default ImageMacOS