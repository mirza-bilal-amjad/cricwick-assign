import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FantasyScreen, HomeScreen, MoreScreen, SeriesScreen, VideosScreen} from "../../screens";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTabs.Navigator initialRouteName={'Home'} screenOptions={{
            tabBarStyle:{
                backgroundColor: '#FFEAE7',
            }
        }}>
            <BottomTabs.Screen name="Home" component={HomeScreen} options={{
                headerShown: true,
                headerStyle:{
                    backgroundColor: '#FFEAE7',
                }
            }}/>
            <BottomTabs.Screen name="Videos" component={VideosScreen} options={{
                headerShown: false,
            }}/>
            <BottomTabs.Screen name="Fantasy" component={FantasyScreen} options={{
                headerShown: false,
            }}/>
            <BottomTabs.Screen name="Series" component={SeriesScreen} options={{
                headerShown: false,
            }}/>
            <BottomTabs.Screen name="More" component={MoreScreen} options={{
                headerShown: false,
            }}/>
        </BottomTabs.Navigator>
    );
}
export default BottomTabNavigation
const styles = StyleSheet.create({})
