import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'
import {fetchGenericHome, fetchSeries} from "../../../utils/serverfetch/fetchBackend";
import {removeDuplicate} from "../../../utils/method";
import {useDispatch, useSelector} from "react-redux";
import {MatchResultSummaryComponent} from "../../../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";

const MrSummary = ({route}: any) => {
    const flag = useSelector((state: any) => state.toggleReducer.flag);
    const [MRData, setMRData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const returnApi = (matchId: number) => {
        return `https://cwscoring.cricwick.net/api/v4/matches/${matchId}/unsub_summary?web_user=1&telco=ufone&app_name=CricwickWeb`
    };
    const fetchMR = async () => {

        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                    setMRData((prevState: any[]): any => {
                        if (r)
                            return [r];
                        else return prevState;
                    });
                }
            )
            .catch(e => console.error('Error:', e));
    };

    useEffect(() => {
        fetchMR();

    }, [flag]);
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {MRData.length > 0 ? <FlatList data={MRData} keyExtractor={
                    (item, index) => index.toString()
                } renderItem={
                    MatchResultSummaryComponent
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
        </SafeAreaView>
    );
};
export default MrSummary
const styles = StyleSheet.create({})
