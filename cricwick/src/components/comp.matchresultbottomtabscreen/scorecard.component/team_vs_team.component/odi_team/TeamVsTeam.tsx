import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../../hooks";

const TeamVsTeam = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const team1 = item['innings'].filter((inItem: any) => inItem.batting_team_id === item.team_1_id);
	const team2 = item['innings'].filter((inItem: any) => inItem.batting_team_id === item.team_2_id);

	if (team1.length < 2) {
		for (let i = 0; i < 1 - team1.length; i++) {
			team1.push({
				batting_team_id: item.team_1_id,
				fielding_team_id: item.team_2_id,
				id: null,
				overs: null,
				run_rate: null,
				total_overs: 50,
				runs: null,
				wickets: null,
				required_rate: null
			});

		}
	}
	if (team2.length < 2) {
		for (let i = 0; i < 1 - team2.length; i++) {
			team2.push({
				batting_team_id: item.team_2_id,
				fielding_team_id: item.team_1_id,
				id: null,
				overs: null,
				run_rate: null,
				total_overs: 50,
				runs: null,
				wickets: null,
				required_rate: null
			});

		}
	}


	const odi_overs = (item: any) => {
		return (
			<View style={{
				// backgroundColor: 'lightblue',
			}}>
				<View style={{
					flexShrink: 1,
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
				}}>
					{item.overs !== null ? <View style={{
							flexDirection: 'row',
							alignItems: 'flex-end',
						}}>
							<Text style={{
								color: colors.text,
								fontSize: 12,
							}}>{Number(item.overs > 0 ? item.overs : 0).toFixed(1)}</Text>
							<Text style={{
								color: colors.text,
								fontSize: 11,
								fontWeight: 'bold',
							}}> (ov)</Text>
						</View> :
						<Text style={{
							color: colors.text,
							textAlign: 'center',
						}}>-</Text>
					}

				</View>
				<View></View>
			</View>
		);
	}
	const odi_score = (item: any) => {
		return (
			<View style={{}}>
				<View style={{
					flexShrink: 1,
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
				}}>
					{item ? <Text style={{
							color: colors.text,
							fontWeight: '500',
						}}>{item.runs !== null ? item.runs > 0 ? item.runs : 0 : '-'}/{item.wickets !== null ? item.wickets > 0 ? item.wickets : 0 : '-'}</Text> :
						<Text style={{
							color: colors.text,
							fontWeight: '500',
							textAlign: 'center',
						}}>-</Text>
					}
				</View>
			</View>
		);
	}
	return (
		<View style={{
			// top: 10,
			justifyContent: 'center',
			alignItems: 'center',
			padding: 10,

			marginHorizontal: 10,
			backgroundColor: colors.card,
		}}>
			<View style={[styles.teamABCont]}>
				<View style={[styles.teamA]}>
					<View style={[styles.teamName_Flag]}>
						<Text style={[styles.teamName, {
							color: colors.text,
						}]}>{item.team_1.team.short_name}</Text>
						<Image source={{uri: item.team_1.team.flag_url}} style={[styles.teamFlag]}/>
					</View>
					<View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
					<View style={[styles.teamScoreInfo, {
						flexDirection: 'row',
					}]}>
						{item.format === 'ODI' ? odi_overs(team1[0]) : <></>}
						{item.format === 'ODI' ? odi_score(team1[0]) : <></>}
					</View>
				</View>
				<Text style={[styles.vs, {
					color: Colors.textGray200,
				}]}>vs</Text>
				<View style={[styles.teamB]}>
					<View style={[styles.teamName_Flag]}>
						<Image source={{uri: item.team_2.team.flag_url}} style={[styles.teamFlag]}/>
						<Text style={[styles.teamName, {
							color: colors.text,
						}]}>{item.team_2.team.short_name}</Text>
					</View>
					<View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
					<View style={[styles.teamScoreInfo, {
						flexDirection: 'row-reverse',
					}]}>
						{item.format === 'ODI' && odi_overs(team2[0])}
						{item.format === 'ODI' && odi_score(team2[0])}
					</View>
				</View>
			</View>

		</View>
	)
		;
}
export default TeamVsTeam
const styles = StyleSheet.create({
	teamABCont: {
		maxHeight: 100,
		marginHorizontal: 10,
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	teamA: {
		width: '45%',
		flexDirection: 'column',
		alignItems: 'center',
		// backgroundColor: 'orange'
	},
	teamB: {
		width: '45%',
		flexDirection: 'column',
		alignItems: 'center',
		// backgroundColor: 'orange'
	},
	vs: {
		width: '10%',
		fontSize: 14,
		fontWeight: '500',
		// backgroundColor: 'white',
		textAlign: 'center'
	},
	teamInfo_Button: {
		marginVertical: 5,
	},
	teamName_Flag: {
		width: '100%',
		// backgroundColor: 'yellow',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	teamName: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	teamFlag: {
		width: 40,
		height: 40,
	},
	teamScoreInfo: {
		width: '97%',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'blue',

	},
});
