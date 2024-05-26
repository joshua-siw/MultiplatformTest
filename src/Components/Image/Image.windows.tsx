import React from "react";
import { Image, StyleSheet } from "react-native-windows";
import { ImageShared } from "./Image.shared";

const WindowsLogo = () => {
    return (
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/88px-Windows_logo_-_2012_derivative.svg.png?20150411034316" }} style={styles.image} />
    );
};

const ImageWindows: React.FC = (props) => {
    return <ImageShared style={styles.windowsBackground} {...props} ><WindowsLogo></WindowsLogo></ImageShared>;
};

const styles = StyleSheet.create({
    windowsBackground: {
        backgroundColor: '#add8e6',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default ImageWindows