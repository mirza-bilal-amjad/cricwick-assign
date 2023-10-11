/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */



import {ThemeNavigationColors} from "../../@types/theme";

/**
 * Colors
 */
export const Colors = {
    transparent: 'rgba(0,0,0,0)',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    //Typography
    textGray800: '#000000',
    textGray400: '#4D4D4D',
    textGray200: '#A1A1A1',
    primaryInActive: '#A4B8D3',
    primary: '#004FB4',
    bookedText: '#4F6C92',
    success: '#16A64D',
    error: '#E2006A',
    //ComponentColors
    circleButtonBackground: '#E1E1EF',
    circleButtonColor: '#44427D',
    lottieKp1: '#979797',
    lottieKp2: '#717171',
    lottieKp3: '#474646',
    lottieKp4: '#262626',
    lottieKp5: '#1E1E1E',

};

export const NavigationColors: Partial<ThemeNavigationColors> = {
    primary: Colors.primary,
    background: '#ffffff',
    card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
    tiny: 16,
    small: 18,
    regular: 20,
    large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
    tiny,
    small,
    regular,
    large,
};

export default {
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
};
