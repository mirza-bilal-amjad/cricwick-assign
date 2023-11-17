import {FlatList, SafeAreaView, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {fetchMatchResult} from "../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../assets";
import {useNavigation} from "@react-navigation/native";
import MatchResultsCard from "../../components/SideBar.Component/SideBar.MatchResults/MatchResultsCard";

const MatchResults = () => {
    const navigation = useNavigation();
    const [matchResultData, setMatchResultData] = useState([])
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);

    const fetchit = async () => {
        setRefreshing(true)
        fetchMatchResult(pageCounter).then((r: any) => {
            return setMatchResultData((prevState: any[]): any => {

                if (r?.matches.length !== 0) {
                    setPageCounter(preValue => preValue + 1);
                    setRefreshing(false);
                    return [...prevState, ...r?.matches];
                } else {
                    setRefreshing(false);
                    return prevState;
                }
            })
        })
    }
    useEffect(() => {
        fetchit();
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                height: 2,
            }}>
                {matchResultData.length !== 0 && refreshing && <LottieView
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

            {matchResultData.length === 0 && matchResultData.length === 0 ? <View style={{
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
                </View> :
                <FlatList
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={1000}
                    windowSize={60}
                    updateCellsBatchingPeriod={50}
                    initialNumToRender={50}
                    getItemLayout={
                        (data, index) => (
                            {length: 250, offset: 250 * index, index}
                        )
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={!refreshing ? fetchit : () => console.log('no fetch done')}
                    keyExtractor={(item, index) => index.toString()}
                    style={{
                        flex: 1,
                    }}
                    ItemSeparatorComponent={
                        () => <View style={{
                            height: 1,
                        }}/>
                    }
                    data={matchResultData}
                    contentContainerStyle={{
                        marginHorizontal: 2
                    }} renderItem={

                    ({item, index}: any) => (
                        <MatchResultsCard item={item} index={index}/>
                    )

                }/>}
        </SafeAreaView>
    )
}
export default MatchResults
