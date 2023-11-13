import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'

import {ArticleComponent} from "../components";
import {useDispatch} from "react-redux";
import {fetchSeries} from "../utils/serverfetch/fetchBackend";
import {MatchResultReportComponent} from "../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../assets";
import {useNavigation} from "@react-navigation/native";


const Articles = ({route}: any) => {
    const navigation = useNavigation();
    const {articleId} = route.params;
    const [reportData, setReportData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const returnApi = (matchId: number) => {

        return `https://cwscoring.cricwick.net/api/articles/${articleId}`
    };
    const fetchRD = async () => {
        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                    setReportData((prevState: any[]): any => {
                        return r && r
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
            {reportData ? <ArticleComponent item={reportData}/> :
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
export default Articles
const styles = StyleSheet.create({})
