import React from "react";
import { ImageBackground, StyleSheet } from "react-native-macos";
import ImageShared from "./Image.shared";

const MacOSLogo = () => {
    return (
        <ImageBackground source={require('assets/logos/IOS_logo_(2013).png')} />
    );
};


const ImageMacOS: React.FC = (props) => {
    return <ImageShared style={styles.iosBackground} {...props} ><MacOSLogo></MacOSLogo></ImageShared>;
};

const styles = StyleSheet.create({
    iosBackground: {
        backgroundColor: '#add8e6',
    },
});

export default ImageMacOS;