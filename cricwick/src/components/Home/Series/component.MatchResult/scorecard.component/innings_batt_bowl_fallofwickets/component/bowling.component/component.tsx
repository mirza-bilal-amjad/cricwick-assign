import {View, Text} from 'react-native'
import React from 'react'

const Component = ({item}: any) => {
    return (
        <View>
            {item &&
                item.map(
                    (inItem: any, index: number) => (
                        <View key={index} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: index % 2 == 0 ? '#d7d7d7' : 'transparent'
                        }}>
                            <View style={{width: '30%', padding: 10}}><Text
                                style={{color: 'black', textAlign: 'left'}}>{inItem.player.short_name}</Text></View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingRight: 10
                            }}>
                                <View style={{width: '10%'}}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.overs_bowled}</Text>
                                </View>

                                <View style={{width: '7%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.overs_maiden}</Text></View>
                                <View style={{width: '8%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.runs_given}</Text></View>
                                <View style={{width: '8%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.wickets_taken}</Text></View>
                                <View style={{width: '12%'}}><Text
                                    style={{
                                        fontSize: 12, color: 'black', textAlign: 'right'
                                    }}>{inItem.bowler.econ}</Text></View>
                                <View style={{width: '8%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.dots_bowled}</Text></View>
                                <View style={{width: '8%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.boundry_6s_given}</Text></View>
                                <View style={{width: '8%'}}><Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.bowler.boundry_6s_given}</Text></View>
                            </View>
                        </View>
                    )
                )
            }
        </View>
    )
}
export default Component
