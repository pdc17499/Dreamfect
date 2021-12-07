import { Dimensions, Platform, NativeModules } from 'react-native';
const { width, height } = Dimensions.get('window');
const { PlatformConstants } = NativeModules;

const DEVICE = {
    isIos: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    width,
    height,
    deviceType: PlatformConstants.interfaceIdiom,
    isSmallDevice: width < 375,
};

const STYLE = {
    hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
};

export {
    DEVICE,
    STYLE,
};
