import {BackHandler, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Video from 'react-native-video'
import {fetchGenericHome} from "../../../utils/serverfetch/fetchBackend";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../../assets";
import FeaturedContentCardGHome from "../../../components/Home/GenericHome/FeaturedContent/FeaturedContentCardGHome";
import FeaturedContentCardVideo from "../../../components/Home/Video/FeaturedContent/FeaturedContentCardVideo";
import {RootNavigator} from "../../../navigation";
import {useNavigation} from "@react-navigation/native";

const FeaturedContentGHome = ({route}: any) => {
    const navigation = useNavigation();
    const {videoUri, title, poster, views, likes, homePageItemType} = route.params;


    const [theVideoUri, setTheVideoUri] = useState(videoUri);
    const [theTitle, setTheTitle] = useState(title);
    const [thePoster, setThePoster] = useState(poster);
    const [theViews, setTheViews] = useState(views);
    const [theLikes, setTheLikes] = useState(likes)
    const videoPlayer = useRef().current;
    const [pageNumber, setPageNumber] = useState(1);
    const [featuredContentData, setFeaturedContentData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    const returnApiVideo = (pageNumber: number) => {
        return `https://cwscoring.cricwick.net/api/v4/video_lists/play_video_list?list_id=1&type=featured&page=${pageNumber}&msisdn=00000000000&app_name=CricwickWeb`;
    }
    const fetch = async () => {
        setRefreshing(true)
        fetchGenericHome(returnApiVideo(pageNumber)).then(
            (r) => {
                if (r) {
                    setFeaturedContentData(
                        (prevState: any) => {
                            setRefreshing(false);
                            setPageNumber(
                                prevState1 => prevState1 + 1
                            )
                            if (prevState.includes(...r.resp)) {
                                return prevState;
                            } else {
                                setRefreshing(false);
                                setPageNumber(
                                    prevState1 => prevState1 + 1
                                )
                                return [...prevState, ...r.resp];
                            }
                        }
                    )
                }
            }
        )
    };

    useEffect(() => {
    }, [theVideoUri, theLikes, thePoster, theViews, theTitle]);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        const handleBackPress = () => {
            //@ts-ignore
            navigation.reset({
                index: 0,
                // @ts-ignore
                routes: [{name: 'BottomTabNavigation'}] // Replace with the name of the screen you want to navigate to
            });
            return true; // Return true to prevent default behavior (going back)
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, [route]);
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{backgroundColor: 'white'}}>
                <Video
                    controls={true}
                    repeat
                    source={{
                        uri: theVideoUri[2].video_file
                    }}
                    style={{
                        width: Dimensions.get('window').width,
                        aspectRatio: 16 / 9,
                    }}
                    paused={false}
                    volume={10}
                    resizeMode={'contain'}
                    poster={thePoster}
                />

                <View style={{
                    marginHorizontal: 10,
                    marginTop: 10

                }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>{theTitle}</Text>
                </View>
                <View style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'

                }}>
                    <View style={{
                        width: 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 10

                    }}>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <GoogleIcon name={'visibility'} size={20} color={'gray'}/>
                            <Text
                                style={{color: 'gray'}}> {theViews > 1000 ? (theViews / 1000).toFixed(0) + 'k' : theViews}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <GoogleIcon name={'thumb-up'} size={20} color={'gray'}/>
                            <Text style={{color: 'gray'}}> {theLikes}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <GoogleIcon name={'share'} size={20} color={'gray'}/>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                position: 'relative',
                flex: 1
            }}>
                <View style={{
                    height: 2
                }}>
                    {featuredContentData.length > 4
                        && refreshing && <LottieView
                            source={Loader} autoPlay loop
                            style={{
                                position: 'relative',
                                height: 4,
                            }}
                            colorFilters={[
                                {
                                    keypath: "Shape Layer 2",
                                    color: "#c22026"
                                }]}
                        />}
                </View>
                <Text style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 5,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>Videos</Text>
                {featuredContentData.length === 0 ? <View style={{
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
                    </View> :
                    <FlatList
                        removeClippedSubviews={true}
                        initialNumToRender={10}
                        maxToRenderPerBatch={10}
                        windowSize={5}
                        keyExtractor={(item, index) => index.toString()}
                        data={featuredContentData} style={{marginVertical: 10}} onEndReached={fetch}
                        onEndReachedThreshold={.5}
                        renderItem={({item}) => (
                            <FeaturedContentCardVideo
                                item={item}
                                setTheVideoUri={setTheVideoUri}
                                setTheTitle={setTheTitle}
                                setThePoster={setThePoster}
                                setTheViews={setTheViews}
                                setTheLikes={setTheLikes}
                            />
                        )}
                        ItemSeparatorComponent={() => <View style={{height: 10}}/>}/>
                }
            </View>
        </View>
    );
}
export default FeaturedContentGHome
const styles = StyleSheet.create({})
