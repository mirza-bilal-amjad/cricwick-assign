import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {DateComponent} from "../index";
import FastImage from "react-native-fast-image";

const FadeInView = ({item, index}: any) => {
    const [animated] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true,
            delay: index < 10 ? index * 100 : 0, // Delay animation by index * 200ms
        }).start();
    }, []);

    return (
        <Animated.View
            style={{
                opacity: animated,
                flex: 1,
                margin: 2,
                transform: [{
                    translateY: animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: [250, 0],
                    })
                }],
            }}
        >
            <TouchableOpacity>
                <View style={{
                    width: '100%',
                }}>
                    <FastImage style={{
                        width: '100%',
                        aspectRatio: 16 / 9,
                    }} source={{uri: item.large_image}}/>
                </View>
                <View style={{margin: 5,}}>
                    <Text style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 13,
                        height: 60
                    }}>{item.title.length > 70 ? item.title.slice(0, 70) + '...' : item.title}</Text>
                    <DateComponent style={{color: 'black', fontWeight: 'bold', fontSize: 8}}
                                   date={item.created_at}/>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};
export default FadeInView
