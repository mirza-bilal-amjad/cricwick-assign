import {Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../../../hooks";

const Component = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View>
			{item &&
				item.map(
					(inItem: any, index: number) => (
						<View key={index} style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: index % 2 == 0 ? colors.card : 'transparent'
						}}>
							<View style={{width: '40%', padding: 10}}><Text
								style={{
									color: colors.text,
									textAlign: 'left'
								}}>{inItem.out_batsman.player.short_name} ({inItem.out_batsman.batsman.runs_scored})</Text></View>
							<View style={{
								width: '60%',
								flexDirection: 'row',
								justifyContent: 'space-around',
								alignItems: 'center',
								paddingRight: 10
							}}>
								<View style={{width: '20%'}}><Text
									style={{
										color: colors.text,
										textAlign: 'right',
										fontSize: 13
									}}>{inItem.ball}</Text></View>

								<View style={{width: '30%'}}><Text
									style={{
										color: colors.text,
										textAlign: 'right', fontSize: 13
									}}>{inItem.wicket_order}/{inItem.team_score}</Text></View>
							</View>
						</View>
					)
				)
			}
		</View>
	);
}
export default Component
