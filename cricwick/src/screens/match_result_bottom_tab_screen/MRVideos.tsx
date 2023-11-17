import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../hooks";

const MrVideos = () => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			flex: 1,
			backgroundColor: colors.background
		}}>
			<Text style={{
				color: colors.text
			}}>MrVideos</Text>
		</View>
	)
}
export default MrVideos
const styles = StyleSheet.create({})
