import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const TeamVsTeam = ({item}: any) => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 2.5

                    }}>
                        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{item.teamA.short_name}</Text>
                        <Image
                            style={{width: 40, aspectRatio: 15 / 10, marginVertical: 5}}
                            source={{uri: item.teamA.flag_url}}
                        />
                    </View>
                    <View style={{
                        borderBottomWidth: 0.2,
                    }}/>
                    <View style={{}}>{item.innings &&
                        item["innings"].map(
                            (insideItem: any, index: number) => (
                                insideItem.batting_team_id === item.team_1_id
                                &&
                                <View key={index} style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginVertical: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>{insideItem.overs.toFixed(1)}</Text>
                                        <Text style={{color: 'black', fontSize: 10}}>(ov)</Text>
                                    </View><View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '400'
                                    }}>{insideItem.runs}</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '400'
                                    }}>/{insideItem.wickets}</Text>
                                </View>
                                </View>
                            )
                        )

                    }
                    </View>
                </View>
                <View style={{
                    paddingHorizontal: 10,

                }}>
                    <Text style={{color: 'gray'}}>vs</Text>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 2.5

                    }}>
                        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{item.teamB.short_name}</Text>
                        <Image
                            style={{width: 40, aspectRatio: 15 / 10, marginVertical: 5}}
                            source={{uri: item.teamB.flag_url}}
                        />
                    </View>
                    <View style={{
                        borderBottomWidth: 0.2,
                    }}/>
                    <View style={{}}>{item.innings &&
                        item["innings"].map(
                            (insideItem: any, index: number) => (
                                insideItem.batting_team_id === item.team_2_id
                                &&
                                <View key={index} style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    marginVertical: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>{insideItem.overs.toFixed(1)}</Text>
                                        <Text style={{color: 'black', fontSize: 10}}>(ov)</Text>
                                    </View><View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '400'
                                    }}>{insideItem.runs}</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        fontWeight: '400'
                                    }}>/{insideItem.wickets}</Text>
                                </View>
                                </View>
                            )
                        )
                    }
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                top: 15
            }}>
                <Text style={{color: 'black', fontWeight: '500'}}>{item.match_result}</Text>
            </View>
        </View>
    )
        ;
}
export default TeamVsTeam
const styles = StyleSheet.create({})