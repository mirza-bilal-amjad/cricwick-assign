import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import {NavigationContainer} from "@react-navigation/native";
import SideDrawerContent from "./SideDrawerContent";

import MainStack from "./MainStack";

const Drawer = createDrawerNavigator();
const RootNavigator = ({navigation}: any) => {
	const changeNavColor = async () => {
		changeNavigationBarColor('#f3f3f3', true, true);
	}
	useLayoutEffect(() => {
		changeNavColor().catch(e => console.log('e', e))
	}, []);
	return (
		<SafeAreaView style={{
			flex: 1
		}}>
			<StatusBar animated barStyle={'dark-content'} backgroundColor={'#f3f3f3'}/>

			<NavigationContainer>
				<Drawer.Navigator
					drawerContent={(props) => <SideDrawerContent {...props}/>}
					initialRouteName={'MainStack'}
					screenOptions={{
						drawerType: 'slide',
						swipeEnabled: false,
						unmountOnBlur: true,
						drawerStatusBarAnimation: 'slide',
						drawerStyle: {
							backgroundColor: 'white',
							padding: 0,
							width: 280
						},
						drawerItemStyle: {
							backgroundColor: "pink",
							margin: 0, padding: 0

						},
						drawerLabelStyle: {
							color: "red"

						}
					}}>
					<Drawer.Screen name={'MainStack'} component={MainStack} options={{
						headerShown: false,
					}}/>
				</Drawer.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}
export default RootNavigator

