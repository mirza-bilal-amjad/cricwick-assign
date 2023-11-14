import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../hooks";

const SummaryArticle = ({match, navigation}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{
			borderBottomWidth: 0.2,
			borderColor: Colors.textGray200,
			paddingVertical: 5
		}}>
			{
				match && match.map(
					(item: any, index: number) => {
						return (
							<TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Articles', {
								articleId: item.id
							})} key={index} style={{
								flexDirection: 'row',
								borderTopColor: 'black',
								borderColor: Colors.textGray200,
								paddingHorizontal: 10,
								marginVertical: 5,
							}}>
								<View style={{}}>
									<Image source={{uri: item.image}}
									       style={{
										       width: 140, height: 80, aspectRatio: 16 / 9,
										       // borderRadius: 10
									       }}/>
								</View>
								<View style={{
									width: '60%',
									margin: 10
								}}>
									<Text
										style={{color: colors.text, fontSize: 13.5, fontWeight: '600'}}>{item.title}</Text>
									<Text style={{
										color: Colors.textGray200,
										fontSize: 12.5,
										fontWeight: '600'
									}}>{item.by}</Text>
								</View>
							</TouchableOpacity>
						)
					}
				)
			}
		</View>
	);
}
export default SummaryArticle
const styles = StyleSheet.create({})
