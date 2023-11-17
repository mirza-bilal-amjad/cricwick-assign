import {FlatList, Image, Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../hooks";

const Team = ({route}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;

	const {team} = route.params;
	const TeamCard = ({item}: any) => {
		let date = item?.player?.birth_date;
		date = date.replace(/\//g, '-');
		// try different menthol to find age from date of birth
		let age = Math.floor((new Date().getTime() - new Date(date).getTime()) / 3.15576e+10);

		const playerName = item?.player?.name;
		const playerAge = age;
		const playerPlayingRole = item?.player?.playing_role;
		const playerBattingHand = item?.player?.batting_hand;
		const playerBowlingHand = item?.player?.bowling_hand;
		const playerImage = item?.player?.full_display_picture_url === null ? item?.player?.display_picture_url : item?.player?.full_display_picture_url;
		return (
			<View style={{
				flex: 1,
				flexDirection: 'row',
				paddingVertical: 10,
				paddingHorizontal: 10,
				backgroundColor: colors.card
			}}>
				<View>
					<Image
						source={{uri: playerImage}}
						style={{width: 120, aspectRatio: 1, resizeMode: 'contain'}}/>
				</View>
				<View style={{
					marginLeft: 10,
					justifyContent: 'center'
				}}>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>{playerName}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Age:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {playerAge}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Playing
						role:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {playerPlayingRole}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Batting:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {playerBattingHand}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Bowling:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {playerBowlingHand}</Text></View>
				</View>
			</View>
		);
	}
	return (
		<FlatList
			data={team}
			style={{
				backgroundColor: colors.background
			}}
			contentContainerStyle={{
				marginTop: 5,
			}} ItemSeparatorComponent={
			() => <View style={{height: 5,}}/>
		} renderItem={TeamCard}/>
	)
};
export default Team
