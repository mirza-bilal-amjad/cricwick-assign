import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import {HomeArticleComponent, MatchesComponent, HomeNewsComponent, VideoComponent} from "../../index";
import IonIcon from "react-native-vector-icons/Ionicons";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {getNumOfCharacters} from "../../../utils/method";
// @ts-ignore
import CricWickFantasy from '../../../assets/Images/cwd.png'
// @ts-ignore
import HomeSeriesIcon from '../../../assets/Images/series_icon.png'
// @ts-ignore
import VideoIcon from '../../../assets/Images/video_icon.png'
// @ts-ignore
import PointTableIcon from '../../../assets/Images/point_table.png'
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../../hooks";

const Series = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const navigation = useNavigation();
	const [componentWidth, setComponentWidth] = React.useState(0);
	const onLayout = (event: any) => {
		const {width} = event.nativeEvent.layout;
		setComponentWidth(width);
	};
	return (
		<View style={
			[styles.itemContainer, {
				// borderRadius: 15,
				backgroundColor: colors.card,
			}]
		}>
			<View>
				<TouchableOpacity
					activeOpacity={0.6}
					style={{
						borderBottomWidth: .2,
						borderColor: Colors.textGray200,
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
						paddingRight: 10,
					}}
					//@ts-ignore
					onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
						screen: 'Summary',
						title: item.series_obj.title,
						matchId: item.series_obj.id,
						is_videos_enabled: item.series_obj.is_videos_enabled,
						has_points_table: item.series_obj.has_points_table,

					})}
				>
					<Text style={[{
						fontSize: 18,
						color: colors.text,
						paddingHorizontal: 10,
						fontWeight: 'bold',
						marginVertical: 10,
					}]}>
						{item.title}
					</Text>
					<GoogleIcon name={'arrow-forward-ios'} size={20} color={colors.text}/>
				</TouchableOpacity>
				<View>
					{
						item.data.map(
							(item: any) => {
								const lent = item.data.length;
								switch (item.type) {
									case 'news':
										return (
											item.data && <FlatList
                                                data={item.data} key={item.type} bounces
                                                style={{
													borderTopWidth: .2,
													borderColor: Colors.textGray200,
												}}
                                                renderItem={useMemo(() => {
													return ({item, index}: any) => (
														<HomeNewsComponent index={index} item={item} dataLength={lent}/>
													)
												}, [lent])}/>
										)
									case 'matches':
										return (
											item.data && <FlatList
                                                data={item.data} key={item.type}
                                                contentContainerStyle={{
													flexDirection: 'column',
												}}
                                                style={{
													borderTopWidth: .2,
													borderColor: Colors.textGray200,
												}}
                                                ItemSeparatorComponent={() => (
													<View style={{
														borderTopWidth: .2,
														borderColor: Colors.textGray200,
														height: 0
													}}></View>
												)}
                                                renderItem={useMemo(() => {
													return ({item}: any) => (
														<MatchesComponent match={item}/>
													)
												}, [])}/>
										);
									case 'article':
										return (
											item.data && <FlatList
                                                data={item.data} key={item.type}
                                                style={{
													// borderBottomWidth: .2,
													borderTopWidth: .2,
													borderColor: Colors.textGray200,
												}}
                                                contentContainerStyle={{
													flexDirection: 'column',
												}}
                                                renderItem={useMemo(() => {
													return ({item}: any) => (
														<HomeArticleComponent item={item}/>
													)
												}, [])}/>
										)
									case 'videos':
										return (
											item.data && <View key={item.type}>
												{item.data[0] && <View style={[styles.itemContainer, {
													marginVertical: 10,
												}]}>
                                                    <View style={[styles.thumbnailView]}>
                                                        <Image style={[{
															width: '100%',
														}, {height: 220}]}
                                                               source={{uri: item.data[0].thumb}}/>
                                                        <TouchableOpacity
                                                            style={{
																position: 'absolute',
																width: '100%',
																zIndex: 10,
																height: '100%',
																alignItems: 'center',
																justifyContent: 'center',
															}}
                                                            activeOpacity={.7}
                                                            //@ts-ignore
                                                            onPress={() => navigation.navigate('FeaturedContentVideos', {
																videoUri: item.data[0].qualities,
																title: item.data[0].title,
																poster: item.data[0].thumb,
																views: item.data[0].views,
																likes: item.data[0].likes,
																homePageItemType: 'videos-home'
															})}
                                                        >
                                                            <IonIcon name={'play-circle-outline'} size={40}
                                                                     color={'white'} style={{
																backgroundColor: 'rgba(127,127,127,.5)',
																borderRadius: 50,
															}}/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
														width: '100%'
													}}>
                                                        <Text onLayout={onLayout} style={[styles.title, {
															paddingHorizontal: 10,
															fontWeight: '500'
														}]}>
															{item.data[0].title.slice(0, getNumOfCharacters(componentWidth)) + '...'}
                                                        </Text>
                                                        <Text style={[styles.title2, {
															paddingHorizontal: 10,
														}]}>
															{item.data[0].match_obj.title} - {item.data[0].match_obj.team_1} vs {item.data[0].match_obj.team_2}
                                                        </Text>
                                                    </View>
                                                </View>}
                                                <FlatList
                                                    data={item.data}
                                                    horizontal={true}
                                                    keyExtractor={(item: any, index: number) => index.toString()}
                                                    style={{
														// borderBottomWidth: .2,
														flexDirection: 'row',

														borderTopWidth: .2,
														borderColor: Colors.textGray200,
													}}
                                                    renderItem={useMemo(() => {
														return ({item, index}: any) => (
															item && index > 0 && <VideoComponent item={item}/>
														)
													}, [])}/>
                                            </View>
										);
									default:
										return null;
								}
							}
						)
					}


				</View>
			</View>
			{
				item?.series_obj &&
                <View style={{
					flexDirection: 'row',
					paddingVertical: 15,
					borderTopWidth: 0.2,
					borderColor: Colors.textGray200,
					justifyContent: 'space-around',
					alignItems: 'center'
				}}>
					{
						//@ts-ignore
						<TouchableOpacity onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
							screen: 'Summary',
							title: item?.series_obj?.title,
							matchId: item?.series_obj?.id,
							is_videos_enabled: item?.series_obj?.is_videos_enabled,
							has_points_table: item?.series_obj?.has_points_table
						})}
						                  style={{
							                  flexDirection: 'row',
							                  alignItems: 'center'

						                  }}
						>
							<Image source={HomeSeriesIcon}
							       style={{
								       width: 20,
								       height: 20,
								       resizeMode: 'contain',
								       tintColor: Colors.textGray200,
								       marginHorizontal: 5,
							       }}/>
							<Text style={{
								fontSize: 13.5,
								color: Colors.textGray200,
								fontWeight: '600'
							}}>Series Home</Text>
						</TouchableOpacity>
					}
					{item['series_obj'].has_points_table && item['series_obj'].is_videos_enabled && <TouchableOpacity
                        style={{
							flexDirection: 'row',
							alignItems: 'center'

						}}
						//@ts-ignore

                        onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
							screen: 'Videos',
							title: item?.series_obj?.title,
							matchId: item?.series_obj?.id,
							is_videos_enabled: item?.series_obj?.is_videos_enabled,
							has_points_table: item?.series_obj?.has_points_table

						})}
                    >
                        <Image source={VideoIcon}
                               style={{
							       width: 20,
							       height: 15,
							       resizeMode: 'contain',
							       tintColor: Colors.textGray200,
							       marginHorizontal: 5,
						       }}/>
                        <Text style={{
							fontSize: 13.5,
							color: Colors.textGray200,
							fontWeight: '600'
						}}>Videos</Text>
                    </TouchableOpacity>
					}{item['series_obj'].has_points_table && !item['series_obj'].is_videos_enabled && <TouchableOpacity
                    style={{
						flexDirection: 'row',
						alignItems: 'center'

					}}

					//@ts-ignore
                    onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
						screen: 'PointTable',
						title: item.series_obj.title,
						matchId: item.series_obj.id,
						is_videos_enabled: item.series_obj.is_videos_enabled,
						has_points_table: item.series_obj.has_points_table

					})}
                >
                    <Image source={PointTableIcon}
                           style={{
						       width: 20,
						       height: 15,
						       resizeMode: 'contain',
						       marginHorizontal: 3,
						       tintColor: Colors.textGray200,
					       }}
                    />
                    <Text style={{
						fontSize: 13.5,
						color: Colors.textGray200,
						fontWeight: '600'
					}}>Points Table</Text>
                </TouchableOpacity>
				}

					{item['series_obj'].fantasy_gm_allowed && <TouchableOpacity
                        style={{
							flexDirection: 'row',
							alignItems: 'center'
						}}
                    >
                        <Image source={CricWickFantasy}
                               style={{
							       width: 20,
							       height: 20,
							       marginHorizontal: 5,
							       tintColor: Colors.textGray200
						       }}/>
                        <Text style={{
							fontSize: 13.5,
							color: Colors.textGray200,
							fontWeight: '600'
						}}>Fantasy</Text>
                    </TouchableOpacity>
					}
                </View>}
		</View>
	);
}
export default Series
const styles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 10,
		overflow: 'hidden',
	},
	thumbnailView: {
		width: '100%',
		alignItems: 'center',
	},
	thumbnail: {
		width: '100%',
		// borderRadius: 14
	},
	title: {
		fontSize: 12.5,
		color: 'black',
		marginTop: 10,
	},
	title2: {
		fontSize: 12.5,
		color: 'black',
		marginTop: 2,
	},
})
