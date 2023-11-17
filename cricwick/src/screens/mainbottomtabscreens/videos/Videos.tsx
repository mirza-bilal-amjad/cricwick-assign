import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {CarouselVideo, PlayListComponent, SeriesComponent} from "../../../components";
import {fetchVideos} from "../../../utils/serverfetch/fetchBackend";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../../assets";
import {useTheme} from "../../../hooks";

const Videos = () => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation()
	const [pageNumber, setPageNumber] = useState(0);
	const [refreshing, setRefreshing] = useState(true);
	const [videosData, setVideosData] = useState([])

	const returnApi = useCallback(
		(pageNumber: number) => {
			return `https://cwscoring.cricwick.net/api/v4/video_lists?page=${pageNumber + 1}&app_name=CricwickWeb`
		},
		[],
	);


	const fetch = useCallback(async () => {
		setRefreshing(true);

		await fetchVideos(returnApi(pageNumber)).then((r) => {
			if (r) {
				console.log('fetched', pageNumber)
				setVideosData((prevState: any): any => {
					if (prevState.includes(r)) {
						return prevState;
					} else {
						setPageNumber(prevState => prevState + 1)

						return [...prevState, ...r];
					}
				});
			}
		}).then(() => setRefreshing(false)).catch((error) => {
			console.error(error)
		});
	}, [pageNumber, returnApi]);

	const RenderItem = useCallback(({item}: any) => {

		switch (item.type) {
			case 'featured':
				return (
					<View>
						<CarouselVideo data={item['data']} listID={item.list_id ? item.list_id : null}
						               seriesID={item.series_id ? item.series_id : null} label={item.label}
						               navigation={navigation}/>
					</View>)
			case 'play_list':
				return (<View style={{
					height: 270
				}}>
					<Text style={{
						marginHorizontal: 11,
						color: colors.text,
						fontSize: 16,
						marginBottom: 5,
						fontWeight: '900'
					}}>{item.label.slice(0, 46)}</Text>
					<PlayListComponent data={item['data']} listID={item.list_id ? item.list_id : null}
					                   seriesID={item.series_id ? item.series_id : null} label={item.label}
					                   navigation={navigation}/>
				</View>)
			case 'series':
				return (<View style={{
					height: 270
				}}>
					<Text style={{
						marginHorizontal: 11,
						color: colors.text,
						fontSize: 16,
						marginBottom: 5,
						fontWeight: '900'
					}}>{item.label.slice(0, 46)}</Text>
					<SeriesComponent data={item['data']} listID={item.list_id ? item.list_id : null}
					                 seriesID={item.series_id ? item.series_id : null} label={item.label}
					                 navigation={navigation}/>
				</View>)
			default:
				return null
		}
	}, []);

	useEffect(() => {
		fetch()
	}, []);


	return (
		<SafeAreaView style={{
			backgroundColor: colors.background,
			flex: 1,
			position: 'relative',
		}}>
			<View style={{
				height: 2
			}}>
				{videosData.length > 3 && refreshing && <LottieView
                    source={Loader} autoPlay loop
                    style={{
						position: 'relative',
						height: 4,
						top: -2,
						zIndex: 10
					}}
                    colorFilters={[{
						keypath: "Shape Layer 2",
						color: "#c22026"
					}, {
						keypath: "Shape Layer 1",
						color: colors.text
					}]}
                />}
			</View>

			{videosData.length === 0 ? <View style={{
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
					            }, {
						            keypath: "Shape Layer 1",
						            color: colors.text
					            }]}
					/>
				</View>
				: <FlatList
					data={videosData}

					// initialNumToRender={20}
					// windowSize={10}
					// maxToRenderPerBatch={20}
					showsVerticalScrollIndicator={false}
					renderItem={RenderItem}
					onEndReachedThreshold={0.1}
					onEndReached={fetch}
					contentContainerStyle={{
						width: Dimensions.get('screen').width,
						paddingBottom: 10
					}}
					// removeClippedSubviews={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
				/>}
		</SafeAreaView>
	);
}
export default Videos
const styles = StyleSheet.create({})
