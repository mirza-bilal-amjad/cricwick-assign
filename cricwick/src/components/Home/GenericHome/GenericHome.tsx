import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import {useRoute} from "@react-navigation/native";
import FeaturedContentGHome from "../../../screens/home/FeaturedContent/FeaturedContentGHome";
import FastImage from "react-native-fast-image";
import {useTheme} from "../../../hooks";

const GenericHome = ({item, route}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		item.data.map((inItem: any, index: number) => {
			const videoUri = inItem?.qualities;
			const image = inItem?.med_image;
			const title = inItem?.title;
			const poster = inItem?.thumb;
			const views = inItem?.views;
			const likes = inItem?.likes;
			const videoDuration = inItem?.duration;
			const videoDesc = inItem?.match_desc;
			return (
				<View key={index} style={[styles.itemContainer, {
					backgroundColor: colors.card,

				}]}>
					<View style={[styles.thumbnailView]}>
						<FastImage style={[styles.thumbnail]} source={{uri: image}}/>
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
							onPress={() => route.navigate('FeaturedContentGHome', {
								listId: 1,
								videoUri: videoUri,
								title: title,
								poster: poster,
								views: views,
								likes: likes,
								homePageItemType: 'generic-home'
							})}
						>
							<IonIcon name={'play-circle-outline'} size={40} color={'white'} style={{
								backgroundColor: 'rgba(127,127,127,.5)',
								borderRadius: 50,
							}}/>
						</TouchableOpacity>
					</View>
					<View style={{
						width: '100%'
					}}>
						<Text style={[styles.title, {
							paddingHorizontal: 10,
							color: colors.text,
						}]}>
							{item.title}
						</Text>
						<Text style={{
							fontSize: 13.8,
							fontWeight: '400',
							color: colors.text,
							paddingHorizontal: 10,
							// marginLeft: 7,
							marginVertical: 5,
						}}>
							{videoDesc}
						</Text>
					</View>
				</View>
			)
		})

	)
};
export default GenericHome
const styles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 10,
		// borderWidth: 1,
		overflow: 'hidden',
		// elevation: 4,
	},
	thumbnailView: {
		width: '100%',
		alignItems: 'center',
	},
	thumbnail: {
		width: '100%',
		aspectRatio: 16 / 9
		// borderRadius: 14
	},
	title: {
		fontSize: 12.5,
		color: 'black',
		marginTop: 10,
	},
})
