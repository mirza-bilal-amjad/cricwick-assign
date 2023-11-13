import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader, BallLoaderAnimation} from "../../../assets";
import {fetchSeries, fetchSummary} from "../../../utils/serverfetch/fetchBackend";
import {useNavigation} from "@react-navigation/native";
import MatchCard from "../../../components/Series/component/sub_screen.component/Summary/Cards/MatchCard";
import GenericHomeCard from "../../../components/Series/component/sub_screen.component/Summary/Cards/GenericHomeCard";

const Summary = ({route}: any) => {
    const navigation = useNavigation()

    const {matchId} = route.params;
    const [pageNumber, setPageNumber] = useState(1);
    const [summaryData, setSummaryData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const returnApi = (pageNumber: number, matchId: number) => {
        return `https://cwscoring.cricwick.net/api/v2/view_lists/get_list_items_from_viewable?viewable_type=series&viewable_id=${matchId}&page=${pageNumber}&telco=ufone&app_name=CricwickWeb`;
    }
    const fetchSum = async () => {
        setRefreshing(true)
        await fetchSummary(returnApi(pageNumber, matchId)).then((r) => {
            if (r) {
                setSummaryData(
                    (prevState: any): any => {
                        if (!prevState.includes(r)) {
                            setPageNumber(prevState1 => prevState1 + 1);
                            setRefreshing(false)
                            return [...prevState, ...r];
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

    const RenderItem = useCallback(({item, navigation}: any) => {
        switch (item.type) {
            case 'match':
                return <MatchCard match={item} navigation={navigation}/>;
            case 'generic-home':
                return <GenericHomeCard item={item} navigation={navigation}/>;
            default:
                return null;
        }
    }, [])

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
                    showsVerticalScrollIndicator={false}
                    windowSize={5}
                    removeClippedSubviews={true}
                    onEndReachedThreshold={.5}
                    onEndReached={fetchSum}
                    renderItem={({item}: any) => <RenderItem item={item} navigation={navigation}/>}
                    ItemSeparatorComponent={() => <View style={{height: 5}}/>}/>
            }
        </SafeAreaView>
    );
}
export default Summary
const styles = StyleSheet.create({})
