import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import BottomTabNavigation from "../bottomtabnavigator/BottomTabNavigation";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import SeriesBottomTabNavigation from "../bottomtabnavigator/seriesBottomNavigator/SeriesBottomTabNavigation";
import SeriesInfoBottomNavigation
    from "../bottomtabnavigator/seriesBottomNavigator/SeriesInfoBottomNavigatior/SeriesInfoBottomNavigation";
import FeaturedContentGHome from "../../screens/home/FeaturedContent/FeaturedContentGHome";
import FeaturedContentVideos from "../../screens/home/FeaturedContent/FeaturedContentVideos";
import MatchResultBottomNavigation
    from "../bottomtabnavigator/MatchResult.BottomNavigation/MatchResult.BottomNavigation";
import Articles from "../../screens/Articles";
import News from "../../screens/News";
import SquadDetails
    from "../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/SingleSquadDetails/SquadDetails";
import SideNavigatorBar from "../side_bar_navigator/SideNavigatorBar";
import Blogs from "../../screens/Blogs";

const RootStackTab = createNativeStackNavigator();
const RootNavigator = () => {
    const changeNavColor = async () => {
        changeNavigationBarColor('#f3f3f3', true, true);
    }

    useEffect(() => {
        changeNavColor().catch(e => console.log('e', e))
    }, [])
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar animated barStyle={'dark-content'} backgroundColor={'#f3f3f3'}/>
            <NavigationContainer>
                <RootStackTab.Navigator initialRouteName={'SideNavigatorBar'}>
                    <RootStackTab.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} options={{
                        headerShown: false,
                    }}/>
                    <RootStackTab.Screen name={'SeriesBottomTabNavigation'} component={SeriesBottomTabNavigation}
                                   options={{
                                       headerShown: false
                                   }}/>
                    <RootStackTab.Screen name={'SeriesInfoBottomNavigation'} component={SeriesInfoBottomNavigation}
                                   options={{
                                       headerShown: false
                                   }}/>

                    <RootStackTab.Screen name={'MatchResultBottomNavigation'} component={MatchResultBottomNavigation}
                                   options={{
                                       headerShown: false,
                                   }}/>

                    <RootStackTab.Screen name={'SideNavigatorBar'} component={SideNavigatorBar}
                                         options={{
                                             headerShown: false
                                         }}/>


                    <RootStackTab.Screen name={'FeaturedContentGHome'} component={FeaturedContentGHome} options={{
                        headerShown: true,
                        headerTitle: 'Feature Content',
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: '#f3f3f3'},
                        headerShadowVisible: false

                    }}/>
                    <RootStackTab.Screen name={'FeaturedContentVideos'} component={FeaturedContentVideos} options={{
                        headerShown: true,
                        headerTitle: 'Feature Content',
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: '#f3f3f3'},
                        headerShadowVisible: false

                    }}/>


                    <RootStackTab.Screen name={'Articles'}
                                         component={Articles}
                                         options={{
                                             headerShown: true,
                                             headerTitleAlign: 'center',
                                             headerShadowVisible: false,
                                             headerTitleStyle: {fontWeight: 'bold'},
                                             headerStyle: {backgroundColor: '#f3f3f3'}
                                         }}/>
                    <RootStackTab.Screen name={'News'}
                                         component={News}
                                         options={{
                                             headerShown: false,
                                         }}/>
                    <RootStackTab.Screen name={'Blogs'}
                                         component={Blogs}
                                         options={{
                                             headerShown: true,
                                         }}/>
                    <RootStackTab.Screen name={'SquadDetails'}
                                         component={SquadDetails}
                                         options={{
                                             headerShown: true,
                                             headerTitleAlign: 'center',
                                             headerShadowVisible: false,
                                             headerTitleStyle: {fontWeight: 'bold'},
                                             headerStyle: {backgroundColor: '#f3f3f3'}
                                         }}/>


                </RootStackTab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
export default RootNavigator
const styles = StyleSheet.create({})
