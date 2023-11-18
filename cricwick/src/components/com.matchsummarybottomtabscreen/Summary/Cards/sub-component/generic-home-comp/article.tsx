import {Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const Article = ({item, navigation}: any) => {
    return (
        item.map(
            (inItem: any, index: number) => (
                <TouchableOpacity onPress={() => navigation.navigate('Articles', {
                    articleId: inItem.id
                })} style={{
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                }}>
                    <View>
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
                    </View>
                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            color: 'black'
                        }}>{inItem?.title.length > 53 ? inItem?.title.slice(0, 53) + '...' : inItem?.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        ));
}
export default Article
