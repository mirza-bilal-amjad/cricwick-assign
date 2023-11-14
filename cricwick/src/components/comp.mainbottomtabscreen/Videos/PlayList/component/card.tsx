import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {fetchGenericHome} from "../../../../../utils/serverfetch/fetchBackend";
import FastImage from "react-native-fast-image";
import {useTheme} from "../../../../../hooks";

const Card = ({item, listID, seriesID, label, navigation}: any) => {

	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const returnApiGHome = (pageNumber: number, listID: string | number, playListID: string | number) => {
		return `https://cwscoring.cricwick.net/api/v4/video_lists/play_video_list?list_id=${listID}&type=play_list&play_list_id=${playListID}&page=${pageNumber}&msisdn=00000000000&app_name=CricwickWeb`

	}

	return (
		<View>{
			item.data && item.data.map(
				(inItem: any, index: number) => {

					const [featuredContentData, setFeaturedContentData] = useState([])

					const fetch = async () => {

						fetchGenericHome(returnApiGHome(1, listID, inItem.id)).then(
							(r) => {
								if (r) {
									setFeaturedContentData(
										(prevState: any) => {

											const {resp} = r;
											const {play_list_items} = resp;
											if (prevState.includes(play_list_items)) {
												return prevState;
											} else {
												return [...prevState, ...play_list_items];
											}
										}
									)
								}
							}
						)
					};
					fetch();
					return (
						<TouchableOpacity

							key={index} style={{
							width: 250,
							// height: 200,
							elevation: 3,
							// alignItems: 'center',
							backgroundColor: colors.card,
							borderRadius: 20,
							overflow: 'hidden',
							position: 'relative',

						}}>
							<View style={{
								height: '65%',
								position: 'absolute',
								width: '30%',
								backgroundColor: 'black',
								opacity: .5,
								zIndex: 10,

							}}></View>
							<View style={{
								height: '65%',
								position: 'absolute',
								width: '30%',
								zIndex: 11,
								justifyContent: 'flex-end',

							}}>
								<GoogleIcon name={'video-library'} size={25} color={'white'} style={{
									marginHorizontal: 7,
									bottom: 10,
								}}/>
								<Text style={{
									color: 'white',
									marginHorizontal: 10,
									fontSize: 18,
									bottom: 10,

								}}>{inItem.total_videos}</Text>
								<Text style={{
									color: 'white',
									marginHorizontal: 10,
									fontSize: 11.5,
									bottom: 10,

								}}>Videos</Text>
							</View>
							<FastImage source={{uri: inItem.thumb}} style={{
								width: '100%',
								aspectRatio: 16 / 9,

							}}/>
							<View style={{
								marginTop: 5,
								marginBottom: 7,

							}}>
								<Text style={{
									color: colors.text,
									marginHorizontal: 10,
									marginVertical: 5,
									fontSize: 14.5,
									fontWeight: 'bold'
								}}>{inItem.title.length > 27 ? inItem.title.slice(0, 27) + '...' : inItem.title}</Text>
								<Text style={{
									color: Colors.textGray200,
									marginHorizontal: 10,
									fontSize: 10.5,

								}}>{inItem.description.length > 43 ? inItem.description.slice(0, 43) + '...' : inItem.description}</Text>
								<Text style={{
									color: Colors.textGray200,
									marginHorizontal: 10,
									fontSize: 10.5,
									marginVertical: 2.5
								}}>{new Date(inItem['top_list_item'].video['created_at']).toDateString()}</Text>
							</View>
						</TouchableOpacity>
					)
				}
			)}</View>
	)
};
export default Card
const styles = StyleSheet.create({})
