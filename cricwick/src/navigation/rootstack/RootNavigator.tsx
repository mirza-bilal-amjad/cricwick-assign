import {SafeAreaView, StatusBar} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import {NavigationContainer} from "@react-navigation/native";
import SideDrawerContent from "./SideDrawerContent";

import MainStack from "./MainStack";
import {useTheme} from "../../hooks";

const Drawer = createDrawerNavigator();
const RootNavigator = ({navigation}: any) => {
	const {Layout, darkMode, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;

	const changeNavColor = async () => {
		changeNavigationBarColor(colors.background, true, true);
	}
	useLayoutEffect(() => {
		changeNavColor().catch(e => console.log('e', e))
	}, [darkMode]);
	return (
		<SafeAreaView style={{
			flex: 1
		}}>
			<StatusBar animated barStyle={darkMode ? 'light-content' : 'dark-content'}
			           backgroundColor={colors.background}/>

			<NavigationContainer>
				<Drawer.Navigator
					drawerContent={(props) => <SideDrawerContent  {...props}/>}
					initialRouteName={'MainStack'}
					screenOptions={{
						drawerType: 'front',
						// drawerType: 'slide',
						swipeEnabled: false,
						unmountOnBlur: true,
						drawerStatusBarAnimation: 'slide',
						drawerStyle: {
							width: 280
						},
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

