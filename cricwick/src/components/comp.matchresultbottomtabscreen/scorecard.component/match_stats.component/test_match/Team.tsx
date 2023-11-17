import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../../hooks";

const Team = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			// backgroundColor: 'red',

		}}>
			<View style={{
				justifyContent: 'space-between',
				marginHorizontal: 10,
				marginVertical: 5,
				padding: 10,
				backgroundColor: colors.card
			}}>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginVertical: 5
				}}>
					<Text style={{color: colors.text, fontSize: 15, fontWeight: 'bold'}}>{item.series.title}</Text>
					<Text style={{color: colors.text, fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
				</View>

				{
					<View style={{}}>
						{item && <Text style={{
							color: colors.text,
							fontWeight: '400'
						}}>{item.toss_won_by_id === item.team_1_id ? item.team_1.team.short_name : item.team_2.team.short_name} opted
                            to {item.chose_to === 'Bowl' ? 'field' : 'bat'}</Text>}
					</View>

				}
				{
					item.match_result && <View style={{
						marginVertical: 5
					}}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{item.match_result}</Text>
                    </View>
				}
			</View>
		</View>
	)
		;
}
export default Team
const styles = StyleSheet.create({})
