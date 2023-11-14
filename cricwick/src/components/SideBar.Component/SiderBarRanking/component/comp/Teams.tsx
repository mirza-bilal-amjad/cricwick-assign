import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import FastImage from "react-native-fast-image";
import {useTheme} from "../../../../../hooks";

const Teams = ({item, index}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			width: '100%',
			flexDirection: 'row',
			padding: 3,
			backgroundColor: index % 2 === 0 ? darkMode ? colors.card : '#e8e8e8' : darkMode ? colors.background : 'white',
		}}>
			<View style={{
				width: '10%', paddingVertical: 4, paddingHorizontal: 2,
			}}><Text
				style={{
					color: colors.text,
					paddingHorizontal: 3,
					fontSize: 10,
					textAlign: 'right',
					right: 4
				}}>{index + 1}</Text></View>
			<View style={{
				width: '45%', paddingVertical: 4, paddingHorizontal: 2, flexDirection: 'row', alignItems: 'center'
			}}>
				<FastImage source={{uri: item.team_flag}} style={{width: 25, aspectRatio: 16 / 11, height: 20}}/>
				<Text style={{color: colors.text, fontSize: 12, left: 5}}>{item.team_name}</Text></View>
			<View style={{
				width: '15%', paddingVertical: 4, paddingHorizontal: 2,
			}}><Text style={{color: colors.text, fontSize: 12, textAlign: 'center'}}>{item.match_count}</Text></View>
			<View style={{
				width: '15%', paddingVertical: 4, paddingHorizontal: 2,
			}}><Text style={{color: colors.text, fontSize: 12, textAlign: 'center'}}>{item.points}</Text></View>
			<View style={{
				width: '15%', paddingVertical: 4, paddingHorizontal: 2,
			}}><Text style={{color: colors.text, fontSize: 12, textAlign: 'center'}}>{item.rating}</Text></View>
		</View>
	)
}
export default Teams
