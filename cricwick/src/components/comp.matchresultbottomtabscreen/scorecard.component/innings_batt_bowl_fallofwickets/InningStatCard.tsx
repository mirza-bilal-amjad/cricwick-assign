import {Text, View} from 'react-native'
import React from 'react'
import {BattingComponent, BowlingComponent, FallOfWicketsComponent} from "./component";
import {useTheme} from "../../../../hooks";

const InningStatCard = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View>
			{item && item?.batting_scorecard && item?.batting_scorecard.length > 0 &&
                <View style={{backgroundColor: colors.card}}>
                    <View style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						backgroundColor: Colors.textGray200
					}}>
                        <View style={{width: '40%', padding: 10}}><Text
                            style={{color: colors.card, textAlign: 'left'}}>Batting</Text></View>
                        <View style={{flexDirection: 'row', paddingRight: 10}}>
                            <View style={{width: '15%'}}><Text
                                style={{color: colors.card, textAlign: 'right'}}>R</Text></View>
                            <View style={{width: '15%'}}><Text
                                style={{color: colors.card, textAlign: 'right'}}>B</Text></View>
                            <View style={{width: '15%'}}><Text
                                style={{color: colors.card, textAlign: 'right'}}>4s</Text></View>
                            <View style={{width: '15%'}}><Text
                                style={{color: colors.card, textAlign: 'right'}}>6s</Text></View>
                            <View style={{width: '17.5%'}}><Text
                                style={{color: colors.card, textAlign: 'right'}}>SR</Text></View>
                        </View>
                    </View>
                    <BattingComponent item={item?.batting_scorecard}/>
                </View>}

			{item && item?.bowling_scorecard && item?.bowling_scorecard.length > 0 && <View>
                <View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: Colors.textGray200
				}}>
                    <View style={{width: '30%', padding: 10}}><Text
                        style={{color: colors.card, textAlign: 'left'}}>Bowling</Text></View>
                    <View style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingRight: 10
					}}>
                        <View style={{width: '8.5%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>O</Text></View>
                        <View style={{width: '8.5%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>M</Text></View>
                        <View style={{width: '8.5%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>R</Text></View>
                        <View style={{width: '8.5%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>W</Text></View>
                        <View style={{width: '12%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>Econ</Text></View>
                        <View style={{width: '8%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>0s</Text></View>
                        <View style={{width: '8%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>4s</Text></View>
                        <View style={{width: '8%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>6s</Text></View>
                    </View>
                </View>
                <BowlingComponent item={item?.bowling_scorecard}/>
            </View>}
			{item && item?.falls_of_wickets && item?.falls_of_wickets.length > 0 && <View>
                <View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: Colors.textGray200
				}}>
                    <View style={{width: '30%', padding: 10}}><Text
                        style={{color: colors.card, textAlign: 'left'}}>Fall Of Wickets</Text></View>
                    <View style={{
						width: '60%',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						paddingRight: 10
					}}>
                        <View style={{width: '20%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>Overs</Text></View>

                        <View style={{width: '20%'}}><Text
                            style={{color: colors.card, textAlign: 'right'}}>Score</Text></View>
                    </View>
                </View>
                <FallOfWicketsComponent item={item?.falls_of_wickets}/>
            </View>}
		</View>
	)
};
export default InningStatCard
