import Variables from '../src/theme/Variables';
import { DefaultVariables, Fonts, Gutters, Images, Layout } from '../src/theme';
import { Theme as ReactNavigationTheme } from '@react-navigation/native/src/types';

export type ThemeVariables = {
  Colors: typeof Variables.Colors;
  NavigationColors: typeof Variables.NavigationColors;
  FontSize: typeof Variables.FontSize;
  MetricsSizes: typeof Variables.MetricsSizes;
};

export type Theme<F, G, I, L, C> = ThemeVariables & {
  Fonts: F;
  Gutters: G;
  Images: I;
  Layout: L;
  Common: C;
  Variables?: Partial<ThemeVariables>;
};

type NavigationColors<T> = T extends { colors: infer U } ? U : never;
type ThemeNavigationColors = NavigationColors<ReactNavigationTheme>;

export type ThemeNavigationTheme = {
  dark: boolean;
  colors: ThemeNavigationColors;
};

let fonts: { textTiny: { color: any; fontSize: any }; textSmall: { color: any; fontSize: any }; textError: { color: any }; textRight: { textAlign: string }; titleRegular: { color: any; fontSize: number; fontWeight: string }; titleSmall: { color: any; fontSize: number; fontWeight: string }; textUppercase: { textTransform: string }; textSuccess: { color: any }; textJustify: { textAlign: string }; textLobster: { fontFamily: string; fontWeight: string }; textBold: { fontWeight: string }; textPrimary: { color: any }; titleLarge: { color: any; fontSize: number; fontWeight: string }; textCenter: { textAlign: string }; textLarge: { color: any; fontSize: any }; textLeft: { textAlign: string }; textRegular: { color: any; fontSize: any }; textLight: { color: any } };
fonts = Fonts(DefaultVariables);
let gutters: Gutters;
gutters = Gutters(DefaultVariables);
let images: { sparkles: { bottomLeft: any; top: any; bottomRight: any; bottom: any; topLeft: any; topRight: any; right: any }; logo: any; icons: { send: any; colors: any; translate: any } };
images = Images(DefaultVariables);
let layout: {
  bottom0: { bottom: number }; col: { flexDirection: string }; alignItemsStretch: { alignItems: string }; mirror: { transform: { scaleX: number }[] }; selfStretch: { alignSelf: string }; justifyContentBetween: { justifyContent: string }; rowHCenter: { alignItems: string; flexDirection: string }; colVCenter: { alignItems: string; flexDirection: string }; rowVCenter: { flexDirection: string; justifyContent: string }; alignItemsCenter: { alignItems: string }; top0: { top: number }; scrollSpaceBetween: { flexGrow: number; justifyContent: string }; alignItemsEnd: { alignItems: string }; fullHeight: { height: string }; right0: { right: number }; justifyContentEnd: { justifyContent: string }; colHCenter: { flexDirection: string; justifyContent: string }; colReverse: { flexDirection: string }; halfWidth: { width: string }; row: { flexDirection: string }; alignItemsStart: { alignItems: string }; fullWidth: { width: string }; fullSize: { width: string; height: string }; colCenter: { alignItems: string; flexDirection: string; justifyContent: string }; center: { alignItems: string; justifyContent: string }; left0: { left: number }; rotate90: { transform: { rotate: string }[] }; fill: { flex: number }; scrollSpaceAround: { flexGrow: number; justifyContent: string }; rowCenter: { alignItems: string; flexDirection: string; justifyContent: string }; rotate90Inverse: { transform: { rotate: string }[] }; absolute: { position: string }; justifyContentAround: { justifyContent: string }; rowReverse: { flexDirection: string }; justifyContentCenter: { justifyContent: string }; relative: { position: string }
};
layout = Layout(DefaultVariables);

export type CommonParams<C> = ThemeVariables &
  Pick<
    Theme<typeof fonts, typeof gutters, typeof images, typeof layout, C>,
    'Layout' | 'Gutters' | 'Fonts' | 'Images'
  >;

type Margins =
  | 'Margin'
  | 'BMargin'
  | 'TMargin'
  | 'RMargin'
  | 'LMargin'
  | 'VMargin'
  | 'HMargin';
type Paddings =
  | 'Padding'
  | 'BPadding'
  | 'TPadding'
  | 'RPadding'
  | 'LPadding'
  | 'VPadding'
  | 'HPadding';

type MarginKeys = `${keyof ThemeVariables['MetricsSizes']}${Margins}`;
type PaddingKeys = `${keyof ThemeVariables['MetricsSizes']}${Paddings}`;

type Gutters = {
  [key in MarginKeys | PaddingKeys]: {
    [k in string]: number;
  };
};
