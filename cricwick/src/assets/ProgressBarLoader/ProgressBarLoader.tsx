import {View} from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import {Loader} from "../index";

const ProgressBarLoader = ({data, refreshing}: any) => {
    return (
        <View style={{
            height: 2
        }}>
            {data.length !== 0 && refreshing && <LottieView
                source={Loader} autoPlay loop
                style={{
                    position: 'relative',
                    height: 4,
                    top: -2,
                    zIndex: 10
                }}
                colorFilters={[
                    {
                        keypath: "Shape Layer 2",
                        color: "#c22026"
                    }]}
            />}
        </View>
    )
}
export default ProgressBarLoader
