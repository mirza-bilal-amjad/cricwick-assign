import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const LiveMatch = ({item}: any) => {
    return (
        <View style={{
            borderBottomWidth: .2,
            borderBottomColor: '#d7d7d7'
        }}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5
            }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>LIVE</Text>
            </View>

            <View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={{uri: item.teamA.flag_url}}
                                style={{
                                    width: 30,
                                    height: 30
                                }}/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{item.teamA.short_name}</Text>

                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            {item.innings !== null && item.innings.map((insideItem: any, index: number) => insideItem.batting_team_id === item.team_1_id &&
                                <View key={index} style={{
                                    flexDirection: 'row'
                                }}><Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>{insideItem.runs > 0 ? insideItem.runs : 0}{insideItem.wickets > 0 ? insideItem.wickets < 10 ? `/${insideItem.wickets}` : '' : '/0'}</Text>
                                    <Text style={{
                                        fontSize: 11,
                                        fontWeight: '500',
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                        bottom: 2
                                    }}> ({Number(insideItem.overs).toFixed(1)} ov) </Text>
                                </View>)}

                        </View>
                    </View>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={{uri: item.teamB.flag_url}}
                                style={{
                                    width: 30,
                                    height: 30
                                }}/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{item.teamB.short_name}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            {item.innings !== null && item.innings.map((insideItem: any, index: number) => insideItem.batting_team_id === item.team_2_id &&
                                <View key={index} style={{
                                    flexDirection: 'row'
                                }}><Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>{insideItem.runs > 0 ? insideItem.runs : 0}{insideItem.wickets > 0 ? insideItem.wickets < 10 ? `/${insideItem.wickets}` : '' : '/0'}</Text>
                                    <Text style={{
                                        fontSize: 11,
                                        fontWeight: '500',
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                        bottom: 2
                                    }}> ({Number(insideItem.overs).toFixed(1)} ov) </Text>
                                </View>)}

                        </View>
                    </View>
                </View>
                <View style={{
                    marginHorizontal: 10,
                    marginVertical: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>{item.match_result}</Text>
                </View>
            </View>
        </View>
    )
}
export default LiveMatch
const styles = StyleSheet.create({})
