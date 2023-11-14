import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect} from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import RankODI from "./component/RankODI";
import RankT20 from "./component/RankT20";
import RankTest from "./component/RankTest";
import {useTheme} from "../../../hooks";

const RankTopTabs = createMaterialTopTabNavigator();
const SideRankingComponent = ({odi, t20, test}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		<View style={[styles.itemContainer, {
		}]}>
			<View style={{
				flex: 1,
				// backgroundColor: 'red'
			}}>
				<View style={{
					flex: 1,
// backgroundColor: 'blue'
				}}>
					<RankTopTabs.Navigator
						initialRouteName={'RankODI'}

						screenOptions={{
							swipeEnabled: true,
							tabBarLabelStyle: {

								fontSize: 17,
								fontWeight: '700',
							},
							tabBarStyle: {
								height: 50,
								backgroundColor: 'transparent',
								elevation: 0,
								borderBottomWidth: .2,
								marginHorizontal: 5,
								borderColor: 'transparent',

							},
							tabBarContentContainerStyle: {
								height: '100%',
								// marginTop: -2,
							},
							tabBarActiveTintColor: Colors.textGray800,
							tabBarInactiveTintColor: Colors.textGray200,
							tabBarIndicatorContainerStyle: {
								marginVertical: 5,
							},
							tabBarIndicatorStyle: {
								height: '100%',
								borderRadius: 40,
								backgroundColor: 'rgba(4,60,11,0.39)'
							},

							tabBarItemStyle: {
							},
						}}
					>
						<RankTopTabs.Screen name="RankODI" component={RankODI} options={{
							tabBarLabel: 'ODI'
						}} initialParams={{odi: odi}}/>
						<RankTopTabs.Screen name="RankT20" component={RankT20} options={{
							tabBarLabel: 'T20'
						}} initialParams={{t20: t20}}/>
						<RankTopTabs.Screen name="RankTest" component={RankTest} options={{
							tabBarLabel: 'TEST'
						}} initialParams={{test: test}}/>
					</RankTopTabs.Navigator>
				</View>
			</View>
		</View>
	);
}
export default SideRankingComponent
const styles = StyleSheet.create({
	itemContainer: {
		flex: 1
	},
	thumbnailView: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
	},
	thumbnail: {
		width: '100%',
		// borderRadius: 14
	},
	title: {
		fontSize: 12.5,
		color: 'black',
		marginTop: 10,
	},
})

