import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import LottieView from "lottie-react-native";
import {BallLoaderAnimation, Loader} from "../../assets";
import {fetchSchedule} from "../../utils/serverfetch/fetchBackend";
import ScheduleCard from "../../components/com.matchsummarybottomtabscreen/Schedule/ScheduleCard";
import {useTheme} from "../../hooks";

const Schedules = ({route}: any) => {

	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const {matchId} = route.params;
	const [pageNumber, setPageNumber] = useState(1);
	const [scheduleData, setScheduleData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const returnApi = (pageNumber: number, matchId: number | string) => {
		return `https://cwscoring.cricwick.net/api/v1/main/series_matches/${matchId}/${pageNumber}`;
	}
	const fetchSum = async () => {
		setRefreshing(true)
		await fetchSchedule(returnApi(pageNumber, matchId)).then((r) => {
			if (r) {
				setScheduleData(
					(prevState: any): any => {
						if (!prevState.includes(r.matches)) {
							setPageNumber(prevState1 => prevState1 + 1);
							setRefreshing(false)
							return [...prevState, ...r.matches];
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
			backgroundColor: colors.background,
			flex: 1,
			position: 'relative'
		}}>
			<View style={{
				height: 2
			}}>
				{scheduleData.length > 3
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

			{scheduleData.length === 0 ? <View style={{
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
					            }, {
						            keypath: "Shape Layer 1",
						            color: "#fff"
					            }]}
					/>
				</View>
				: <FlatList
					keyExtractor={(item, index) => index.toString()}
					data={scheduleData}
					initialNumToRender={10}
					maxToRenderPerBatch={10}
					windowSize={15}
					removeClippedSubviews={true}
					getItemLayout={(data, index) => (
						{length: 70, offset: 70 * index, index}
					)}
					onEndReachedThreshold={.5}
					onEndReached={fetchSum}
					renderItem={({item}: any) => <ScheduleCard match={item}/>}
					ItemSeparatorComponent={() => <View style={{height: 4}}/>}/>
			}
		</SafeAreaView>
	)
}
export default Schedules
const styles = StyleSheet.create({})
