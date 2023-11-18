import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {memo, useMemo} from 'react'
import {CarouselVideo, PlayListComponent, SeriesComponent} from "../../index";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../../assets";

const VideoScreenComponent = ({item, refresh, fetchCallBack, navigation}: any) => {
    const RenderItem = useMemo(() => ({item, navigation}: any) => {

        switch (item.type) {
            case 'featured':
                return (<View>
                    <CarouselVideo data={item['data']} listID={item.list_id ? item.list_id : null}
                                   seriesID={item.series_id ? item.series_id : null} label={item.label}
                                   navigation={navigation}/>
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
                    <PlayListComponent data={item['data']} listID={item.list_id ? item.list_id : null}
                                       seriesID={item.series_id ? item.series_id : null} label={item.label}
                                       navigation={navigation}/>
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
                    <SeriesComponent data={item['data']} listID={item.list_id ? item.list_id : null}
                                     seriesID={item.series_id ? item.series_id : null} label={item.label}
                                     navigation={navigation}/>
                </View>)
            default:
                return null
        }
    }, []);


    return (
        <SafeAreaView style={{
            backgroundColor: '#f3f3f3',
            flex: 1,
            position: 'relative',
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
                    initialNumToRender={10}
                    windowSize={10}
                    maxToRenderPerBatch={10}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <RenderItem item={item} navigation={navigation}/>}
                    onEndReachedThreshold={1}
                    onEndReached={fetchCallBack}
                    contentContainerStyle={{
                        width: Dimensions.get('screen').width,
                        paddingBottom: 10
                    }}
                    removeClippedSubviews={true}

                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />}
        </SafeAreaView>
    );
}
export default memo(VideoScreenComponent)
const styles = StyleSheet.create({})
