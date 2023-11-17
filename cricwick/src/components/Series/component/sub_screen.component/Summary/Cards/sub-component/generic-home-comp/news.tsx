import {Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const News = ({item, navigation}: any) => {

    return (
        item.map((inItem: any, index: number) => <TouchableOpacity
            onPress={() => navigation.navigate('News', {
                newsID: inItem.id
            })}
            activeOpacity={.5}
            key={index}
            style={{
                marginHorizontal: 10,
            }}

        >
            <Image
                style={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                }}
                source={
                    {
                        uri: inItem?.image,
                    }
                }
            />
            <View style={{
                padding: 10,
            }}>
                <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{inItem?.title.length > 57 ? inItem?.title.slice(0, 57) + '...' : inItem?.title}</Text>
            </View>
        </TouchableOpacity>)
    )
}
export default News
