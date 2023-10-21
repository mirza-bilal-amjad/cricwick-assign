import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'
import {CarouselVideo, PlayListComponent, SeriesComponent, VideoComponent} from "../index";
import {fetchVideos} from "../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../assets";

const VideoScreenComponent = ({item, refresh, fetchCallBack}: any) => {

    const renderItem = useMemo(() => ({item}: any) => {
        switch (item.type) {
            case 'featured':
                return (<View><CarouselVideo data={item['data']}/>
                </View>)
            case 'play_list':
                return (<View style={{
                    height: 270
                }}>
                    <Text style={{
                        marginHorizontal: 11,
                        color: 'black',
                        fontSize: 16,
                        marginBottom: 5,
                        fontWeight: '900'
                    }}>{item.label.slice(0, 46)}</Text>
                    <PlayListComponent data={item['data']}/>
                </View>)
            case 'series':
                return (<View style={{
                    height: 270
                }}>
                    <Text style={{
                        marginHorizontal: 11,
                        color: 'black',
                        fontSize: 16,
                        marginBottom: 5,
                        fontWeight: '900'
                    }}>{item.label.slice(0, 46)}</Text>
                    <SeriesComponent data={item['data']}/>
                </View>)
            default:
                return null
        }
    }, []);


    return (
        <SafeAreaView style={{
            backgroundColor: '#f3f3f3',
            flex: 1,
            position: 'relative'
        }}>
            <View style={{
                height: 2
            }}>
                {item.length > 3 && refresh && <LottieView
                    source={Loader} autoPlay loop
                    style={{
                        position: 'relative',
                        height: 4,
                        top: -2,
                        zIndex: 10
                    }}
                    colorFilters={[
                        {
                            keypath: "Shape Layer 2",
                            color: "#c22026"
                        }]}
                />}
            </View>

            {item.length === 0 ? <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LottieView source={ActivityLoader} autoPlay loop
                                style={{
                                    width: 280, height: 280
                                }}
                                colorFilters={[{
                                    keypath: "Shape Layer 2",
                                    color: "#c22026"
                                }]}
                    />
                </View>
                : <FlatList
                    data={item}
                    windowSize={10}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    onEndReachedThreshold={1}
                    onEndReached={fetchCallBack}
                    contentContainerStyle={{
                        width: Dimensions.get('screen').width,
                        paddingBottom: 10
                    }}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={10}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />}
        </SafeAreaView>
    );
}
export default VideoScreenComponent
const styles = StyleSheet.create({})
