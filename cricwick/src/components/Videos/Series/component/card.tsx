import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image";
import {useTheme} from "../../../../hooks";

const Card = ({item, listID, seriesID, label, navigation}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<View>{
			item.data && item.data.map(
				(inItem: any, index: number) => {
					return (
						<TouchableOpacity

							key={index}
							style={{
								width: 250,
								elevation: 3,
								backgroundColor: colors.card,
								borderRadius: 20,
								overflow: 'hidden',
								position: 'relative',


							}}
							activeOpacity={0.8}
						>
							<View style={{
								height: '65.5%',
								aspectRatio: 16 / 9,
								justifyContent: 'center',
								alignItems: 'center',
								position: 'absolute',
								zIndex: 14

							}}>
								<IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
									backgroundColor: 'rgba(0,0,0,.5)',
									borderRadius: 50,
								}}/>
							</View>
							<FastImage source={{uri: item.data[0].thumb}} style={{
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
								}}>{inItem?.title?.length > 27 ? inItem?.title?.slice(0, 27) + '...' : inItem?.title}</Text>
								<Text style={{
									color: Colors.textGray200,
									marginHorizontal: 10,
									fontSize: 10.5,

								}}>{inItem?.description?.length > 43 ? inItem?.description?.slice(0, 43) + '...' : inItem?.description}</Text>
								<Text style={{
									color: Colors.textGray200,
									marginHorizontal: 10,
									fontSize: 10.5,
									marginVertical: 2.5
								}}>{new Date(inItem?.created_at)?.toDateString()}</Text>
							</View>
						</TouchableOpacity>
					)

				}
			)
		}</View>
	);
};
export default Card
const styles = StyleSheet.create({})
