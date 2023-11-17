import React, {memo} from "react";
import {Image, StyleSheet, View} from "react-native";
import {useTheme} from "../../../../hooks";


const NativeScreen = memo(function NativeScreen(props: { uri: any }) {

	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return <View style={[styles.thumbnailView, {
		backgroundColor: colors.card
	}]}>
		<Image style={[styles.thumbnail, {height: 120}]} source={{uri: props.uri}}/>
	</View>;
});
export default NativeScreen;


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
	},
	title: {
		fontSize: 12.5,
		color: 'black',
		marginTop: 10,
	},
});