import {Easing, Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {DateComponent} from "../index";
import FastImage from "react-native-fast-image";
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {getTimeSpan} from "../../utils/method";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setIndexNumber} from "../../store/toggleReducer";
import {useTheme} from "../../hooks";

const FadeInView = ({item, index, routeData}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const navigation = useNavigation();
	const translateY = useSharedValue(300);
	const opacity = useSharedValue(0);
	const dispatch = useDispatch();
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{translateY: translateY.value}],
			opacity: opacity.value
		}
	})

	useEffect(() => {
		translateY.value = withDelay(index < 10 ? index * 150 : 0, withTiming(1, {duration: 500}));
		opacity.value = withDelay(index < 10 ? index * 150 : 0, withTiming(1, {duration: 1000}));
	}, []);


	return (
		<Animated.View
			style={[animatedStyle, {
				flex: 1,
				margin: 2,
				backgroundColor: colors.card,
			}]}

		>
			<TouchableOpacity
				onPress={() => {
					dispatch(setIndexNumber(index))
					// @ts-ignore
					navigation.navigate('SideSwipeAbleArticles', {routeData: routeData, selectedIndex: index})
				}}
				activeOpacity={0.8}
			>
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
						color: colors.text,
						fontWeight: '500',
						fontSize: 13,
						height: 60
					}}>{item.title.length > 70 ? item.title.slice(0, 70) + '...' : item.title}</Text>
					<Text style={{color: Colors.textGray200, fontWeight: '400', fontSize: 10}}
					>{getTimeSpan(item?.created_at)}</Text>
				</View>
			</TouchableOpacity>
		</Animated.View>
	);
};
export default FadeInView
