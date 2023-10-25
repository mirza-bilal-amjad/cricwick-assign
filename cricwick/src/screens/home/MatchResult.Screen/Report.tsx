import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {
    MatchResultReportComponent,
    MatchResultSummaryComponent
} from "../../../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";
import {useDispatch} from "react-redux";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";

const Report = ({route}: any) => {
    const [reportData, setReportData] = useState<any>( );
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const returnApi = (matchId: number) => {
        return `https://cwscoring.cricwick.net/api/v4/matches/${matchId}/unsub_summary?web_user=1&telco=ufone&app_name=CricwickWeb`
    };
    const fetchRD = async () => {
        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                    setReportData((prevState: any[]): any => {
                        const {match} = r;
                        if (match)
                            return match;
                        else return prevState;
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
            flex: 1,

        }}>
            {reportData ? reportData.match_report !== null || reportData.match_report ?
                    <MatchResultReportComponent item={reportData}/> :
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'black',
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>
                            No Content Available
                        </Text>

                    </View> :
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
}
export default Report
const styles = StyleSheet.create({})
