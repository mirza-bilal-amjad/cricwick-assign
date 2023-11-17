import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo} from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import {convertSecondToMinutes} from "../../../../../utils/method";
import {useTheme} from "../../../../../hooks";

const FeaturedContentCardVideo = ({item, setTheVideoUri, setTheTitle, setThePoster, setTheViews, setTheLikes}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const handleVideoCont = (item: any) => {

		setTheVideoUri(item?.video?.qualities);
		setTheTitle(item?.video?.title);
		setThePoster(item?.video?.thumb);
		setTheViews(item?.video?.views);
		setTheLikes(item?.video?.likes);
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
					alignItems: 'center',
					position: 'relative',

				}}>
					<Image source={{uri: item.video.thumb}} style={{width: 160, aspectRatio: 16 / 9,}}/>
					<View style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						paddingHorizontal: 5,
						paddingVertical: 2,
						backgroundColor: 'rgba(0,0,0,0.85)',
						zIndex: 10,


					}}>
						<Text style={{
							color: colors.text,
							fontSize: 12
						}}>{convertSecondToMinutes(item.video.duration)}</Text>
					</View>
				</View>
				<View style={{
					justifyContent: 'space-between',
					padding: 10
				}}>
					<View style={{
						width: 215,

					}}><Text style={{color: colors.text, width: '100%'}}>
						{item.video.title}
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
								}}>{item.video.views > 1000 ? (item.video.views / 1000).toFixed(0) + 'k' : item.video.views}</Text>
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

								}}>{moment(item.video.created_at).format('DD MMM, YYYY')}</Text>
						</View>
					</View>
				</View>

			</View>
		</TouchableOpacity>
	);
}
export default memo(FeaturedContentCardVideo)
const styles = StyleSheet.create({})
