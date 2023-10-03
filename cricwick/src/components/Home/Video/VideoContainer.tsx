import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native'
import React, {memo, useMemo} from 'react'

const VideoContainer = ({item}: any) => {

    console.log(item);
    const renderItem = useMemo(() => {
        return (({item}: any) => {
                return (
                    <View style={styles.imageContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={{uri: item.thumb}}
                                style={styles.image}
                            />
                        </View>
                        <View style={{
                            width: 255,
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

    return (
        <View style={{
            marginHorizontal: 10,
        }}>
            <FlatList data={item} renderItem={renderItem}
                      ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                      horizontal={true}
                      contentContainerStyle={styles.flatListContent}/>
        </View>
    );
};

export default VideoContainer

const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 0,

        flexDirection: 'column',

    },
    imageWrapper: {},
    image: {
        width: 255,

        borderRadius: 15,
        height: 140,
        aspectRatio: 16 / 9,
    },
    flatListContent: {
        flexDirection: 'row',
    },
});
