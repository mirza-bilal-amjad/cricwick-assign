import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import {convertSecondToMinutes} from "../../../../utils/method";

const FeaturedContentCardGHome = ({item, setTheVideoUri, setTheTitle, setThePoster, setTheViews, setTheLikes}: any) => {
    const handleVideoCont = (item: any) => {
        setTheVideoUri(item.video.qualities);
        setTheTitle(item.video.title);
        setThePoster(item.video.thumb);
        setTheViews(item.video.views);
        setTheLikes(item.video.likes);
    }
    return (
            <TouchableOpacity activeOpacity={.8} onPress={() => handleVideoCont(item)}>
            <View style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                borderRadius: 9,
                overflow: 'hidden',
                backgroundColor: 'white',
                elevation: 2,
                height: 90,


            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Image source={{uri: item.video.thumb}} style={{width: 160, aspectRatio: 16 / 9}}/>
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        zIndex: 10,
                        // borderTopLeftRadius: 5,


                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 12
                        }}>{convertSecondToMinutes(item.video.duration)}</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }}>
                    <View style={{
                        width: 215,

                    }}><Text style={{color: 'black', width: '100%'}}>
                        {item.video.title}
                    </Text></View>
                    <View style={{
                        width: 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <GoogleIcon name={'visibility'} size={15} color={'gray'}/>
                            <Text
                                style={{
                                    color: 'gray',
                                    marginHorizontal: 2.5,
                                    fontSize: 12

                                }}>{item.video.views > 1000 ? (item.video.views / 1000).toFixed(0) + 'k' : item.video.views}</Text>
                        </View>
                        <View style={{
                            width: 3,
                            height: 3,
                            borderRadius: 20,
                            backgroundColor: 'gray',
                            marginHorizontal: 3
                        }}></View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    color: 'gray',
                                    marginHorizontal: 2.5,
                                    fontSize: 12

                                }}>{moment(item.video.created_at).format('DD MMM, YYYY')}</Text>
                        </View>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}
export default FeaturedContentCardGHome
const styles = StyleSheet.create({})
