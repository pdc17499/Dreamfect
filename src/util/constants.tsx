import { iconHome, iconNotification, iconProfile, iconSearch } from '@assets';
import { ChangePassword, EditProfile, ExplorerScreen, HomeScreen, NotificationScreen, Profile, ProfileSetting, SearchScreen, UserScreen, SuccessScreen } from '@screens';
import { Dimensions, Platform, NativeModules } from 'react-native';
import BottomTab from '../component/BottomTab/BottomTab';
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
export const MAIN_TAB_BAR = {
    HOME: 'HOME',
    PROFILE: 'PROFILE',
    EXPLORER: 'EXPLORER',
    NOTIFICATIONS: 'NOTIFICATIONS',
    SEARCH: 'SEARCH',
}
export const SCREEN_ROUTER_APP = {
    HOME: 'HOME',
    PROFILE: 'PROFILE',
    EXPLORER: 'EXPLORER',
    NOTIFICATIONS: 'NOTIFICATIONS',
    SEARCH: 'SEARCH',
    MAIN: 'MAIN',
    PROFILE_SETTING: 'PROFILE_SETTING',
    EDIT_PROFILE: 'EDIT_PROFILE',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    SUCCESS_SCREEN: 'SUCCESS_SCREEN'
}
export const TAB_BAR = {
    HOME: {
        name: SCREEN_ROUTER_APP.HOME,
        icon: iconHome,
        route: HomeScreen,
    },
    PROFILE: {
        name: SCREEN_ROUTER_APP.PROFILE,
        icon: iconProfile,
        route: Profile,
    },
    EXPLORER: {
        name: SCREEN_ROUTER_APP.EXPLORER,
        icon: '',
        route: ExplorerScreen,
    },
    NOTIFICATIONS: {
        name: SCREEN_ROUTER_APP.NOTIFICATIONS,
        icon: iconNotification,
        route: NotificationScreen,
    },
    SEARCH: {
        name: SCREEN_ROUTER_APP.SEARCH,
        icon: iconSearch,
        route: SearchScreen,
    },
}
const { CHANGE_PASSWORD, MAIN, PROFILE_SETTING, EDIT_PROFILE, SUCCESS_SCREEN } = SCREEN_ROUTER_APP
export const APP_STACK = {
    [MAIN]: BottomTab,
    [PROFILE_SETTING]: ProfileSetting,
    [EDIT_PROFILE]: EditProfile,
    [CHANGE_PASSWORD]: ChangePassword,
    [SUCCESS_SCREEN]: SuccessScreen
}