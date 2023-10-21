import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import {useRoute} from "@react-navigation/native";
import FeaturedContentGHome from "../../../screens/home/FeaturedContent/FeaturedContentGHome";

const GenericHome = ({item, route}: any) => {
    return (
        item.data.map((inItem: any, index: number) => {
            return (
                <View key={index} style={[styles.itemContainer, {
                    // borderRadius: 15,
                }]}>
                    <View style={[styles.thumbnailView]}>
                        <Image style={[styles.thumbnail]} source={{uri: inItem.med_image}}/>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                width: '100%',
                                zIndex: 10,
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            activeOpacity={.7}
                            onPress={() => route.navigate('FeaturedContentGHome', {
                                videoUri: inItem.qualities,
                                title: inItem.title,
                                poster: inItem.thumb,
                                views: inItem.views,
                                likes: inItem.likes,
                                homePageItemType: 'generic-home'
                            })}
                        >
                            <IonIcon name={'play-circle-outline'} size={40} color={'white'} style={{
                                backgroundColor: 'rgba(127,127,127,.5)',
                                borderRadius: 50,
                            }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%'
                    }}>
                        <Text style={[styles.title, {
                            paddingHorizontal: 10,
                        }]}>
                            {item.title}
                        </Text>
                        <Text style={{
                            fontSize: 13.8,
                            fontWeight: '400',
                            color: 'black',
                            paddingHorizontal: 10,
                            // marginLeft: 7,
                            marginVertical: 5,
                        }}>
                            {inItem.match_desc}
                        </Text>
                    </View>
                </View>
            )
        })

    )
};
export default GenericHome
const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        // borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        // elevation: 4,
    },
    thumbnailView: {
        width: '100%',
        alignItems: 'center',
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9
        // borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
})
