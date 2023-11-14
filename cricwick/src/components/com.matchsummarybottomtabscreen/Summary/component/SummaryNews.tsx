import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../hooks";

const SummaryNews = ({match, navigation}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View style={{

			borderBottomWidth: .2,
			borderBottomColor: Colors.textGray200

		}}>{
			match && match.map((inMatch: any, index: number) => {
				return (
					<TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('News', {
						newsID: inMatch.id
					})} key={index} style={{
						marginHorizontal: 20,
						marginVertical: 10,
						flexDirection: 'row',
						alignItems: 'center',

					}}>

						<View style={{
							height: 13,
							width: 13,
							backgroundColor: colors.text,
							borderRadius: 40,
						}}/>
						<View style={{
							marginHorizontal: 15,
							marginVertical: 5
						}}>
							<Text style={{fontSize: 15, color: colors.text}}>{inMatch.title}</Text>
						</View>
					</TouchableOpacity>
				)
			})
		}

		</View>
	);
}
export default SummaryNews
const styles = StyleSheet.create({})
