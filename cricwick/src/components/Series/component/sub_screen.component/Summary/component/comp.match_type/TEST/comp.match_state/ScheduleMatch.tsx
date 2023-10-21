import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../../../../../../index";

const ScheduleMatch = ({item}: any) => {
    return (
        <View style={{
            marginHorizontal: 10,
            marginVertical: 5
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 2.5

            }}>
                <View><Text style={{color: 'gray'}}>UPCOMING</Text></View>
                <View><Text style={{color: 'gray'}}> - </Text></View>
                <View>
                    <DateComponent date={item.match_start} style={{color: 'gray'}}/>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 2.5

            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={{uri: item.teamA.flag_url}} style={{width: 30, aspectRatio: 16 / 9}}/>
                    <Text style={{color: 'black', marginLeft: 5}}>{item.teamA.short_name}</Text>
                </View>
                <View><Text style={{color: 'gray'}}> vs </Text></View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image source={{uri: item.teamB.flag_url}} style={{width: 30, aspectRatio: 16 / 9}}/>
                    <Text style={{color: 'black', marginLeft: 5}}>{item.teamB.short_name}</Text>
                </View>
            </View>
        </View>
    )
}
export default ScheduleMatch
