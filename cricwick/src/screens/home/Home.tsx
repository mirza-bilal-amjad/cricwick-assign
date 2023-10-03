import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView, ScrollView,
    StyleSheet, Text,
    View
} from 'react-native'
import {fetchGenericHome} from "../../utils/serverfetch/fetchBackend";
import {ActivityLoader} from "../../assets";
import LottieView from "lottie-react-native";
import {GenericHome, Series, VideoContainer} from "../../components";
import Videos from "../videos/Videos";

const Home = () => {
    const [data, setData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const returnApi = (page: number) => {
        return `https://cwscoring.cricwick.net/api/v3/view_lists/get_by_name?view=home&web_user=1&page=${page}&telco=ufone&app_name=CricwickWeb`
    }

    const fetchHome = async () => {
        await fetchGenericHome(returnApi(pageCounter))
            .then((r: any) => {
                if (Array.isArray(r) && r.length > 0 && !data.includes(r)) {
                    console.log('setting')
                    setData((prevState: any[]): any => {
                        const withoutVideo = r.filter((item) => item.type !== 'video');
                        return [...prevState, ...withoutVideo];
                    })
                    setVideoData((prevState: any[]): any => {
                        const onlyVideo = r.filter((item) => item.type === 'video').map((item: any) => item.data);
                        const filter = [].concat(...onlyVideo)

                        return [...prevState, ...filter]
                    })
                    setPageCounter(prevState => prevState + 1);
                }
                // console.log(JSON.stringify(data))
            })
            .catch(e => console.error('Error:', e));
    }
    useEffect(() => {
        fetchHome();
    }, []);

    /*useEffect(() => {
        const video = data.filter((item: any) => item.type === 'video').map((item: any) => item.data)
        const flattenedData = [].concat(...video);
        setVideoData(flattenedData);
    }, [data]);*/

    const renderItem = useMemo(() => {
        return ({item}: any) => {
            if (item.type === 'native_screen' && item.data) {// console.log('native-screen')
                return <View style={[styles.itemContainer, {
                    borderRadius: 15,
                }]}>
                    <View style={[styles.thumbnailView,]}>
                        <Image style={[styles.thumbnail, {height: 120}]} source={{uri: item.data.thumbnail}}/>
                    </View>
                </View>;
            } else if (item.type === 'generic-home') {
                // console.log('generic-home')
                if (item.data !== null && item.data) {
                    return <GenericHome item={item}/>;
                }
            } else if (item.type === 'series' && item.data) {
                // console.log('series')
                return <Series item={item}/>;
            } else if (item.type === 'ranking' && item.data) {
                // console.log('ranking')
                return (
                    <View style={{}}>
                        <Text style={{
                            // color: 'black',
                            alignItems: 'center',
                            width: '100%'
                        }}>Ranking</Text>
                    </View>

                )
            }
        }
    }, []);
    /*
   const renderItem = useCallback(({item}: any) => {
       return (
           <Text style={{color: 'black'}}>{item.type}</Text>
       )
   })*/
    return (
        <SafeAreaView style={{
            backgroundColor: '#FFEAE7', overflow: 'scroll',
            flex: 1
        }}>

            {data.length === 0 ?
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LottieView
                        source={ActivityLoader}
                        autoPlay
                        loop
                        style={{
                            width: 280, height: 280
                        }}
                        colorFilters={[
                            {
                                keypath: "Shape Layer 2",
                                color: "#F00000"
                            }]}
                    />
                </View>

                :
                <FlatList data={data}
                          contentContainerStyle={{
                              width: Dimensions.get('screen').width,
                          }}
                          ItemSeparatorComponent={() => (
                              <View style={{height: 10}}></View>
                          )}
                          onEndReached={fetchHome}
                          onEndReachedThreshold={0.1}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={renderItem}
                          ListFooterComponent={() => <VideoContainer item={videoData}/>}


                />
            }
            {/*{videoData && videoData.length > 0 && <><VideoContainer item={videoData}/></>}*/}

        </SafeAreaView>
    );
};
export default Home
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
        borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
});
