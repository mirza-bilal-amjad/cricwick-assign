import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";

const Video = ({item, navigation}: any) => {
    return (
        item.map((inItem: any, index: number) => < View

            key={index}
            style={{
                marginHorizontal: 10,
                backgroundColor: 'white',

            }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('FeaturedContentVideos', {
                    videoUri: inItem.qualities,
                    title: inItem.title,
                    poster: inItem.thumb,
                    views: inItem.views,
                    likes: inItem.likes,
                    homePageItemType: 'videos-home'
                })}
                activeOpacity={.5}
                style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: 16 / 9,
                    position: 'absolute',
                    zIndex: 10,
                }}>
                <GoogleIcon name={'play-circle-outline'} size={30} color={'white'}/>
            </TouchableOpacity>
            <Image
                style={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                }}
                source={
                    {
                        uri: inItem?.thumb,
                    }
                }
            />
            <View style={{
                padding: 10,
            }}>
                <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{inItem?.title.length > 55 ? inItem?.title.slice(0, 55) + '...' : inItem?.title}</Text>
                <Text
                    style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>{inItem?.match_desc.length > 57 ? inItem?.match_desc.slice(0, 57) + '...' : inItem?.match_desc}</Text>
            </View>
        </View>)
    );
}
export default Video
