import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";
import {useTheme} from "../../../hooks";

const SquadDetails = ({route}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;

	const navigation = useNavigation()

	const [refreshing, setRefreshing] = useState(false);
	const {teamID, seriesID, teamName} = route.params;

	const [sqData, setSqData] = useState([]);
	const returnApi = (seriesID: number, teamID: number) => {
		return `https://cwscoring.cricwick.net/api/v4/series/${seriesID}/squad/${teamID}`
	};
	const fetchMR = async () => {

		setRefreshing(true);
		await fetchSeries(returnApi(route.params.seriesID, route.params.teamID))
		.then((r: any) => {
				setSqData((prevState: any[]): any => {
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
		navigation.setOptions({
			title: teamName,
		});
	}, []);
	const SquadDetailCard = ({item}: { item: any }) => {
		const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
		const {colors} = NavigationTheme;
		return (
			<View style={{
				flex: 1,
				flexDirection: 'row',
				marginVertical: 10,
				marginHorizontal: 10,
			}}>
				<View>
					<Image source={{uri: item?.full_display_picture_url}}
					       style={{width: 120, aspectRatio: 1, resizeMode: 'contain'}}/>
				</View>
				<View style={{
					marginLeft: 10,
					justifyContent: 'center'
				}}>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>{item?.name}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Age:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {item?.age}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Playing
						role:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {item?.playingrole}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Batting:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {item?.batting}</Text></View>
					<View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
						style={{color: colors.text, fontWeight: 'bold'}}>Bowling:</Text><Text
						style={{color: colors.text, fontWeight: '400'}}> {item?.bowling}</Text></View>
				</View>
			</View>
		)
	}
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: colors.background,
		}}>
			{sqData.length > 0 ?
				<FlatList data={sqData} showsVerticalScrollIndicator={false} renderItem={
					({item}: any) => <SquadDetailCard item={item}/>
				}/> :
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
					            }, {
						            keypath: "Shape Layer 1",
						            color: "#fff"
					            }]}
					/>
				</View>
			}


		</SafeAreaView>
	);
};
export default SquadDetails
const styles = StyleSheet.create({})
