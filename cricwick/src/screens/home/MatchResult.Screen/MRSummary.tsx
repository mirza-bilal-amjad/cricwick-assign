import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
    fetchGenericHome,
    fetchSeries,
} from '../../../utils/serverfetch/fetchBackend';
import {removeDuplicate} from '../../../utils/method';
import {useDispatch, useSelector} from 'react-redux';
import {MatchResultSummaryComponent} from '../../../components/Home/Series/component.MatchResult';
import LottieView from 'lottie-react-native';
import {ActivityLoader} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {log} from 'mathjs';

const MrSummary = ({route}: any) => {
//   console.log('MRSummary: Main -> id:', route.params.matchId);
    const navigation = useNavigation();
    const flag = useSelector((state: any) => state.toggleReducer.flag);
    const [MRData, setMRData] = useState([]);
    const [mROversData, setMROversData] = useState([]);
    const [mRArticles, setMRArticles] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [inningId, setInningId] = useState(null);
    const [overNumber, setOverNumber] = useState(null);

    const returnApi = (matchId: number) => {
        return `https://cwscoring.cricwick.net/api/v4/matches/${matchId}/unsub_summary?web_user=1&telco=ufone&app_name=CricwickWeb`;
    };
    const returnApiInnings = (
        inningId: number | string,
        overNumber: number | string,
    ) => {
        console.log(inningId, overNumber)
        return `https://cwscoring.cricwick.net/api/v3/innings/${inningId}/get_previous_overs?over_number=${overNumber}&app_name=CricwickWeb`;
    };

    const fetchMR = async () => {
        setRefreshing(true);
        await fetchSeries(returnApi(route.params.matchId))
            .then((r: any) => {
                setMRData((prevState: any[]): any => {
                    if (r) {
                        const {match} = r;
                        return [match];
                    } else return prevState;
                });
                setMRArticles((prevState: any[]): any => {
                    if (r && r.articles.length > 0) {
                        const {articles} = r;
                        return [...articles];
                    } else return prevState;
                });
                setMROversData((prevState: any[]): any => {
                    if (r) {
                        const {overs} = r;
                        if (prevState.length === 0) {
                            const lastOver =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ]?.over_number;
                            const inn =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ].inn;
                            setOverNumber(
                                prevState1 => {
                                    if (prevState1 !== lastOver)
                                        return lastOver;
                                    else return null
                                }
                            );
                            setInningId(inn);
                            return overs;
                        } else {
                            const lastOver =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ]?.over_number;
                            const inn =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ].inn;
                            setOverNumber(lastOver);
                            setInningId(inn);
                            return [...overs, ...prevState];
                        }
                    } else return prevState;
                });
            })
            .catch(e => console.error('Error:', e));
    };

    const fetchBbBDataInnings = async (inningId: number, overNumber: number) => {

        setRefreshing(true);
        await fetchSeries(returnApiInnings(inningId, overNumber))
            .then((r: any) => {
                setMROversData((prevState: any[]): any => {
                    if (r) {
                        const {overs} = r;
                        if (overs.length > 0) {
                            console.log('MRSummary: fetchBbBDataInnings -> overs:');

                            const lastOver =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ].over_number;
                            const inn =
                                overs[overs.length - 1]?.balls[
                                overs[overs.length - 1]?.balls.length - 1
                                    ].inn;
                            setOverNumber(lastOver);
                            setInningId(inn);
                            return [...prevState, ...overs];
                        } else return prevState;
                    } else return prevState;
                });
                setRefreshing(false);
            })
            .catch(e => console.error('Error:', e));
    };

    useEffect(() => {
        fetchMR();
    }, [flag]);


    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            {MRData.length > 0 ? (
                <FlatList
                    bounces={false}
                    data={MRData}
                    windowSize={20}
                    initialNumToRender={5}
                    keyExtractor={(_item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <MatchResultSummaryComponent
                            match={item}
                            articles={mRArticles}
                            overs={mROversData}
                            index={index}
                            navigation={navigation}
                            callBackFetch={() => fetchBbBDataInnings(inningId, overNumber)}
                        />
                    )}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <LottieView
                        source={ActivityLoader}
                        autoPlay
                        loop
                        style={{
                            width: 280,
                            height: 280,
                        }}
                        colorFilters={[
                            {
                                keypath: 'Shape Layer 2',
                                color: '#c22026',
                            },
                        ]}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
export default MrSummary;
const styles = StyleSheet.create({});
