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
                            <View style={{width: '40%', paddingHorizontal: 10, paddingVertical: 5}}>
                                <Text style={{
                                    fontWeight: '500',
                                    color: 'black',
                                    textAlign: 'left'
                                }}>{inItem.player.short_name}</Text>
                                <Text style={{
                                    color: 'black',
                                    textAlign: 'left',
                                    fontSize: 12,
                                    fontWeight: '400'
                                }}>{inItem.batsman.out_details}</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingRight: 10}}>
                                <View style={{width: '15%'}}><Text
                                    style={{
                                        color: 'black',
                                        textAlign: 'right'
                                    }}>{inItem.batsman.runs_scored}</Text></View>
                                <View style={{width: '15%'}}><Text
                                    style={{
                                        color: 'black',
                                        textAlign: 'right',
                                        fontSize: 12, fontWeight: '400'
                                    }}>{inItem.batsman.balls_played}</Text></View>
                                <View style={{width: '15%'}}><Text
                                    style={{
                                        color: 'black',
                                        textAlign: 'right',
                                        fontSize: 12, fontWeight: '400'
                                    }}>{inItem.batsman.boundry_4s_scored}</Text></View>
                                <View style={{width: '15%'}}><Text
                                    style={{
                                        color: 'black',
                                        textAlign: 'right',
                                        fontSize: 12, fontWeight: '400'
                                    }}>{inItem.batsman.boundry_6s_scored}</Text></View>
                                <View style={{width: '17.5%'}}><Text
                                    style={{
                                        color: 'black',
                                        textAlign: 'right',
                                        fontSize: 12, fontWeight: '400'
                                    }}>{inItem.batsman.strike_rate}</Text></View>
                            </View>
                        </View>
                    )
                )
            }
        </View>
    )
}
export default Component
