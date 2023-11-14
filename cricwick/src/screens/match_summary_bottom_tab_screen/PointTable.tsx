import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {fetchSchedule} from "../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {BallLoaderAnimation, Loader} from "../../assets";
import PointTableCard from "../../components/com.matchsummarybottomtabscreen/PointTable/PointTableCard";
import {Row, Table} from 'react-native-table-component';
import {useTheme} from "../../hooks";


const PointTable = ({route}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const {matchId} = route.params;
	const [pageNumber, setPageNumber] = useState(1);
	const [scheduleData, setScheduleData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const returnApi = (pageNumber: number, matchId: number | string) => {
		return `https://cwscoring.cricwick.net/api/series_pool_points_table/${matchId}`;
	}
	const fetchSum = async () => {
		setRefreshing(true)
		await fetchSchedule(returnApi(pageNumber, matchId)).then((r) => {
			if (r) {
				setScheduleData(
					(prevState: any): any => {
						if (!prevState.includes(r?.data[0]?.points_table)) {
							setRefreshing(false)
							return [...r?.data[0]?.points_table];
						} else {
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
							}, {
								keypath: "Shape Layer 1",
								color: "#fff"
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
				: <View style={{
					overflow: 'scroll'
				}}>
					<View style={{
						backgroundColor: '#c22026',
						padding: 10,
						marginVertical: 1
					}}>
						<Text style={{color: 'white', fontWeight: '500'}}>Points Table</Text>
					</View>
					<View style={{}}>
						<Table borderStyle={{}}>
							<Row textStyle={{color: 'white', padding: 5}} style={{
								backgroundColor: '#c22026',
								paddingVertical: 7,
								paddingHorizontal: 3

							}} data={['Team', 'Mat', 'Won', 'Lost', 'Tied', 'NR', 'Pts', 'NRR']}
							     flexArr={[3, 1, 1, 1, 1, 1, 1, 1.3]}></Row>
						</Table>
					</View>
					<FlatList
						data={scheduleData}
						initialNumToRender={10}
						maxToRenderPerBatch={10}
						showsVerticalScrollIndicator={false}
						windowSize={15}
						removeClippedSubviews={true}
						getItemLayout={(data, index) => (
							{length: 70, offset: 70 * index, index}
						)}

						renderItem={({item, index}: any) => <PointTableCard match={item} index={index}/>}
						// ItemSeparatorComponent={() => <View style={{borderBottomWidth: 0.2, borderColor: 'black'}}/>}
					/>
				</View>
			}
		</SafeAreaView>
	)
};
export default PointTable
const styles = StyleSheet.create({})
