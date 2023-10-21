import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import LottieView from "lottie-react-native";
import {BallLoaderAnimation, Loader} from "../../../assets";
import ScheduleCard from "../../../components/Series/component/sub_screen.component/Schedule/ScheduleCard";
import {fetchSchedule} from "../../../utils/serverfetch/fetchBackend";
import SquadCard from "../../../components/Series/component/sub_screen.component/Squads/SquadCard";

const Squads = ({route}: any) => {
    const {matchId} = route.params;
    const [pageNumber, setPageNumber] = useState(1);
    const [summaryData, setSummaryData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const returnApi = (pageNumber: number, matchId: number | string) => {
        return `https://cwscoring.cricwick.net/api/v4/series/${matchId}/series_teams?app_name=CricwickWeb`;
    }
    const fetchSum = async () => {
        setRefreshing(true)
        await fetchSchedule(returnApi(pageNumber, matchId)).then((r) => {
            if (r) {
                setSummaryData(
                    (prevState: any): any => {
                        if (!prevState.includes(r.series_teams)) {
                            setPageNumber(prevState1 => prevState1 + 1);
                            setRefreshing(false)
                            return [...prevState, ...r.series_teams];
                        } else {
                            setPageNumber(prevState1 => prevState1 + 1);
                            setRefreshing(false)
                            return prevState;
                        }
                    }
                )
            }
        });
    };

    useEffect(() => {
        fetchSum();
    }, []);
    return (
        <SafeAreaView style={{
            backgroundColor: '#f3f3f3',
            flex: 1,
            position: 'relative'
        }}>
            <View style={{
                height: 2
            }}>
                {summaryData.length > 3
                    && refreshing && <LottieView
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

            {summaryData.length === 0 ? <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LottieView source={BallLoaderAnimation} autoPlay loop
                                style={{
                                    width: 280, height: 280
                                }}
                                colorFilters={[{
                                    keypath: "Shape Layer 2",
                                    color: "#c22026"
                                }]}
                    />
                </View>
                : <FlatList
                    data={summaryData}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    windowSize={15}
                    removeClippedSubviews={true}
                    getItemLayout={(data, index) => (
                        {length: 70, offset: 70 * index, index}
                    )}
                    renderItem={({item}: any) => <SquadCard match={item}/>}
                    ItemSeparatorComponent={() => <View style={{height: 4}}/>}/>
            }
        </SafeAreaView>
    )
}
export default Squads
const styles = StyleSheet.create({})
