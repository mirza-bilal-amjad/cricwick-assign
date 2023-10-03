import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigation from "../bottomtabnavigator/BottomTabNavigation";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const RootStackTab = createNativeStackNavigator();
const RootNavigator = () => {
    const changeNavColor = async () => {
        await changeNavigationBarColor('#FFEAE7', true, true);
    }

    useEffect(() => {
        changeNavColor().then(r => console.log('r', r)
        ).catch(e => console.log('e', e))
    }, [])
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar animated barStyle={'dark-content'} backgroundColor={'#FFEAE7'}/>
            <NavigationContainer>
                <RootStackTab.Navigator initialRouteName={'BottomTabNavigation'}>
                    <RootStackTab.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} options={{
                        headerShown: false
                    }}/>
                </RootStackTab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
export default RootNavigator
const styles = StyleSheet.create({})
