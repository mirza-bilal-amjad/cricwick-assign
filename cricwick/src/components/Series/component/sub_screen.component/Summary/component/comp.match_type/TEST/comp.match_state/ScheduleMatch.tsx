import {Image, Text, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../../../../../../index";
import {useTheme} from "../../../../../../../../../hooks";

const ScheduleMatch = ({item}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			marginHorizontal: 10,
			marginVertical: 5
		}}>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 2.5

			}}>
				<View><Text style={{color: Colors.textGray200}}>UPCOMING</Text></View>
				<View><Text style={{color: Colors.textGray200}}> - </Text></View>
				<View>
					<DateComponent date={item.match_start} style={{color: Colors.textGray200}}/>
				</View>
			</View>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 2.5

			}}>
				<View style={{
					flexDirection: 'row',
					alignItems: 'center'
				}}>
					<Image source={{uri: item.teamA.flag_url}} style={{width: 30, aspectRatio: 16 / 9}}/>
					<Text style={{color: colors.text, marginLeft: 5}}>{item.teamA.short_name}</Text>
				</View>
				<View><Text style={{color: Colors.textGray200}}> vs </Text></View>
				<View style={{
					flexDirection: 'row'
				}}>
					<Image source={{uri: item.teamB.flag_url}} style={{width: 30, aspectRatio: 16 / 9}}/>
					<Text style={{color: colors.text, marginLeft: 5}}>{item.teamB.short_name}</Text>
				</View>
			</View>


		</View>
	)
}
export default ScheduleMatch
