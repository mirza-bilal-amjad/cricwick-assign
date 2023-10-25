import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";
import {MatchResultSummaryComponent} from "../../../components/Home/Series/component.MatchResult";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";
import MrScoreCardComponent
    from "../../../components/Home/Series/component.MatchResult/scorecard.component/mr_score_card.component";

const ScoreCard = ({route}: any) => {
    const flag = useSelector((state: any) => state.toggleReducer.flag);
    const [SCData, setSCData] = useState<any>();
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

                        if (r)
                            return r;
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
            {SCData ?
                <MrScoreCardComponent item={SCData}/> :
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
