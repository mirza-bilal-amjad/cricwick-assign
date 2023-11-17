import {Image, Text, View} from 'react-native'
import React from 'react'

const PlayerInfoCard = ({item}: any) => {

    return (
        <View style={{
            height: 105,
            width: 100,
            justifyContent: 'space-around',
            alignItems: 'center',
            // backgroundColor: 'pink',
            // paddingVertical: 10,
        }}>
            <Image source={{uri: item.player_display_picture}}
                   style={{width: 70, height: 70, borderRadius: 50, top: 7}}/>
            <Text style={{
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
                paddingTop: 20
            }}>{item.player_short_name}</Text>
            <Text style={{color: 'black', fontSize: 11, marginVertical: 10}}>Rating: {item.rating}</Text>
        </View>
    )
}
export default PlayerInfoCard
