import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {fetchGenericHome} from "../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../assets";
import {useTheme} from "../../hooks";
import {Team1, Team2} from '../../components/comp.matchresultbottomtabscreen/playingeleven.component';

const TopTabs = createMaterialTopTabNavigator();
const PlayingEleven = ({route}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;

	const {team_1_id, team_2_id, matchId, nameTeamA, nameTeamB} = route.params;
	const [pXIDataT1, setPXIDataT1] = useState([]);
	const [pXIDataT2, setPXIDataT2] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const returnApi1 = (team_1_id: string | number, matchId: string | number) => {
		return `https://cwscoring.cricwick.net/api/${team_1_id}/${matchId}/squad?app_name=CricwickWeb`
	};
	const returnApi2 = (team_2_id: string | number, matchId: string | number) => {
		return `https://cwscoring.cricwick.net/api/${team_2_id}/${matchId}/squad?app_name=CricwickWeb`
	};
	const fetchPlayingXI = async () => {
		setRefreshing(true);
		await fetchGenericHome(returnApi1(team_1_id, matchId))
		.then((r: any) => {
			setPXIDataT1((prevState: any[]): any => {
				if (r.length !== 0) {
					setRefreshing(false);
					return r;
				} else {
					setRefreshing(false);
					return prevState;
				}
			});
		})
		.catch(e => console.error('Error:', e));
		await fetchGenericHome(returnApi2(team_2_id, matchId))
		.then((r: any) => {
			setPXIDataT2((prevState: any[]): any => {
				if (r.length !== 0) {
					setRefreshing(false);
					return r;
				} else {
					setRefreshing(false);
					return prevState;
				}
			});
		})
		.catch(e => console.error('Error:', e));
	};

	useEffect(() => {
		fetchPlayingXI().catch((e) => console.error(e));
	}, []);

	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: colors.background
		}}>
			{pXIDataT1.length > 0 && pXIDataT2.length > 0 ?
				<View style={{
					flex: 1,
					minHeight: 500,
					backgroundColor: colors.background,
				}}>
					<TopTabs.Navigator
						initialRouteName={'ODI'}
						screenOptions={{
							tabBarLabelStyle: {
								fontSize: 13,
								elevation: 0,
								fontWeight: '700',
							},
							tabBarActiveTintColor: darkMode ? '#fff' : '#c22026',
							tabBarStyle: {
								height: 50,
								elevation: 0,
								borderBottomWidth: .2,
								borderColor: 'transparent',
								marginHorizontal: 5,
								backgroundColor: colors.background

							},
							tabBarContentContainerStyle: {
								height: '100%',
								elevation: 0,
								marginTop: 1,
								// backgroundColor: colors.card
							},
							tabBarIndicatorContainerStyle: {
								marginVertical: 4,
								backgroundColor: colors.background,
							},
							tabBarIndicatorStyle: {
								height: '100%',
								backgroundColor: '#c22026',
								borderRadius: 40,
								opacity: darkMode ? .3 : .1
							},
							tabBarItemStyle: {
								elevation: 0,

							},


						}}
					>

						<TopTabs.Screen name={`${nameTeamA}`} component={Team1} initialParams={{team: pXIDataT1}}/>
						<TopTabs.Screen name={`${nameTeamB}`} component={Team2} initialParams={{team: pXIDataT2}}/>
					</TopTabs.Navigator>
				</View> :
				<View style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: colors.background
				}}>
					<LottieView source={ActivityLoader} autoPlay loop
					            style={{
						            width: 280, height: 280
					            }}
					            colorFilters={[{
						            keypath: "Shape Layer 2",
						            color: "#c22026"
					            }]}
					/>
				</View>
			}

		</SafeAreaView>
	);
}
export default PlayingEleven
const styles = StyleSheet.create({})
