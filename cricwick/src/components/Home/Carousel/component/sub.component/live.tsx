import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import {DateComponent} from "../../../../index";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import firebase from "firebase/compat";
import {useTheme} from "../../../../../hooks";

const Live = ({match, inning}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const team1 = inning.filter((item: any) => item.batting_team_id === match[`team_${1}_id`]);
	if (team1.length < 2 && match.format === 'Test') {
		for (let i = 0; i < 3 - team1.length; i++) {
			team1.push({
				batting_team_id: match[`team_${1}_id`],
				fielding_team_id: match[`team_${2}_id`],
				id: null,
				overs: null,
				run_rate: null,
				total_overs: 50,
				runs: null,
				wickets: null,
				required_rate: null

			});

		}
	} else if (team1.length < 1 && match.format === 'ODI') {
		for (let i = 0; i < 1 - team1.length; i++) {
			team1.push({
				batting_team_id: match[`team_${1}_id`],
				fielding_team_id: match[`team_${2}_id`],
				id: null,
				overs: null,
				run_rate: null,
				runs: null,
				summary: {
					batsman_1: {
						balls_played: null,
						name: null,
						runs_scored: null,
						string_state: null
					},
					batsman_2: {
						balls_played: null,
						name: null,
						runs_scored: null,
						string_state: null
					},
					bowler: {
						name: null,
						overs_bowled: null,
						overs_maiden: null,
						runs_given: null,
						wickets_taken: null
					}
				},
				total_overs: null,
				wickets: null
			});

		}
	}
	const team2 = inning.filter((item: any) => item.batting_team_id === match[`team_${2}_id`]);
	if (team2.length < 2 && match.format === 'Test') {
		for (let i = 0; i < 3 - team2.length; i++) {
			team2.push({
				batting_team_id: match[`team_${2}_id`],
				fielding_team_id: match[`team_${1}_id`],
				id: null,
				overs: null,
				run_rate: null,
				runs: null,
				wickets: null,
			});
		}
	} else if (team2.length < 1 && match.format === 'ODI') {
		for (let i = 0; i < 1 - team2.length; i++) {
			team2.push({
				batting_team_id: match[`team_${2}_id`],
				fielding_team_id: match[`team_${1}_id`],
				id: null,
				overs: null,
				run_rate: null,
				runs: null,
				summary: {
					batsman_1: {
						balls_played: null,
						name: null,
						runs_scored: null,
						string_state: null
					},
					batsman_2: {
						balls_played: null,
						name: null,
						runs_scored: null,
						string_state: null
					},
					bowler: {
						name: null,
						overs_bowled: null,
						overs_maiden: null,
						runs_given: null,
						wickets_taken: null
					}
				},
				total_overs: null,
				wickets: null
			});

		}
	}
	const test_score_over = (item: any) => {
		return (
			<View style={{
				// backgroundColor: 'lightblue',
			}}>
				<View style={{
					flexShrink: 1,
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					{item.wickets !== null && item.runs !== null ? <Text style={{
							color: colors.text,
							fontWeight: '500',
							fontSize: 15
						}}>{item.runs > 0 ? item.runs : 0}/{item.wickets > 0 ? item.wickets : 0}</Text> :
						<Text style={{
							color: colors.text,
							textAlign: 'center',
							fontSize: 15
						}}>-</Text>
					}
					{item.overs !== null ? <View style={{
							flexDirection: 'row',
							alignItems: 'flex-end',
						}}>
							<Text style={{
								color: colors.text,
								fontSize: 11,
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
								fontSize: 11,
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
			<View style={{
				// backgroundColor: 'lightblue',
			}}>
				<View style={{
					flexShrink: 1,
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
				}}>
					{item.wickets !== null && item.runs !== null ? <Text style={{
							color: colors.text,
							fontWeight: '500',
							fontSize: 15,

						}}>{item.runs > 0 ? item.runs : 0}/{item.wickets > 0 ? item.wickets : 0}</Text> :
						<Text style={{
							color: colors.text,
							fontWeight: '500',
							fontSize: 15,
							textAlign: 'center',
						}}>-</Text>
					}
				</View>
				<View></View>
			</View>
		);
	}

	return (
		<View style={{
			flex: 1,
			top: 10,
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'green',
		}}>
			<View style={[styles.teamABCont]}>
				<View style={[styles.teamA]}>
					<View style={[styles.teamName_Flag]}>
						<Text style={[styles.teamName]}>{match['teamA'].short_name}</Text>
						<Image source={{uri: match['teamA'].flag_url}} style={[styles.teamFlag]}/>
					</View>
					<View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
					<View style={[styles.teamScoreInfo, {}]}>
						{match.format === 'Test' ? test_score_over(team1[0]) : match.format === 'ODI' || match.format === 'T20' ? odi_overs(team1[0]) : <></>}
						{match.format === 'Test' && team1[0].runs && team1[1].runs ? <Text>&</Text> : <></>}
						{match.format === 'Test' ? test_score_over(team1[1]) : match.format === 'ODI' || match.format === 'T20' ? odi_score(team1[0]) : <></>}
					</View>
				</View>
				<Text style={[styles.vs]}>vs</Text>
				<View style={[styles.teamB]}>
					<View style={[styles.teamName_Flag]}>
						<Image source={{uri: match['teamB'].flag_url}} style={[styles.teamFlag]}/>
						<Text style={[styles.teamName]}>{match['teamB'].short_name}</Text>
					</View>
					<View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
					<View style={[styles.teamScoreInfo]}>
						{match.format === 'Test' ? test_score_over(team2[0]) : match.format === 'ODI' || match.format === 'T20' ? odi_overs(team2[0]) : <></>}
						{match.format === 'Test' && team2[0].runs && team2[1].runs ?
							<Text>&</Text> : <></>}
						{match.format === 'Test' ? test_score_over(team2[1]) : match.format === 'ODI' || match.format === 'T20' ? odi_score(team2[0]) : <></>}
					</View>
				</View>
			</View>
			<View style={[styles.teamInfo_Button]}>
				<View style={{
					flexDirection: 'row'
				}}>
					<Text style={{color: colors.text, fontSize: 11, fontWeight: 'bold'}}>{match.title}</Text>
					<Text style={{color: colors.text, fontSize: 11, fontWeight: 'bold'}}> - </Text>
					<Text style={{
						color: colors.text,
						fontSize: 11,
					}}>{match['venue'].title} </Text>
					<DateComponent style={{
						color: colors.text,
						fontSize: 11,
						fontWeight: 'bold',
					}} date={match.match_start}/>
				</View>
				<View style={{
					justifyContent: 'center',
					alignItems: 'center',

				}}><TouchableOpacity disabled={
					!match.is_alternate_stream_url
				} style={{
					borderColor: match.is_alternate_stream_url ? '#ff5f5f' : '#878787',
					marginVertical: 5,
					borderRadius: 25,
					borderWidth: 1, width: 100,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<Text style={{
						color: match.is_alternate_stream_url ? '#ff5f5f' : '#878787',
						fontSize: 13,
						fontWeight: 'bold',
						paddingVertical: 5,

						paddingHorizontal: 5,

					}}>Watch Live</Text>
					<GoogleIcon name={'arrow-forward-ios'} size={13}
					            color={match.is_alternate_stream_url ? '#ff5f5f' : '#878787'}/>
				</TouchableOpacity></View>
			</View>
		</View>
	);
};
export default Live
const styles = StyleSheet.create({
	teamABCont: {
		flex: 1,
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
		color: '#555',
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
		color: 'black',
	},
	teamFlag: {
		width: 40,
		height: 40,
	},
	teamScoreInfo: {
		width: '97%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'blue',

	},
});
