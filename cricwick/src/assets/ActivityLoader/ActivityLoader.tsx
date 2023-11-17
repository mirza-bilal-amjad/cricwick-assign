import {View} from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../index";
import {useTheme} from "../../hooks";

const ActivityLoaderComp = ({style, colorFilters}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background

        }}>
            <LottieView source={ActivityLoader} autoPlay loop
                        style={style}
                        colorFilters={colorFilters}
            />
        </View>
    )
};
export default React.memo(ActivityLoaderComp)
