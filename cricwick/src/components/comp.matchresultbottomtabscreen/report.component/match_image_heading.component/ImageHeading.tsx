import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../../../hooks";

const ImageHeading = ({item}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation();

	return (
		<View style={{}}>
			<View style={{
				position: 'relative',
			}}>
				<TouchableOpacity
					activeOpacity={.8} style={{
					position: 'absolute',
					zIndex: 20,
					top: 15,
					right: 15,

				}}
					onPress={
						() => navigation.goBack()
					}
				>
					<GoogleIcon name={'cancel'} size={25} color={Colors.textGray200}/>
				</TouchableOpacity>
				<Image source={{uri: item.full_image}} style={{
					width: Dimensions.get('screen').width,
					aspectRatio: 16 / 9,
					zIndex: -1000
				}}/>
			</View>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<View style={{
					width: '80%',
					marginHorizontal: 10,
					marginVertical: 5
				}}>
					<Text style={{fontSize: 18, fontWeight: 'bold', color: colors.text}}>{item.title}</Text>
					<Text style={{fontSize: 10, fontWeight: 'bold', color: Colors.textGray400}}>By {item.by}</Text>
				</View>
				<TouchableOpacity activeOpacity={.8} style={{
					marginHorizontal: 10
				}}>
					<GoogleIcon name={'share'} size={20} color={Colors.textGray400}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default ImageHeading
const styles = StyleSheet.create({})
