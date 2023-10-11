import {ThemeNavigationColors} from "../../../../@types/theme";

export const Colors = {
    primary: '#004FB4',
    bookedText: '#4F6C92',
    primaryInActive: '#A4B8D3',
    textGray800: '#E0E0E0',
    textGray400: '#969696',
    textGray200: '#BABABA',
    inputBackground: '#3a3a3a',
    circleButtonBackground: '#252732',
    lottieKp1: '#a3c9ff',
    lottieKp2: '#79b1ff',
    lottieKp3: '#5797e8',
    lottieKp4: '#1662cc',
    lottieKp5: '#004FB4',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
    primary: Colors.primary,
    background: '#1B1A23',
    card: '#17171e',
};

export default {
    Colors,
    NavigationColors,
};
