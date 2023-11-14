import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../index";
import {
    EventConsumer, EventMapCore,
    NavigationAction,
    NavigationHelpers, NavigationProp,
    ParamListBase,
    PartialState, PrivateValueStore,
    useNavigation
} from "@react-navigation/native";
import {useTheme} from "../../../../hooks";

const Matches = ({match}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
    const navigation = useNavigation()


	const overMatchCont = (match: any, navigation: any) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
				matchId: match.id,
				matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
				matchNumber: match.title,
				matchState: match.match_state
			})} activeOpacity={.7} style={{
				paddingVertical: 10,
				marginHorizontal: 10,
			}}>
				<View style={{
					flexDirection: 'column',
				}}>
					<Text style={{
						fontSize: 14,
						color: Colors.textGray200,
						fontWeight: '400',
					}}>{
						'RESULT  ' + `${match.card_title}`
					}</Text>
					{/*----------------------------------------/*----------------------------------------/*----------------------------------------*/}
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginVertical: 7,

						}}>
							<Image source={{uri: match['teamA'].flag_url}}
							       style={{
								       width: 30,
								       height: 30,
							       }}/>
							<Text style={{
								marginLeft: 10,
								color: colors.text,
								fontSize: 15
							}}>{match['teamA'].short_name}</Text>
						</View>
						<View style={{
							flexDirection: 'row',
						}}>
							{
								match.innings && match.innings.map(
									(inning: any, index: number) => {
										return (inning.batting_team_id === match.team_1_id &&
                                            <View key={index} style={{
												flexDirection: 'row',
												alignItems: 'flex-end',
											}}><Text style={{
												color: colors.text,
											}}>
												{
													inning.runs > 0 ? inning.runs : 0
												}
                                                /
												{
													inning.wickets > 0 ? inning.wickets : 0
												}{' '}
                                            </Text>
                                                <Text style={{
													color: Colors.textGray200,
													fontSize: 10,

												}}>
                                                    (
													{inning.overs > 0 ? Number(inning.overs).toFixed(1) : 0}
													{` ov) `}
                                                </Text>
                                            </View>
										)
									}
								)
							}
						</View>
					</View>
					{/*----------------------------------------/*----------------------------------------/*----------------------------------------*/}
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginVertical: 7,

						}}>
							<Image source={{uri: match['teamB'].flag_url}}
							       style={{
								       width: 30,
								       height: 30,
							       }}/>
							<Text style={{
								marginLeft: 10,
								color: 'black',
								fontSize: 15
							}}>{match['teamB'].short_name}</Text>
						</View>
						<View style={{
							flexDirection: 'row',
						}}>
							{
								match.innings && match.innings.map(
									(inning: any, index: number) => {
										return (inning.batting_team_id === match.team_2_id &&
                                            <View key={index} style={{
												flexDirection: 'row',
												alignItems: 'flex-end',
											}}>< Text style={{
												color: colors.text,
											}}>
												{
													inning.runs > 0 ? inning.runs : 0
												}
                                                /
												{
													inning.wickets > 0 ? inning.wickets : 0
												}{' '}
                                            </Text>
                                                <Text style={{
													color: Colors.textGray200,
													fontSize: 10,

												}}>
                                                    (
													{inning.overs > 0 ? Number(inning.overs).toFixed(1) : 0}
													{` ov) `}
                                                </Text>
                                            </View>
										)
									}
								)
							}
						</View>
					</View>
				</View>
				{match.detail && match.detail.length > 0 && <View style={{
					alignItems: 'center',
				}
				}>
                    <Text style={{
						fontSize: 12,
						color: colors.text,
						textAlign: 'center',
						fontWeight: '500',
					}}>
						{match.detail}
                    </Text>
                    <Text style={{
						fontSize: 12,
						color: 'red',
						textAlign: 'center',
						fontWeight: '500',
						marginVertical: 5,

					}}>
                        View Match Report
                    </Text>
                </View>}
			</TouchableOpacity>
		)
			;
	};
	const upcomingMatchCont = (item: any, navigation: any) => {

		return (
			<TouchableOpacity onPress={() => navigation.navigate('MatchResultBottomNavigation', {
				matchId: item.id,
				matchTitle: `${item.teamA.short_name} vs ${item.teamB.short_name}`,
				matchNumber: item.title,
				matchState: item.match_state,

			})} activeOpacity={.7} style={{
				paddingVertical: 10,
				marginHorizontal: 10,

			}}>
				<View style={{
					flexDirection: 'row',
					paddingHorizontal: 5,
				}}>
					<Text style={{
						fontSize: 14,
						color: Colors.textGray200,
						fontWeight: '400',
					}}>{
						'UPCOMING  ' + `${item.card_title}, `
					}</Text>
					{item.match_state === 'Scheduled' ?
						<DateComponent style={{
							fontSize: 15,
							color: Colors.textGray200,
						}} date={item.match_start}/> : <></>}
				</View>


				<View style={{
					width: 200,
					flexDirection: 'row',
					minHeight: 50,
					alignItems: 'center',
					justifyContent: 'space-around',

				}}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
						<Image source={{uri: item['teamA'].flag_url}}
						       style={{
							       width: 30,
							       height: 30,
						       }}/>

						<Text style={{
							marginLeft: 10,
							color: colors.text,
							fontSize: 15
						}}>{item['teamA'].short_name}</Text>
					</View>
					<Text style={{
						color: Colors.textGray200,
						fontSize: 19
					}}> vs </Text>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-around'

					}}>
						<Image source={{uri: item['teamB'].flag_url}}
						       style={{
							       width: 30,
							       height: 30,
						       }}/>
						<Text style={{
							marginLeft: 10,
							color: colors.text,
							fontSize: 15
						}}>{item['teamB'].short_name}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}


    return (
        match.match_state === 'Scheduled' ?
            upcomingMatchCont(match, navigation) :
            overMatchCont(match, navigation)
    )
}
export default Matches
