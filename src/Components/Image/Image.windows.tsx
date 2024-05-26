import React from "react";
import ImageShared from "./Image.shared";
import { ImageBackground, StyleSheet } from "react-native-windows";

const WindowsLogo = () => {
    return (
        <ImageBackground source={require('assets/logos/IOS_logo_(2013).png')} />
    );
};


const ImageWindows: React.FC = (props) => {
    return <ImageShared style={styles.iosBackground} {...props} ><WindowsLogo></WindowsLogo></ImageShared>;
};

const styles = StyleSheet.create({
    iosBackground: {
        backgroundColor: '#add8e6',
    },
});

export default ImageWindows;