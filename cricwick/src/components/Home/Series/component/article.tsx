import {View, Text, Image} from 'react-native'
import React from 'react'

const Article = ({item}: any) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderTopColor: 'black',
            borderColor: 'grey',
            paddingHorizontal: 10,
            marginVertical: 10,
        }}>
            <View style={{}}>
                <Image source={{uri: item.image}}
                       style={{
                           width: 140, height: 80, aspectRatio: 16 / 9,
                           // borderRadius: 10
                       }}/>
            </View>
            <View style={{
                width: '60%',
                margin: 10
            }}>
                <Text style={{color: 'black', fontSize: 13.5, fontWeight: '600'}}>{item.title}</Text>
                <Text style={{color: 'grey', fontSize: 12.5, fontWeight: '600'}}>{item.by}</Text>
            </View>
        </View>
    )
}
export default Article
