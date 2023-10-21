import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Coins} from "../../../../../../../assets";

const ManOfTheMatch = ({item}: any) => {
    return (
        <View>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 2.5,
                backgroundColor: 'white'
            }}>
                <View style={{
                    backgroundColor: '#90c6ed'
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        textAlign: 'center',
                        paddingVertical: 1
                    }}>Man of the Match</Text>
                </View>
                <View style={{
                    marginHorizontal: 50 / 1.5,
                    marginVertical: 25 / 1.5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '55%'
                    }}>
                        <View style={{
                            borderRadius: 60,
                            borderWidth: 1,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/*    Image    */}
                            <Image source={{uri: item.stats.player.display_picture_url}} style={{
                                width: 70,
                                height: 70
                            }}/>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 18, fontWeight: 'bold',
                                color: 'black'
                            }}>{item.stats.player.short_name}</Text>
                            <View>
                                <Text style={{
                                    fontSize: 11, fontWeight: '400',
                                    color: 'black'
                                }}>
                                    Batting: {
                                    item.stats.batting_stats && item.stats.batting_stats.map(
                                        (inItem: any) => (inItem.runs_scored)
                                    )
                                }({
                                    item.stats.batting_stats && item.stats.batting_stats.map(
                                        (inItem: any) => (inItem.balls_played)
                                    )})
                                </Text>
                                <Text style={{
                                    fontSize: 11, fontWeight: '400',
                                    color: 'black'
                                }}>Bowling: {
                                    item.stats.bowling_stats && item.stats.bowling_stats.map(
                                        (inItem: any) => (inItem.overs_bowled)
                                    )
                                } {item.stats.bowling_stats && item.stats.bowling_stats.map(
                                    (inItem: any) => (inItem.overs_maiden)
                                )}/{
                                    item.stats.bowling_stats && item.stats.bowling_stats.map(
                                        (inItem: any) => (inItem.runs_given)
                                    )}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: '20%'
                    }}>
                        {/*    Image    */}
                        <Image source={Coins} style={{
                            width: 72,
                            height: 70,

                        }}/>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default ManOfTheMatch
const styles = StyleSheet.create({})
