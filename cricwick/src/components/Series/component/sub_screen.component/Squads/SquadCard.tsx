import {Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../../../../hooks";

const SquadCard = ({match}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			activeOpacity={.7}
			//@ts-ignore
			onPress={() => navigation.navigate('SquadDetails', {
				teamID: match?.id,
				seriesID: match?.series_id,
				teamName: match?.team?.name,
			})}
			style={{
				backgroundColor: colors.card,
				marginHorizontal: 10,
				padding: 10,
				flexDirection: 'row',
				minHeight: 70,
				alignItems: 'center',
			}}>
			<View>
				<Image
					source={{uri: match?.team?.full_flag_url}}
					style={{width: 55, aspectRatio: 1}}/>
			</View>
			<View style={{
				marginHorizontal: 15
			}}>
				<Text style={{color: colors.text, fontSize: 18}}>{match?.team?.name}</Text>
			</View>
		</TouchableOpacity>
	)
}
export default SquadCard
