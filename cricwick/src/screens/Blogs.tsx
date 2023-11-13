import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react'
import * as Animatable from "react-native-animatable";
import {fetchBlogs} from "../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../assets";
import {DateComponent} from "../components";
import FadeInView from "../components/SideBar.Component/FadeInView";
import Animated from "react-native-reanimated";

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);

    const fetchit = async () => {
        setRefreshing(true)
        fetchBlogs(pageCounter).then((r: any) => {
            return setBlogsData((prevState: any[]): any => {
                const check = prevState.findIndex((item) => item.id === r.data[0].id);
                console.log(check)
                if (r.length !== 0) {
                    //check if previous data already exists

                    setPageCounter(preValue => preValue + 1);
                    setRefreshing(false);
                    return [...prevState, ...r.data];
                } else {
                    setRefreshing(false);
                    return prevState;
                }
            })
        })
    }
    useEffect(() => {
        fetchit();
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                height: 2,
            }}>
                {blogsData.length !== 0 && refreshing && <LottieView
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

            {blogsData.length === 0 && blogsData.length === 0 ? <View style={{
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
                <Animated.FlatList
                    removeClippedSubviews={true}
                    initialNumToRender={10}

                    windowSize={100}
                    onEndReachedThreshold={0.5}
                    onEndReached={!refreshing ? fetchit : () => console.log('no fetch done')}
                    keyExtractor={(item, index) => index.toString()}
                    style={{
                        flex: 1,
                    }} data={blogsData} numColumns={2} contentContainerStyle={{
                    marginHorizontal: 2
                }} renderItem={

                    ({item, index}: any) => (
                        <FadeInView item={item} index={index} routeData={blogsData}/>
                    )

                }/>}
        </SafeAreaView>
    );
}
export default Blogs


const styles = StyleSheet.create({

    animatedContainer: {
        flex: 1,
        margin: 2,
        backgroundColor: 'white',

    },
    contentText: {
        fontSize: 16,
        color: 'white',
    },
});
