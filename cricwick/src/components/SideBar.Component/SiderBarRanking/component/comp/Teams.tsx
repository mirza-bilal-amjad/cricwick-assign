import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import FastImage from "react-native-fast-image";

const Teams = ({item, index}: any) => {
    useEffect(() => {

    }, []);
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            padding: 3,
            backgroundColor: index % 2 === 0 ? '#e8e8e8' : 'white',
        }}>
            <View style={{
                width: '10%', paddingVertical: 4, paddingHorizontal: 2,
            }}><Text
                style={{color: 'black', paddingHorizontal: 3, fontSize: 10, textAlign: 'right', right: 4}}>{index + 1}</Text></View>
            <View style={{
                width: '45%', paddingVertical: 4, paddingHorizontal: 2, flexDirection: 'row', alignItems: 'center'
            }}>
                <FastImage source={{uri: item.team_flag}} style={{width: 25, aspectRatio: 16 / 11, height: 20}}/>
                <Text style={{color: 'black', fontSize: 12, left: 5}}>{item.team_name}</Text></View>
            <View style={{
                width: '15%', paddingVertical: 4, paddingHorizontal: 2,
            }}><Text style={{color: 'black', fontSize: 12, textAlign: 'center'}}>{item.match_count}</Text></View>
            <View style={{
                width: '15%', paddingVertical: 4, paddingHorizontal: 2,
            }}><Text style={{color: 'black', fontSize: 12, textAlign: 'center'}}>{item.points}</Text></View>
            <View style={{
                width: '15%', paddingVertical: 4, paddingHorizontal: 2,
            }}><Text style={{color: 'black', fontSize: 12, textAlign: 'center'}}>{item.rating}</Text></View>
        </View>
    )
}
export default Teams
