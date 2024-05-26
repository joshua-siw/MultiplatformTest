import { Platform } from 'react-native';
import ImageIOS from './Image.ios';
import ImageWindows from './Image.windows';
import ImageMacOS from './Image.macos';

const DefaultImageComponent = () => {
    console.warn("Platform not supported");
    return null;
};

// todo create reusable function instead using Platform directly here
export const Image = Platform.select({
    ios: ImageIOS,
    android: ImageWindows,
    macos: ImageMacOS,
    windows: ImageWindows,
}) || DefaultImageComponent;