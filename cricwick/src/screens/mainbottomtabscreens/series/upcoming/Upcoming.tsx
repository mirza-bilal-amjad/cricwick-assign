import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {fetchSeries} from "../../../../utils/serverfetch/fetchBackend";
import SeriesScreenComponent from "../../../../components/Series/SeriesScreenComponent";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../../../assets";
import {useTheme} from "../../../../hooks";

const Upcoming = () => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const [pageNumber, setPageNumber] = useState(1);
	const [upComingData, setUpComingData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const returnApi = (pageNumber: number) => {
		return `https://cwscoring.cricwick.net/api/v2/series/?page=${pageNumber}&per_page=10&app_name=CricwickWeb`;
	}
	const fetchUC = async () => {
		setRefreshing(true)
		await fetchSeries(returnApi(pageNumber)).then((r) => {
			if (r) {
				setUpComingData(
					(prevState: any): any => {
						if (!prevState.includes(r)) {
							setPageNumber(prevState1 => prevState1 + 1);
							setRefreshing(false);
							return [...prevState, ...r?.upcoming_series];
						} else {
							setPageNumber(prevState1 => prevState1 + 1);
							setRefreshing(false);
							return prevState;
						}
					}
				)
			}
		});
	};
	useEffect(() => {
		fetchUC()
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
				{upComingData?.length > 9 && refreshing && <LottieView
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
						},
						{
							keypath: "Shape Layer 1",
							color: "white"
						}

					]}
                />}
			</View>

			{upComingData?.length === 0 ? <View style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<LottieView source={ActivityLoader} autoPlay loop
					            style={{
						            width: 280, height: 280
					            }}
					            colorFilters={[
						            {
							            keypath: "Shape Layer 2",
							            color: "#c22026"
						            },
						            {
							            keypath: "Shape Layer 1",
							            color: "white"
						            }

					            ]}
					/>
				</View>
				:
				<SeriesScreenComponent
					data={upComingData}
					screenType={'upcoming'}
					callBackFunc={fetchUC}
				/>
			}
		</SafeAreaView>
	)
}
export default Upcoming
const styles = StyleSheet.create({})
