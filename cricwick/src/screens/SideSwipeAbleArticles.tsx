import React from 'react';
import {Dimensions, SafeAreaView, Text} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {ArticleComponent} from "../components";
import LottieView from "lottie-react-native";
import {SwipeLeft, SwipeRight} from "../assets";
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from 'react-native-reanimated';
import {useTheme} from "../hooks";

const SideSwipeAbleArticles = ({route}: any) => {
		const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
		const {colors} = NavigationTheme;
		const {routeData, selectedIndex} = route.params;
		// usign react reanimated make the animation of the swipe left and right by changing tranforX value

		const translateX1 = useSharedValue(300);
		const translateX2 = useSharedValue(-300);
		const opacity = useSharedValue(0);
		const animatedStyle1 = useAnimatedStyle(() => {
			return {
				transform: [{translateX: translateX1.value}],
				opacity: opacity.value
			}
		})
		const animatedStyle2 = useAnimatedStyle(() => {
			return {
				transform: [{translateX: translateX2.value}],
				opacity: opacity.value,
				left: 0
			}
		})

		translateX1.value = withDelay(0, withTiming(0, {duration: 500}));
		translateX2.value = withDelay(0, withTiming(0, {duration: 500}));
		opacity.value = withDelay(0, withTiming(1, {duration: 500}));
		//play the animation for 1 second and then reset the animation
		setTimeout(() => {
			translateX1.value = withDelay(0, withTiming(300, {duration: 1000}));
			translateX2.value = withDelay(0, withTiming(-300, {duration: 1000}));
			opacity.value = withDelay(0, withTiming(1, {duration: 1000}));
		}, 3500)


		const initialIndex = selectedIndex || 0;

		const routes = routeData.map((item: any, index: number) => ({
			key: index.toString(),
			title: index.toString(),
			content: item
		}));

		const renderScene = SceneMap(
			Object.fromEntries(
				routes.map((route: any) => [
					route.key,
					() => <ArticleComponent item={route.content}/>
				])
			)
		);

		return (
			<SafeAreaView style={{
				flex: 1,
				backgroundColor: colors.background
			}}>
				{(selectedIndex >= 0 && selectedIndex < routeData.length - 1) &&
                    < Animated.View style={[animatedStyle1, {
						flexDirection: 'row',
						alignItems: 'center',
						paddingRight: 10,

						borderTopLeftRadius: 40,
						borderBottomLeftRadius: 40,
						justifyContent: 'space-around',
						position: 'absolute',
						top: Dimensions.get('window').height * .5 - 60,

						right: 0,
						zIndex: 1000,
						backgroundColor: !darkMode ? 'rgba(7,7,7,0.81)' : 'rgba(166,166,166,0.86)',
					}]}>
                        <LottieView source={SwipeLeft} speed={2} style={{
							width: 65, height: 65,
						}} colorFilters={[{
							keypath: "scroll_up",
							color: !darkMode ? '#fff' : '#000'
						}]} autoPlay loop/>
                        <Text style={{
							color: !darkMode ? "#fff" : '#000',
							fontWeight: 'bold', fontSize: 15,
						}}>Swipe Left</Text>
                    </Animated.View>
				}
				{
					selectedIndex > 0 &&
                    <Animated.View style={[animatedStyle2, {
						flexDirection: 'row-reverse',
						alignItems: 'center',
						paddingRight: 10,

						borderTopRightRadius: 40,
						borderBottomRightRadius: 40,
						justifyContent: 'space-around',
						position: 'absolute',
						top: Dimensions.get('window').height * .5 - 60,
						length: 0,
						zIndex: 1000,
						backgroundColor: !darkMode ? 'rgba(7,7,7,0.81)' : 'rgba(166,166,166,0.86)',
					}]}>
                        <LottieView source={SwipeRight} speed={2} style={{
							width: 65, height: 65,
						}} colorFilters={[{
							keypath: "scroll_up",
							color: !darkMode ? "#fff" : '#000'
						}]} autoPlay loop/>
                        <Text style={{
							color: !darkMode ? '#fff' : '#000',
							fontWeight: 'bold', fontSize: 15,
						}}>Swipe Right</Text>
                    </Animated.View>
				}
				<TabView
					animationEnabled
					renderTabBar={() => null}
					navigationState={{index: initialIndex, routes}}
					renderScene={renderScene}
					onIndexChange={() => {
					}}
					initialLayout={{width: Dimensions.get('window').width}}
				/>
			</SafeAreaView>
		)
			;
	}
;

export default SideSwipeAbleArticles;
