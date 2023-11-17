import {Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../../hooks";

const BallCommentary = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			flexDirection: 'row',
			backgroundColor: colors.card,
			marginVertical: 1.5,
			padding: 10,
			alignItems: 'center'
		}}>
			<View style={{
				justifyContent: 'center', alignItems: 'center',
			}}>
				<View style={{
					width: 50, height: 50, borderWidth: 1, borderRadius: 40,
					justifyContent: 'center', alignItems: 'center',
					backgroundColor: item?.boundary_6 ? '#07a072' : item?.boundary_4 ? '#f5a623' : item?.wicket ? '#f23' : colors.background,
					borderColor: item?.boundary_6 ? '#07a072' : item?.boundary_4 ? '#f5a623' : item?.wicket ? '#f23' : colors.text
				}}>
					<Text style={{
						fontSize: 20,
						paddingHorizontal: 5,
						color: item?.boundary_6 ? '#fff' : item?.boundary_4 ? '#fff' : item?.wicket ? '#fff' : colors.text
					}}>{item?.wicket ? 'Out' : item?.wide_ball ? item?.runs_scored + 'wd' : item?.runs_scored}</Text>
				</View>
				<Text style={{
					fontSize: 12,
					color: colors.text
				}}>{item?.title}</Text>
			</View>
			<View style={{
				width: '100%',
				marginHorizontal: 10
			}}>
				<Text style={{
					fontSize: 12,
					color: colors.text,
				}}>{item?.commentary}</Text>
			</View>
		</View>
	)
}
export default BallCommentary
