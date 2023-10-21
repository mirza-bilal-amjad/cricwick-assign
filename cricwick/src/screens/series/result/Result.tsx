import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import SeriesScreenComponent from "../../../components/Series/SeriesScreenComponent";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader, BallLoaderAnimation, Loader} from "../../../assets";

const Result = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [resultData, setResultData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const returnApi = (pageNumber: number) => {
        return `https://cwscoring.cricwick.net/api/v2/series/?page=${pageNumber}&per_page=10&app_name=CricwickWeb`;
    }
    const fetchRes = async () => {
        setRefreshing(true)
        await fetchSeries(returnApi(pageNumber)).then((r) => {
            if (r) {
                setResultData(
                    (prevState: any): any => {
                        if (!prevState.includes(r)) {
                            setRefreshing(false)
                            setPageNumber(prevState1 => prevState1 + 1);
                            return [...prevState, ...r.recent_series];
                        } else {
                            setRefreshing(false)
                            setPageNumber(prevState1 => prevState1 + 1);
                            return prevState;
                        }
                    }
                )
            }
        });
    };
    useEffect(() => {
        fetchRes()
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
                {resultData.length > 9 && refreshing && <LottieView
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

            {resultData.length === 0 ? <View style={{
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
                :
                <SeriesScreenComponent data={resultData} screenType={'result'} callBackFunc={fetchRes}/>
            }
        </SafeAreaView>
    )
}
export default Result
const styles = StyleSheet.create({})
