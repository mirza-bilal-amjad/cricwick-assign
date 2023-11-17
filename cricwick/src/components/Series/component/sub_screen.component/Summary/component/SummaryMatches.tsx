import {StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import ODI_T20 from "./comp.match_type/ODI_T20/ODI_T20";
import TEST from "./comp.match_type/TEST/TEST";
import {useTheme} from "../../../../../../hooks";

const SummaryMatches = ({match, navigation}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	switch (match.format) {
		case 'ODI'  :
			return <TouchableOpacity activeOpacity={.7}
			                         onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				                         screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
				                         matchId: match.id,
				                         matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
				                         matchNumber: match.title,
				                         matchState: match.match_state
			                         })} style={{
				borderBottomWidth: .2,
				borderBottomColor: Colors.textGray200
			}}>
				<ODI_T20 item={match}/>
			</TouchableOpacity>;
		case  'T20i':

			return <TouchableOpacity activeOpacity={.7}
			                         onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				                         screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
				                         matchId: match.id,
				                         matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
				                         matchNumber: match.title,
				                         matchState: match.match_state
			                         })} style={{
				borderBottomWidth: .2,
				borderBottomColor: Colors.textGray200
			}}>
				<ODI_T20 item={match}/>
			</TouchableOpacity>;
		case  'T20':

			return <TouchableOpacity activeOpacity={.7}
			                         onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				                         screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
				                         matchId: match.id,
				                         matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
				                         matchNumber: match.title,
				                         matchState: match.match_state
			                         })} style={{
				borderBottomWidth: .2,
				borderBottomColor: Colors.textGray200
			}}>
				<ODI_T20 item={match}/>
			</TouchableOpacity>;
		case 'Test':
			return <TouchableOpacity activeOpacity={.7}
			                         onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				                         screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
				                         matchId: match.id,
				                         matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
				                         matchNumber: match.title,
				                         matchState: match.match_state
			                         })} style={{
				borderBottomWidth: .2,
				borderBottomColor: Colors.textGray200
			}}>
				<TEST item={match}/>
			</TouchableOpacity>;
		default:
			return null;
	}
};
export default SummaryMatches
const styles = StyleSheet.create({})
