import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../../../index";
import {useTheme} from "../../../../../../hooks";

const Scheduled = ({match, inning}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		<View style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'green',
		}}>
			<View style={[styles.teamABCont]}>
				<View style={[styles.teamA]}>
					<View style={[styles.teamName_Flag]}>
						<Text style={[styles.teamName, {color: colors.text}]}>{match['teamA'].short_name}</Text>
						<Image source={{uri: match['teamA'].flag_url}} style={[styles.teamFlag]}/>
					</View>
					<View style={[styles.teamScoreInfo, {}]}>
					</View>
				</View>
				<Text style={[styles.vs]}>vs</Text>
				<View style={[styles.teamB]}>
					<View style={[styles.teamName_Flag]}>
						<Text style={[styles.teamName]}>{match['teamB'].short_name}</Text>
						<Image source={{uri: match['teamB'].flag_url}} style={[styles.teamFlag]}/>
					</View>
					<View style={[styles.teamScoreInfo]}>
					</View>
				</View>

			</View>
			{match['series'] &&
                <Text style={{color: colors.text, fontSize: 12,}}>{match['series'].title}</Text>
			}
			<View style={[styles.teamInfo_Button]}>
				<View style={{
					flexDirection: 'row',
					// backgroundColor: 'violet',
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

			</View>
		</View>
	);
};
export default Scheduled
const styles = StyleSheet.create({
	teamABCont: {
		flex: 1,
		// maxWidth: '100%',
		maxHeight: 110,
		marginHorizontal: 10,
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: 'white',
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
		flexDirection: 'column-reverse',
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	teamName: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	teamFlag: {
		width: 60,
		height: 60,
	},
	teamScoreInfo: {
		width: '97%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'blue',

	},
});
