import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";
import {MatchResultSummaryComponent} from "../../../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";
import MrScoreCardComponent
    from "../../../components/Home/Series/component.MatchResult/scorecard.component/mr_score_card.component";

const ScoreCard = ({route}: any) => {
    const [SCData, setSCData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();


    const returnApi = (matchId: number) => {
        return `https://cwscoring.cricwick.net/api/${matchId}`
    };
    const fetchMR = async () => {

        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                    setSCData((prevState: any[]): any => {
                        const {match} = r
                        if (match)
                            return [match];
                        else return prevState;
                    });
                }
            )
            .catch(e => console.error('Error:', e));
    };

    useEffect(() => {
        fetchMR();

    }, []);

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {SCData.length > 0 ? <FlatList data={SCData} renderItem={
                    MrScoreCardComponent
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
    )
}
export default ScoreCard
const styles = StyleSheet.create({})
