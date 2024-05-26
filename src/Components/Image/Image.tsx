import { Platform } from 'react-native';
import ImageAndroid from './Image.android';
import ImageIOS from './Image.ios';
import ImageMacOS from './Image.macos';
import ImageWindows from './Image.windows';

const DefaultImageComponent = () => {
    console.warn("Platform not supported");
    return null;
};

// todo create reusable function instead using Platform directly here
const ImageTest = Platform.select({
    ios: ImageIOS,
    android: ImageAndroid,
    macos: ImageMacOS,
    windows: ImageWindows,
}) || DefaultImageComponent;

export default ImageTest