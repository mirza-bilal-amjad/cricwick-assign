import {View, Text} from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../index";

const ActivityLoaderComp = ({style, colorFilters}: any) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LottieView source={ActivityLoader} autoPlay loop
                        style={style}
                        colorFilters={[colorFilters]}
            />
        </View>
    )
}
export default React.memo(ActivityLoaderComp)
