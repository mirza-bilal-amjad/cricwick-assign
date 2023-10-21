import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'

import {ArticleComponent} from "../components";
import {useDispatch} from "react-redux";
import {fetchSeries} from "../utils/serverfetch/fetchBackend";
import {MatchResultReportComponent} from "../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../assets";
import NewsComponent from "../components/News.component/News.component";

const News = ({route}: any) => {
    //
    const {newsID} = route.params;

    const [newsData, setNewsData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const returnApi = (matchId: number) => {
        return `https://cwscoring.cricwick.net/api/news/${newsID}`
    };
    const fetchRD = async () => {
        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                    setNewsData((prevState: any[]): any => {
                        return r && [r]
                    });
                }
            )
            .catch(e => console.error('Error:', e));
    };

    useEffect(() => {
        fetchRD();
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {newsData.length > 0 ? <FlatList data={newsData} renderItem={
                    NewsComponent
                }/> :
                <View style={{
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
            }
        </SafeAreaView>)
}
export default News
const styles = StyleSheet.create({})
