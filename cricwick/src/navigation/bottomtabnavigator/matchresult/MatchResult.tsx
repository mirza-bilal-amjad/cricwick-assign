import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect} from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BallByBall from "../../../screens/match_result_bottom_tab_screen/BallByBall";
import ScoreCard from "../../../screens/match_result_bottom_tab_screen/ScoreCard";
import MRSummary from "../../../screens/match_result_bottom_tab_screen/MRSummary";
import MRVideos from "../../../screens/match_result_bottom_tab_screen/MRVideos";
import PlayingEleven from "../../../screens/match_result_bottom_tab_screen/PlayingEleven";
import Report from "../../../screens/match_result_bottom_tab_screen/Report";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";
//@ts-ignore
import PlayingXIIcon from '../../../assets/Images/ico_player_on.png'
import {useTheme} from "../../../hooks";

const MatchResultBottomTabs = createBottomTabNavigator();


const MatchResult = ({route}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation();
	const renderHeader = (title: string, matchNumber: string) => {
		return (
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				height: 52.5,
				position: 'relative',
				backgroundColor: colors.background,

			}}>
				<TouchableOpacity
					style={{
						marginHorizontal: 15,
						zIndex: 10
					}}
					onPress={() => navigation.goBack()}>
					<GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
				</TouchableOpacity>
				<View style={{
					flex: 1,
					width: Dimensions.get('window').width,
					position: 'absolute',
				}}>
					<Text style={{
						color: colors.text,
						fontWeight: 'bold',
						fontSize: 18,
						textAlign: 'center'
					}}>{
						title
					}</Text>
					<Text style={{
						color: Colors.textGray200,
						fontWeight: '500',
						fontSize: 14,
						textAlign: 'center'
					}}>{
						matchNumber
					}</Text>
				</View>
			</View>
		);
	}

	useEffect(() => {
		/*const handleBackPress = () => {
			//@ts-ignore
			navigation.reset(
				{
					index: 0,
					//@ts-ignore

					routes: [{name: 'BottomTabNavigation'}],
					config: {
						duration: 500, // Animation duration in milliseconds
						easing: Easing.inOut(Easing.ease), // Animation easing function
					}
				}
			);
			return true; // Return true to prevent default behavior (going back)
		};
		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
		return () => {
			backHandler.remove();
		};*/
	}, [route]);

	return (
		<MatchResultBottomTabs.Navigator initialRouteName={'MRSummary'} screenOptions={{
			tabBarStyle: {
				backgroundColor: colors.background,
				height: 60,
				padding: 0,
				justifyContent: 'center',
				borderTopColor: colors.background
			},
			tabBarActiveTintColor: '#c22026',
			tabBarLabelStyle: {
				padding: 0,
				top: -2,
				fontSize: 12,
				fontWeight: 'bold',
			},
			tabBarIconStyle: {
				padding: 0,
				top: 5
			}

		}}>
			{route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'BallByBall'} component={BallByBall} options={{
					headerShown: true,
					header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
					title: 'Ball by Ball',
					tabBarIcon: ({focused, color, size}) => (
						<GoogleIcon name={'sports-cricket'} size={size} color={color}/>
					),
				}} initialParams={{
					matchId: route.params.matchId
				}}/>}
			{route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'ScoreCard'} component={ScoreCard} options={{
					headerShown: true,
					header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
					title: 'Scorecard',
					tabBarIcon: ({focused, color, size}) => (
						<GoogleIcon name={'scoreboard'} size={size} color={color}/>
					),

				}} initialParams={{
					matchId: route.params.matchId
				}}/>}
			<MatchResultBottomTabs.Screen name={'MRSummary'} component={MRSummary} options={{
				headerShown: true,
				header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
				title: 'Summary',
				tabBarIcon: ({focused, color, size}) => (
					<GoogleIcon name={'view-stream'} size={size} color={color}/>
				),
			}} initialParams={{
				matchId: route.params.matchId
			}}/>
			{route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'MRVideos'} component={MRVideos} options={{
					headerShown: true,
					header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
					title: 'Videos',
					tabBarIcon: ({focused, color, size}) => (
						<GoogleIcon name={'ondemand-video'} size={size} color={color}/>
					),
				}} initialParams={{
					matchId: route.params.matchId
				}}/>}
			{route.params.matchState !== 'Over' ?
				route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'PlayingEleven'} component={PlayingEleven} options={{
					headerShown: true,
					header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
					title: 'Playing XI',
					tabBarIcon: ({focused, color, size}) => (
						<Image source={PlayingXIIcon} style={{width: size, height: size, tintColor: color}}/>
					),
				}} initialParams={{
					matchId: route.params.matchId,
					team_1_id: route.params.team_1_id,
					team_2_id: route.params.team_2_id,
					nameTeamA: route.params.nameTeamA,
					nameTeamB: route.params.nameTeamB
				}}/> : route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'Report'} component={Report} options={{
					headerShown: true,
					header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
					title: 'Report',
					tabBarIcon: ({focused, color, size}) => (
						<GoogleIcon name={'description'} size={size} color={color}/>
					),
				}} initialParams={{
					matchId: route.params.matchId
				}}/>}

		</MatchResultBottomTabs.Navigator>
	);
};
export default MatchResult
const styles = StyleSheet.create({})
