import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo, useMemo} from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";

const VideoContainerVertical = ({item}: any) => {
    const renderItem = useMemo(() => {
        return (({item}: any) => {
                item = item[0];
                return (
                    <View style={styles.imageContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={{uri: item.thumb}}
                                style={styles.image}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 10,
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
                            // width: 255,
                            padding: 5
                        }}>
                            <Text style={{
                                color: 'black',
                                paddingVertical: 1,
                                fontSize: 12.5,
                                fontWeight: '500'
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 11.4,
                                paddingVertical: 2,

                            }}>
                                {item.match_desc && item.match_desc.substring(0, 70) + '...'}
                            </Text>
                        </View>
                    </View>
                );
            }
        );
    }, [])

    return renderItem({item});
};

export default VideoContainerVertical

const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 10,
        flexDirection: 'column',

    },
    imageWrapper: {},
    image: {

        // borderRadius: 15,
        aspectRatio: 16 / 9,
    },
    flatListContent: {
        flexDirection: 'row',

    },
});
