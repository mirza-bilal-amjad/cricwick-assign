import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const VideoContainerVertical = ({item, route}: any) => {
	const renderItem = useMemo(() => {
		return (({item}: any) => {
				item = item[0];
				const videoUri = item?.qualities;
				const image = item?.thumb;
				const title = item?.title;
				const poster = item?.thumb;
				const views = item?.views;
				const likes = item?.likes;
				const videoDuration = item?.duration;
				const videoDesc = item?.match_desc?.length > 65 ? item?.match_desc.substring(0, 65) + '...' : item?.match_desc;

				return (
					<View style={styles.imageContainer}>
						<View style={styles.imageWrapper}>
							<Image
								source={{uri: image}}
								style={styles.image}
							/>
							<TouchableOpacity
								style={{
									position: 'absolute',
									width: '100%',
									height: '100%',
									zIndex: 10,
									alignItems: 'center',
									justifyContent: 'center',
								}}
								activeOpacity={.7}
								onPress={() => route.navigate('FeaturedContentVideos', {
									videoUri: videoUri,
									title: title,
									poster: poster,
									views: views,
									likes: likes,
									homePageItemType: 'videos-home'
								})}
							>
								<IonIcon name={'play-circle-outline'} size={40} color={'white'} style={{
									backgroundColor: 'rgba(127,127,127,.5)',
									borderRadius: 50,
								}}/>
							</TouchableOpacity>
						</View>
						<LinearGradient colors={[
							'transparent',
							'rgba(0,0,0,0.1)',
							'rgba(0,0,0,0.3)',
							'rgba(0,0,0,0.9)',
						]} style={{
							width: '100%',
							aspectRatio: 16 / 9,
							paddingHorizontal: 10,
							paddingVertical: 7,
							position: 'absolute',
							flexDirection: 'column',
							justifyContent: 'flex-end',
						}}>
							<Text style={{
								color: 'white',
								paddingVertical: 1,
								fontSize: 12.5,
								fontWeight: '500'
							}}>
								{title}
							</Text>
							<Text style={{
								color: 'white',
								fontSize: 11.4,
								paddingVertical: 2,

							}}>
								{videoDesc}
							</Text>
						</LinearGradient>
					</View>
				);
			}
		);
	}, [])

	return renderItem({item});
};

export default VideoContainerVertical

const styles = StyleSheet.create({
	imageContainer: {
		marginHorizontal: 10,
		flexDirection: 'column',

	},
	imageWrapper: {},
	image: {

		// borderRadius: 15,
		aspectRatio: 16 / 9,
	},
	flatListContent: {
		flexDirection: 'row',

	},
});
