import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// import {useFonts} from 'react-native-google-fonts'
// @ts-ignore
import cricwickImage from '../../../assets/Images/app_logo.png'
// @ts-ignore
import onGoing from '../../../assets/Images/ico_ongoing_on.png'
// @ts-ignore
import resultIcon from '../../../assets/Images/ico_results_on.png'
// @ts-ignore
import upcomingIcon from '../../../assets/Images/ico_upcoming_on.png'
// @ts-ignore
import fantasyImage from '../../../assets/Images/fantasy_bottom.png'
// @ts-ignore
import seriesBottomImage from '../../../assets/Images/series_side.png'
import OnGoing from "../../../screens/mainbottomtabscreens/series/on_going/OnGoing";
import Upcoming from "../../../screens/mainbottomtabscreens/series/upcoming/Upcoming";
import Result from "../../../screens/mainbottomtabscreens/series/result/Result";
import {useTheme} from "../../../hooks";

const BottomTabs = createBottomTabNavigator();

interface HeaderProps {
	leftIcon: boolean
}

interface HeaderProps {
	leftIcon: boolean
}

function Header(
	props: {
		onPress: () => any;
		colors: any;
		leftIcon: string;
		rightIcon: string;
		headerTitle?: string;
	}) {
	return <View style={{
		height: 50,
		backgroundColor: props.colors.background,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	}}>
		<TouchableOpacity
			style={{
				alignItems: "center",
				marginLeft: 10
			}} activeOpacity={0.8}
			onPress={props.onPress}
		>
			<GoogleIcon name={props.leftIcon} size={30} color={props.colors.text}/>
		</TouchableOpacity>
		<View>
			<Text style={{
				fontSize: 20,
				fontWeight: "bold",
				color: props.colors.text
			}}>{props.headerTitle}</Text>
		</View>
		<TouchableOpacity>
			<GoogleIcon name={props.rightIcon} size={28} color={props.colors.text}/>
		</TouchableOpacity>
	</View>;
}

const Series = ({navigation}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		<BottomTabs.Navigator initialRouteName={'Ongoing'} screenOptions={{
			tabBarStyle: {
				backgroundColor: colors.background,
				height: 60,
				padding: 0,
				borderTopColor: 'transparent',
			},
			tabBarActiveTintColor: '#c22026',
			tabBarLabelStyle: {
				padding: 0,
				fontSize: 12,
				fontWeight: 'bold',
			},
			tabBarIconStyle: {
				padding: 0,
				top: 5
			}

		}}>
			<BottomTabs.Screen name="Ongoing" component={OnGoing} options={{
				headerShown: true,
				header: () => (
					<Header onPress={() => navigation.goBack()} colors={colors} leftIcon={'arrow-back-ios'}
					        rightIcon={'cast'} headerTitle={'Ongoing'}/>
				),
				headerStyle: {
					backgroundColor: '#FFEAE7',
				},
				tabBarIcon: ({focused, color, size}) => (
					<Image source={onGoing} style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}}/>
			<BottomTabs.Screen name="Upcoming" component={Upcoming} options={{
				headerShown: true,
				header: () => (
					<Header onPress={() => navigation.goBack()} colors={colors} leftIcon={'arrow-back-ios'}
					        rightIcon={'cast'} headerTitle={'Upcoming'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={upcomingIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}}/>
			<BottomTabs.Screen name="Result" component={Result} options={{
				headerShown: true,
				header: () => (
					<Header onPress={() => navigation.goBack()} colors={colors} leftIcon={'arrow-back-ios'}
					        rightIcon={'cast'} headerTitle={'Result'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={resultIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}}/>
		</BottomTabs.Navigator>
	);
}
export default Series
const styles = StyleSheet.create({})
