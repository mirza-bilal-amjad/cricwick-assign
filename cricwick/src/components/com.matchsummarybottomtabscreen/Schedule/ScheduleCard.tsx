import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../index";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../../hooks";

const ScheduleCard = ({match}: any) => {

	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			style={{
				padding: 10,
				backgroundColor: colors.card
			}}
			activeOpacity={0.8}
			// @ts-ignore
			onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				screen: match?.match_state === 'Over' ? 'Report' : 'MRSummary',
				matchId: match?.id,
				matchTitle: `${match?.teamA.short_name} vs ${match?.teamB.short_name}`,
				matchNumber: match?.title,
				matchState: match?.match_state,
				team_1_id: match?.team_1_id,
				team_2_id: match?.team_2_id,
				nameTeamA: match?.teamA.name,
				nameTeamB: match?.teamB.name,
				shortNameTeamA: match?.teamA.short_name,
				shortNameTeamB: match?.teamB.short_name,
			})}
		>
			<View>
				<View style={{
					flexDirection: 'row',
					marginHorizontal: 10,
					justifyContent: 'space-between'
				}}>
					<Text style={{
						color: (match?.live_match_state === null || match.live_match_state === "Post Match") ? 'black' : 'red',
						fontSize: (match?.live_match_state === null || match.live_match_state === "Post Match") ? 14 : 16,
						marginVertical: 1,
						fontWeight: 'bold'
					}}>{(match.live_match_state === null || match.live_match_state === "Post Match") ? 'RESULT' : 'Live Now'}</Text>
					<DateComponent date={match.match_start} style={{color: colors.text, marginVertical: 1}}
					               includeYear={true}/>
				</View>
			</View>
			<View>
				<View style={{
					flexDirection: 'row',
					marginHorizontal: 10,
					marginVertical: 3,
					alignItems: 'center'

				}}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center'
					}}>
						<Image
							source={{uri: match.teamA.flag_url}}
							style={{
								width: 35,
								height: 35,
								marginRight: 10
							}}/>
						<Text style={{color: colors.text, marginVertical: 1}}>{match.teamA.short_name}</Text>
					</View>
					<Text style={{color: Colors.textGray200, marginVertical: 1}}> vs </Text>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center'

					}}>
						<Image
							source={{uri: match.teamB.flag_url}}
							style={{

								width: 35,
								height: 35,
								marginRight: 10
							}}/>
						<Text style={{color: colors.text, marginVertical: 1}}>{match.teamB.short_name}</Text>
					</View>
				</View>
			</View>
			<View>
				<View style={{
					marginHorizontal: 10
				}}>
					<Text style={{
						color: Colors.textGray200,
						marginVertical: 1
					}}>{match.match_result ? match.match_result : match.title + ' at ' + match.venue.stadium_name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
		;
}
export default ScheduleCard
const styles = StyleSheet.create({})
