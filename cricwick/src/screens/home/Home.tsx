import React, {useEffect, useMemo, useState} from 'react'
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native'
import {fetchGenericHome} from "../../utils/serverfetch/fetchBackend";
import {ActivityLoader, Loader} from "../../assets";
import LottieView from "lottie-react-native";
import {
    MatchCarousel,
    GenericHome,
    Rankings,
    Series,
    VideoContainerHorizontal,
    VideoContainerVertical
} from "../../components";
import Videos from "../videos/Videos";
import {FIREBASE_DATABASE_REF} from "../../config/firebase/firebase.config";
import {onValue} from "firebase/database";

const Home = () => {
    const [carouselData, setCarouselData] = useState([]); // [1]
    const [carouselDataID, setCarouselDataID] = useState([]); // [1]
    const [data, setData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const returnApi = (page: number) => {
        return `https://cwscoring.cricwick.net/api/v3/view_lists/get_by_name?view=home&web_user=1&page=${page}&telco=ufone&app_name=CricwickWeb`
    }

    const fetchHome = async () => {
        setRefreshing(true);
        await fetchGenericHome(returnApi(pageCounter))
            .then((r: any) => {
                // @ts-ignore
                setRefreshing(false);
                // @ts-ignore
                if (Array.isArray(r) && r.length > 0 && !data.includes(r)) {
                    setData((prevState: any[]): any => {
                        return [...prevState, ...r];
                        /*const withoutVideo = r.filter((item) => item.type !== 'video');
                        return [...prevState, ...withoutVideo];*/
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
    const firebaseCarousel = async () => {
        const FirebaseData: any = [];
        await onValue(FIREBASE_DATABASE_REF, (snapshot) => {
            const data = snapshot.val();
            FirebaseData.push(data);
        })
        // console.log(JSON.stringify(FirebaseData[0]))

        setCarouselData(FirebaseData);

    };
    useEffect(() => {
        fetchHome().catch((e) => console.error(e));
        firebaseCarousel().catch((e) => console.error(e));
        console.log('fetched')
        console.log(...data)

    }, []);

    const renderItem = useMemo(() => {
        return ({item}: any) => {
            if (item.type === 'native_screen' && item.data) {// console.log('native-screen')
                return <View style={[styles.itemContainer, {
                    // borderRadius: 15,
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
            } else if (item.type === 'video' && item.data) {
                // console.log('video')
                return <VideoContainerVertical item={item.data}/>;
            } else if (item.type === 'ranking' && item) {
                // console.log('ranking')
                return <Rankings item={item}/>;
            } else return null;
        }
    }, []);

    return (
        <SafeAreaView style={{
            backgroundColor: '#FFEAE7', overflow: 'scroll',
            flex: 1,
            position: 'relative'
        }}>
            <View style={{
                height: 2
            }}>
                {data.length !== 0 && refreshing && <LottieView
                    source={Loader}
                    autoPlay
                    loop
                    style={{
                        position: 'relative',
                        height: 4,
                        top: -2,
                        zIndex: 10

                    }}
                    colorFilters={[
                        {
                            keypath: "Shape Layer 2",
                            color: "#F00000"
                        }]}
                />}
            </View>


            {data.length === 0 && carouselData.length === 0 ? <View style={{
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
                : <FlatList data={data}
                            contentContainerStyle={{
                                width: Dimensions.get('screen').width,
                                paddingBottom: 10
                            }}
                            ItemSeparatorComponent={() => (
                                <View style={{height: 10}}></View>
                            )}
                            ListHeaderComponent={() => {
                                return <MatchCarousel data={carouselData[0]}/>
                            }}
                            onEndReached={fetchHome}
                            onEndReachedThreshold={0.1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderItem}
                />}

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
        // borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
});
