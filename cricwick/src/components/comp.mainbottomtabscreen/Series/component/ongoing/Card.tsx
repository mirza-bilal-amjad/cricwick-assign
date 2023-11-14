import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import moment from "moment";
import {useTheme} from "../../../../../hooks";

const Card = ({item, screenType, navigation}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
				title: item.title,
				matchId: item.id,
				is_videos_enabled: item.is_videos_enabled,
				has_points_table: item.has_points_table,
			})}
			style={{
				padding: 10,
				height: 70,
				justifyContent: 'center',
				marginHorizontal: 5,
				backgroundColor: colors.card,
			}}>
			<Text style={{
				color: colors.text,
				fontSize: 18,
				fontWeight: '500'
			}}>{item.title}</Text>


			<View style={{
				flexDirection: 'row'
			}}>
				<Text style={{
					color: Colors.textGray200,
					fontWeight: 'bold',
					fontSize: 12
				}}>{moment(item.start_date, "YYYY/MM/DD").format("DD MMMM")}</Text>
				<Text style={{color: Colors.textGray200, fontWeight: 'bold', fontSize: 12}}> - </Text>
				<Text style={{
					color: Colors.textGray200,
					fontWeight: 'bold',
					fontSize: 12
				}}>{moment(item.end_date, "YYYY/MM/DD").format("D MMMM YYYY")}</Text>
			</View>

		</TouchableOpacity>
	)
}
export default Card
const styles = StyleSheet.create({})
