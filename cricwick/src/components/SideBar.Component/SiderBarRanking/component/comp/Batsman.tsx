import {View, Text} from 'react-native'
import React from 'react'
import FastImage from "react-native-fast-image";

const Batsman = ({item, index}: any) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            padding: 5,
            backgroundColor: index % 2 === 0 ? '#e8e8e8' : 'white',
            alignItems: 'center'
        }}>
            <View style={{
                width: '10%', paddingVertical: 4, paddingHorizontal: 3
            }}><Text
                style={{color: 'black', paddingHorizontal: 3, fontSize: 12, textAlign: 'right', right: 4}}>{index + 1}</Text></View>
            <View style={{
                width: '40%', paddingVertical: 4, paddingHorizontal: 3,
            }}>
                <Text style={{color: 'black', fontSize: 12,}}>{item.player_name}</Text></View>
            <View style={{
                width: '35%', paddingVertical: 4, paddingHorizontal: 3, flexDirection: 'row', alignItems: 'center'
            }}>
                <FastImage source={{uri: item.team_flag}} style={{width: 25, aspectRatio: 16 / 11}}/>
                <Text
                    style={{color: 'black', fontSize: 12, textAlign: 'center', left: 5}}>{item.team_name}</Text></View>
            <View style={{
                width: '15%', paddingVertical: 4, paddingHorizontal: 3
            }}><Text style={{color: 'black', fontSize: 12, textAlign: 'center'}}>{item.rating}</Text></View>
        </View>
    );
}
export default Batsman
