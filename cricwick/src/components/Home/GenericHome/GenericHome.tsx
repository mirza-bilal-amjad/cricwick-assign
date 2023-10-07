import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";

const GenericHome = ({item}: { item: any; }) => {
    return (
        <View style={[styles.itemContainer, {
            // borderRadius: 15,
        }]}>
            <View style={[styles.thumbnailView]}>
                <Image style={[styles.thumbnail, {height: 220}]} source={{uri: item.data[0].med_image}}/>
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
                    {item.data[0].match_desc}
                </Text>
            </View>
        </View>
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
        // borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
})
