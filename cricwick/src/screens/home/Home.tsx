import React, {useEffect, useMemo, useState} from 'react'
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView, ScrollView,
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
    VideoContainerVertical
} from "../../components";
import {FIREBASE_DATABASE_REF} from "../../config/firebase/firebase.config";
import {onValue} from "firebase/database";
import {useDispatch, useSelector} from "react-redux";
import {addToCarousel} from "../../store/FBCarouselReducer";
import {removeDuplicate} from "../../utils/method";

const Home = () => {
        const cData = removeDuplicate(useSelector((state: any) => state.carouselReducer));
        const [homeData, setHomeData] = useState([]);
        const [pageCounter, setPageCounter] = useState(1);
        const [refreshing, setRefreshing] = useState(false);
        const dispatch = useDispatch();


        const returnApi = (page: number) => {
            return `https://cwscoring.cricwick.net/api/v3/view_lists/get_by_name?view=home&web_user=1&page=${page}&telco=ufone&app_name=CricwickWeb`
        }

        const fetchHome = async () => {
            setRefreshing(true);
            await fetchGenericHome(returnApi(pageCounter))
                .then((r: any) => {
                        setHomeData((prevState: any[]): any => {

                            if (r.length !== 0) {
                                setPageCounter(preValue => preValue + 1);
                                setRefreshing(false);
                                return [...prevState, ...r];
                            } else {
                                setRefreshing(false);
                                return prevState;
                            }
                            /*const withoutVideo = r.filter((item) => item.type !== 'video');
                            return [...prevState, ...withoutVideo];*/
                        });

                        // console.log(JSON.stringify(data))
                    }
                )
                .catch(e => console.error('Error:', e));
        }

        const firebaseCarousel = async () => {
            onValue(FIREBASE_DATABASE_REF, (snapshot) => {
                const data = snapshot.val();
                dispatch(addToCarousel(data));
            })
        };


        useEffect(() => {
            fetchHome().catch((e) => console.error(e));
            firebaseCarousel().catch((e) => console.error(e));
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
        const mainFlatListData = [
            {
                id: 0,
                type: 'carousel',
                component: useMemo(() => {
                    return cData[0] && <MatchCarousel data={cData[0]}/>
                }, [cData]),
            }, {
                id: 2,
                type: 'home',
                component: useMemo(() => {
                    return (
                        homeData && <FlatList data={homeData}
                                              contentContainerStyle={{
                                                  width: Dimensions.get('screen').width,
                                                  paddingBottom: 10
                                              }}
                                              ItemSeparatorComponent={() => (
                                                  <View style={{height: 10}}></View>
                                              )}
                                              removeClippedSubviews={true}
                                              maxToRenderPerBatch={5}
                                              windowSize={7}

                                              onEndReached={fetchHome}
                                              onEndReachedThreshold={0.1}
                                              keyExtractor={(item, index) => index.toString()}
                                              renderItem={renderItem}
                        />
                    )
                }, [homeData]),
            }

        ]

        return (
            <SafeAreaView style={{
                backgroundColor: '#f3f3f3', overflow: 'scroll',
                flex: 1,
                position: 'relative'
            }}>
                <View style={{
                    height: 2
                }}>
                    {homeData.length !== 0 && refreshing && <LottieView
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
                                color: "#c22026"
                            }]}
                    />}
                </View>

                {homeData.length === 0 && cData.length === 0 ? <View style={{
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
                                    color: "#c22026"
                                }]}
                        />
                    </View>
                    : <FlatList data={mainFlatListData}

                                contentContainerStyle={{
                                    width: Dimensions.get('screen').width,
                                    paddingBottom: 10
                                }}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => item.component}
                    />}
            </SafeAreaView>
        );
    }
;
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
