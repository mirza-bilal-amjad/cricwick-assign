import {Text, View} from 'react-native'
import React from 'react'
import {convertOversToBalls} from "../../../../../utils/method";
import {useTheme} from "../../../../../hooks";

const Batsman = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			flex: 1,
			backgroundColor: colors.card,
			marginTop: 7.5,
			marginBottom: 2.5,
			marginHorizontal: 10,
			paddingVertical: 10,
			paddingHorizontal: 15,

		}}>
			<View style={{
				width: '100%',
				justifyContent: 'center',
			}}>
				<View style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
					<View>
						<Text style={{color: colors.text, fontWeight: 'bold', fontSize: 16}}>Batsmen</Text>
					</View>
					<View style={{
						flexDirection: 'row',
					}}>
						<Text style={{color: colors.text, fontSize: 12}}>Partnership of </Text>
						<Text style={{
							color: colors.text,
							fontSize: 12,
							fontWeight: '500'
						}}>{' ' + item.score_covered + ' '}</Text>
						<Text style={{color: colors.text, fontSize: 12}}>runs from</Text>
						<Text style={{
							color: colors.text,
							fontSize: 12,
							fontWeight: '500'
						}}>{' ' + convertOversToBalls(item.overs_played) + ' '}</Text>
						<Text style={{color: colors.text, fontSize: 12}}>balls</Text>
					</View>
				</View>
				{item && item['batsman_1'] && < View style={{
					flexDirection: 'row',
					// backgroundColor: 'pink',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingVertical: 5
				}}>
					{item['batsman_1']['player'].name && <View style={{
						width: '40%',
						flexDirection: 'row',
						alignItems: 'center',
					}}><Text style={{color: colors.text}}>{item['batsman_1']['player'].short_name}</Text>
						{item['batsman_1'].batsman.string_state && item['batsman_1'].batsman.string_state !== null &&
							item['batsman_1'].batsman.string_state === "facing" &&
                            < Text style={{color: 'red'}}> *</Text>}
                    </View>}

					{item['batsman_1']['batsman'] && <View style={{flexDirection: 'row', width: '77.7%'}}>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'red',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>{
							item['batsman_1']['batsman'].runs_scored
						}</Text><Text style={{fontSize: 12, color: Colors.textGray200}}> Runs</Text></View>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'blue',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>
							{item['batsman_1']['batsman'].balls_played}
                        </Text><Text style={{fontSize: 12, color: Colors.textGray200}}> Balls</Text></View>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'green',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>{
							item['batsman_1']['batsman'].strike_rate
						}</Text><Text style={{fontSize: 12, color: Colors.textGray200}}> SR</Text></View>
                    </View>}
                </View>}
				{item && item['batsman_2'] && < View style={{
					flexDirection: 'row',
					// backgroundColor: 'pink',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingVertical: 5
				}}>
					{item['batsman_2']['player'].name && <View style={{
						width: '40%',
						flexDirection: 'row',
						alignItems: 'center',
					}}><Text style={{color: colors.text}}>{item['batsman_2']['player'].short_name}</Text>
						{item['batsman_2'].batsman.string_state && item['batsman_2'].batsman.string_state !== null &&
							item['batsman_2'].batsman.string_state === "facing" &&
                            < Text style={{color: 'red'}}> *</Text>}
                    </View>}

					{item['batsman_2']['batsman'] && <View style={{flexDirection: 'row', width: '77.7%'}}>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'red',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>{
							item['batsman_2']['batsman'].runs_scored
						}</Text><Text style={{fontSize: 12, color: Colors.textGray200}}> Runs</Text></View>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'blue',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>
							{item['batsman_2']['batsman'].balls_played}
                        </Text><Text style={{fontSize: 12, color: Colors.textGray200}}> Balls</Text></View>
                        <View style={{
							flexDirection: 'row',
							width: '25.9%',
							// backgroundColor: 'green',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}><Text style={{color: colors.text}}>{
							item['batsman_2']['batsman'].strike_rate
						}</Text><Text style={{fontSize: 12, color: Colors.textGray200}}> SR</Text></View>
                    </View>}
                </View>
				}


			</View>
		</View>
	)
		;
}
export default Batsman
