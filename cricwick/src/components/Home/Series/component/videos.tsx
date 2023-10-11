import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import {getNumOfCharacters} from "../../../../utils/method";

const Videos = ({item, key}: any) => {
    const [componentWidth, setComponentWidth] = React.useState(0);
    const onLayout = (event: any) => {
        const {width} = event.nativeEvent.layout;
        setComponentWidth(width);
    };
    return (
        <View key={key} style={[styles.itemContainer, {
            // borderRadius: 15,
        }]}>
            <View style={[styles.thumbnailView]}>
                <Image style={[styles.thumbnail, {height: 90}]} source={{uri: item.thumb_image}}/>
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
                    <IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
                        backgroundColor: 'rgba(127,127,127,.5)',
                        borderRadius: 50,
                    }}/>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%'
            }}>
                <Text onLayout={onLayout} style={[styles.title, {
                    paddingHorizontal: 5,
                }]}>
                    {item.title.slice(0, getNumOfCharacters(componentWidth)) + '...'}
                </Text>
                <Text style={[styles.title2, {
                    paddingHorizontal: 5,
                }]}>
                    {item['match_obj'].title} - {item['match_obj'].team_1} vs {item.match_obj.team_2}
                </Text>
            </View>
        </View>
    )
};
export default Videos
const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 160,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderWidth: 0.2,
        borderColor: 'rgba(0,0,0,.2)',
        // elevation: 4,
    },
    thumbnailView: {
        // width: '100%',
        alignItems: 'center',
    },
    thumbnail: {
        aspectRatio: 16 / 9,
        // borderRadius: 14
    },
    title: {
        fontSize: 13.8,
        color: 'black',
        fontWeight: '500',
        marginTop: 10,
    },
    title2: {
        fontSize: 12,
        color: 'black',
        marginTop: 2,
    },
})
