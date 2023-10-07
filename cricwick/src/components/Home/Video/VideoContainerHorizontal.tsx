import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo, useMemo} from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";

const VideoContainerHorizontal = ({item}: any) => {
    const renderItem = useMemo(() => {
        return (({item}: any) => {
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
            paddingVertical: 10,
        }}>
            {item.length > 0 && <FlatList data={item.slice(0, 5)} renderItem={renderItem}
                                          ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                                          horizontal={true}

                                          showsHorizontalScrollIndicator={false}
                                          ListFooterComponent={() => <View
                                              style={{
                                                  width: 100,
                                                  height: 140,
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                              }}
                                          >
                                              <TouchableOpacity
                                                  activeOpacity={.8}
                                                  style={{
                                                      backgroundColor: '#d0e8b2',
                                                      width: 70,
                                                      height: 40,
                                                      borderRadius: 50,
                                                      elevation: 2,
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                  }}>
                                                  <Text style={{
                                                      color: 'black',
                                                      fontSize: 15.5,
                                                      fontWeight: '500',
                                                      paddingVertical: 5
                                                  }}>More</Text>
                                              </TouchableOpacity>
                                          </View>
                                          }
                                          contentContainerStyle={styles.flatListContent}/>}
        </View>
    );
};

export default VideoContainerHorizontal

const styles = StyleSheet.create({
    imageContainer: {
        width: 255,
        flexDirection: 'column',

    },
    imageWrapper: {},
    image: {
        borderRadius: 15,
        aspectRatio: 16 / 9,
    },
    flatListContent: {
        flexDirection: 'row',

    },
});
