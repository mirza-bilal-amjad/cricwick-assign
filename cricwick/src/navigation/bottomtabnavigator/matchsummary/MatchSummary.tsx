import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// @ts-ignore
import onGoing from '../../../assets/Images/ico_ongoing_on.png'
// @ts-ignore
import scheduleIcon from '../../../assets/Images/ico_scorecard_on.png'
// @ts-ignore
import squadIcon from '../../../assets/Images/ico_sqad_on.png'
// @ts-ignore
import resultIcon from '../../../assets/Images/ico_results_on.png'
// @ts-ignore
import upcomingIcon from '../../../assets/Images/ico_upcoming_on.png'
// @ts-ignore
import seriesBottomImage from '../../../assets/Images/series_side.png'
import Summary from "../../../screens/match_summary_bottom_tab_screen/Summary";
import Videos from "../../../screens/match_summary_bottom_tab_screen/Videos";
import PointTable from "../../../screens/match_summary_bottom_tab_screen/PointTable";
import Schedules from "../../../screens/match_summary_bottom_tab_screen/Schedules";
import Squads from "../../../screens/match_summary_bottom_tab_screen/Squads";
import {useTheme} from "../../../hooks";

const BottomTabs = createBottomTabNavigator();

function Header(props: { onPress: () => any, params: any, colors: any, leftIcon?: any, rightIcon?: any }) {
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
				marginLeft: 7.5
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
			}}>{props.params.title}</Text>
		</View>
		<TouchableOpacity>
			<GoogleIcon name={props.rightIcon} size={28} color={props.colors.text}/>
		</TouchableOpacity>
	</View>;
}

const MatchSummary = ({navigation, route}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const {is_videos_enabled, has_points_table} = route.params;
	return (
		<BottomTabs.Navigator
			initialRouteName={'Summary'}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors.background,
					height: 60,
					padding: 0,
					borderTopColor: colors.background,

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
			<BottomTabs.Screen name="Summary" component={Summary} options={{
				headerShown: true,
				header: () => (
					<Header colors={colors} onPress={() => navigation.goBack()} params={route.params}
					        leftIcon={"arrow-back-ios"} rightIcon={'cast'}/>
				),
				headerStyle: {
					backgroundColor: '#FFEAE7',
				},
				tabBarIcon: ({focused, color, size}) => (
					<Image source={onGoing} style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}} initialParams={{
				matchId: route.params.matchId,
			}}/>
			{is_videos_enabled && <BottomTabs.Screen name="Videos" component={Videos} options={{
				headerShown: true,
				header: () => (
					<Header colors={colors} onPress={() => navigation.goBack()} params={route.params}
					        leftIcon={"arrow-back-ios"} rightIcon={'cast'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={upcomingIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}} initialParams={{
				matchId: route.params.matchId,
			}}/>}
			{has_points_table && <BottomTabs.Screen name="PointTable" component={PointTable} options={{
				headerShown: true,
				header: () => (
					<Header colors={colors} onPress={() => navigation.goBack()} params={route.params}
					        leftIcon={"arrow-back-ios"} rightIcon={'cast'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={resultIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}} initialParams={{
				matchId: route.params.matchId,
			}}/>}
			<BottomTabs.Screen name="Schedules" component={Schedules} options={{
				headerShown: true,
				header: () => (
					<Header colors={colors} onPress={() => navigation.goBack()} params={route.params}
					        leftIcon={"arrow-back-ios"} rightIcon={'cast'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={scheduleIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}} initialParams={{
				matchId: route.params.matchId,
			}}/>
			<BottomTabs.Screen name="Squads" component={Squads} options={{
				headerShown: true,
				header: () => (
					<Header colors={colors} onPress={() => navigation.goBack()} params={route.params}
					        leftIcon={"arrow-back-ios"} rightIcon={'cast'}/>
				),
				tabBarIcon: ({focused, color, size}) => (
					<Image source={squadIcon}
					       style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
				),
			}} initialParams={{
				matchId: route.params.matchId,
			}}/>
		</BottomTabs.Navigator>
	);
}
export default MatchSummary
const styles = StyleSheet.create({})
