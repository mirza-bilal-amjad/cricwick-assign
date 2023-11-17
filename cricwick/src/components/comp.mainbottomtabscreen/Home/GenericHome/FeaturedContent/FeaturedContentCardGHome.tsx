import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo} from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import {convertSecondToMinutes} from "../../../../../utils/method";
import {useTheme} from "../../../../../hooks";

const FeaturedContentCardGHome = ({item, setTheVideoUri, setTheTitle, setThePoster, setTheViews, setTheLikes}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const videoUri = item?.video?.qualities;
	const title = item?.video?.title;
	const poster = item?.video?.thumb;
	const views = item.video.views > 1000 ? (item.video.views / 1000).toFixed(0) + 'k' : item.video.views;
	const likes = item?.video?.likes;
	const videoDuration = convertSecondToMinutes(item?.video?.duration)
	const videoCreationDate = moment(item?.video?.created_at).format('DD MMM, YYYY')

	const handleVideoCont = (item: any) => {
		setTheVideoUri(videoUri);
		setTheTitle(title);
		setThePoster(poster);
		setTheViews(views);
		setTheLikes(likes);
	}
	return (
		<TouchableOpacity activeOpacity={.8} onPress={() => handleVideoCont(item)}>
			<View style={{

				marginHorizontal: 10,
				flexDirection: 'row',
				borderRadius: 9,
				overflow: 'hidden',
				backgroundColor: colors.card,
				elevation: 2,
				height: 90,


			}}>
				<View style={{
					alignItems: 'center'
				}}>
					<Image source={{uri: poster}} style={{width: 160, aspectRatio: 16 / 9}}/>
					<View style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						paddingHorizontal: 5,
						paddingVertical: 2,
						backgroundColor: 'rgba(0,0,0,0.75)',
						zIndex: 10,
						// borderTopLeftRadius: 5,


					}}>
						<Text style={{
							color: colors.text,
							fontSize: 12
						}}>{videoDuration}</Text>
					</View>
				</View>
				<View style={{
					justifyContent: 'space-between',
					paddingVertical: 10,
					paddingHorizontal: 10
				}}>
					<View style={{
						width: 215,

					}}><Text style={{color: colors.text, width: '100%'}}>
						{title}
					</Text></View>
					<View style={{
						width: 100,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>

						<View style={{
							flexDirection: 'row',
							alignItems: 'center'
						}}>
							<GoogleIcon name={'visibility'} size={15} color={Colors.textGray200}/>
							<Text
								style={{
									color: Colors.textGray200,
									marginHorizontal: 2.5,
									fontSize: 12

								}}>{views}</Text>
						</View>
						<View style={{
							width: 3,
							height: 3,
							borderRadius: 20,
							backgroundColor: Colors.textGray200,
							marginHorizontal: 3
						}}></View>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center'
						}}>
							<Text
								style={{
									color: Colors.textGray200,
									marginHorizontal: 2.5,
									fontSize: 12

								}}>{videoCreationDate}</Text>
						</View>
					</View>
				</View>

			</View>
		</TouchableOpacity>
	);
};
export default memo(FeaturedContentCardGHome)
const styles = StyleSheet.create({})
