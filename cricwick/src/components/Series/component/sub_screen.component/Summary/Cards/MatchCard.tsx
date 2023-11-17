import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo} from 'react'
import SummaryMatches from "../component/SummaryMatches";
import SummaryVideos from "../component/SummaryVideos";
import SummaryNews from "../component/SummaryNews";
import SummaryArticle from "../component/SummaryArticle";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
// @ts-ignore
import MatchHomeIcon from '../../../../../../assets/Images/match_home.png'
// @ts-ignore
import VideoIcon from '../../../../../../assets/Images/video_icon.png'
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../../../../../hooks";

const MatchCard = ({match}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation();
	return (
		<View style={{
			marginHorizontal: 10,
			backgroundColor: colors.card
		}}>
			<View style={{
				borderBottomWidth: .2,
				borderBottomColor: Colors.textGray200
			}}>
				<View style={{
					padding: 10,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
					<Text style={{fontSize: 14, fontWeight: 'bold', color: colors.text}}>{match.title}</Text>
					<GoogleIcon name={'arrow-forward-ios'} size={15} color={colors.text}/>
				</View>

			</View>

			{/*RESULTS*/}
			{match.data && match.data.length > 0 &&
				match.data.map((item: any, index: number) => {

					switch (item.type) {
						case 'match_object':
							return item.data !== null &&
                                <SummaryMatches match={item.data} key={index} navigation={navigation}/>;
						case 'videos':
							return item.data !== null && item.data.length > 0 &&
                                <SummaryVideos match={item.data} key={index} navigation={navigation}/>;
						case 'news':
							return item.data !== null && item.data.length > 0 &&
                                <SummaryNews match={item.data} key={index} navigation={navigation}/>;
						case 'articles':
							return item.data !== null && item.data.length > 0 &&
                                <SummaryArticle match={item.data} key={index} navigation={navigation}/>;
						default:
							return null;
					}
				})
			}
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center'
			}}>
				<TouchableOpacity
					activeOpacity={.5} style={{
					borderColor: Colors.textGray200,
					flexDirection: 'row',
					alignItems: 'center',
					width: '50%',
					justifyContent: 'center'

				}}
					/*onPress={
						() =>
							console.log(match.title)
					}*/
					//@ts-ignore
					onPress={() => navigation.navigate('MatchResultBottomNavigation', {
						screen: match.data[0].data.match_state === 'Over' ? 'Report' : 'MRSummary',
						matchId: match.data[0].data.id,
						matchTitle: `${match.data[0].data.teamA.short_name} vs ${match.data[0].data.teamB.short_name}`,
						matchNumber: match.data[0].data.title,
						matchState: match.data[0].data.match_state,
						team_1_id: match.data[0].data.team_1_id,
						team_2_id: match.data[0].data.team_2_id,
						nameTeamA: match.data[0].data.teamA.name,
						nameTeamB: match.data[0].data.teamB.name,
						shortNameTeamA: match.data[0].data.teamA.short_name,
						shortNameTeamB: match.data[0].data.teamB.short_name,
					})}
				>
					<Image source={MatchHomeIcon} style={{
						width: 18, resizeMode: 'contain', tintColor: Colors.textGray200,
						left: 10

					}}/>
					<Text style={{fontSize: 15, padding: 15, fontWeight: '700', color: Colors.textGray200}}>Match
						Home</Text>
				</TouchableOpacity>

				{match.series_obj && match.series_obj.is_videos_enabled && <TouchableOpacity activeOpacity={.5} style={{
					alignItems: 'center',
					width: '50%',
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
                    <Image source={VideoIcon} style={{
						width: 18, resizeMode: 'contain', tintColor: Colors.textGray200,
						left: 10

					}}/>
                    <Text style={{fontSize: 15, padding: 15, fontWeight: '700', color: Colors.textGray200}}>Video</Text>
                </TouchableOpacity>}
			</View>
		</View>
	);
}
export default memo(MatchCard)
const styles = StyleSheet.create({})
