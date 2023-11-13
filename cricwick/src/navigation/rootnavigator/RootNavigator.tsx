import {Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import IonIcon from "react-native-vector-icons/Ionicons";

import SeriesBottomTabNavigation from "../bottomtabnavigator/seriesBottomNavigator/SeriesBottomTabNavigation";
import BottomTabNavigation from "../bottomtabnavigator/BottomTabNavigation";
import MatchResultBottomNavigation
    from "../bottomtabnavigator/MatchResult.BottomNavigation/MatchResult.BottomNavigation";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
// @ts-ignore
import Fantasy_Bottom from '../../assets/Images/fantasy_bottom.png'
// @ts-ignore
import PSL from '../../assets/Images/psl_side.png'
// @ts-ignore
import SeriesIcon from '../../assets/Images/series_icon.png'
// @ts-ignore
import TeamSide from '../../assets/Images/team_side.png'
// @ts-ignore
import RankingSide from '../../assets/Images/ranking_side.png'
import Blogs from "../../screens/Blogs";
import ICCRankings from "../../screens/ICCRankings";
import DrawerArticle from "../../screens/DrawerArticle";
import PSL2023 from '../../screens/PSL2023';
import {BlogsScreen, DrawerArticleScreen, ICCRankingsScreen, MatchResultsScreen, PSLScreen} from "../../screens";
import SideNavigatorBar from "../side_bar_navigator/SideNavigatorBar";
import {NavigationContainer} from "@react-navigation/native";
import SideDrawerContent from "./SideDrawerContent";
import FeaturedContentGHome from '../../screens/home/FeaturedContent/FeaturedContentGHome';
import FeaturedContentVideos from '../../screens/home/FeaturedContent/FeaturedContentVideos';
import SquadDetails
    from '../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/SingleSquadDetails/SquadDetails';
import News from '../../screens/News';
import Articles from '../../screens/Articles';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SeriesInfoBottomNavigation
    from "../bottomtabnavigator/seriesBottomNavigator/SeriesInfoBottomNavigatior/SeriesInfoBottomNavigation";
import SideSwipeAbleArticles from "../../screens/SideSwipeAbleArticles";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainStack = ({navigation}: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'SeriesBottomTabNavigation'} component={SeriesBottomTabNavigation}
                          options={{
                              headerShown: false
                          }}/>
            <Stack.Screen name={'SeriesInfoBottomNavigation'} component={SeriesInfoBottomNavigation}
                          options={{
                              headerShown: false
                          }}/>

            <Stack.Screen name={'MatchResultBottomNavigation'} component={MatchResultBottomNavigation}
                          options={{
                              headerShown: false,
                          }}/>

            <Stack.Screen name={'Blogs'}
                          component={BlogsScreen}
                          options={{
                              headerShown: true,
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                              //add more options here
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),


                          }}/>

            <Stack.Screen name={'Rankings'}
                          component={ICCRankingsScreen}
                          options={{
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                              headerShown: true,
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                          }}/>

            <Stack.Screen name={'DrawerArticle'}
                          component={DrawerArticleScreen}
                          options={{
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                              headerShown: true,
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                          }}/>

            <Stack.Screen name={'PSL2023'}
                          component={PSLScreen}
                          options={{
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                              headerShown: true,
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                          }}/>

            <Stack.Screen name={'FeaturedContentGHome'} component={FeaturedContentGHome} options={{
                headerShown: true,
                headerTitle: 'Feature Content',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#f3f3f3'},
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                    </TouchableOpacity>
                ),

            }}/>

            <Stack.Screen name={'FeaturedContentVideos'} component={FeaturedContentVideos} options={{
                headerShown: true,
                headerTitle: 'Feature Content',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#f3f3f3'},
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                    </TouchableOpacity>
                ),

            }}/>

            <Stack.Screen name={'Articles'}
                          component={Articles}
                          options={{
                              headerShown: true,
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'}
                          }}/>
            <Stack.Screen name={'News'}
                          component={News}
                          options={{
                              headerShown: false,
                          }}/>


            <Stack.Screen name={'SquadDetails'}
                          component={SquadDetails}
                          options={{
                              headerShown: true,
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},

                          }}/>
            <Stack.Screen name={'DrawerArticles'}
                          component={DrawerArticle}
                          options={{
                              headerShown: true,

                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                          }}/>

            <Stack.Screen name={'MatchResultScreen'}
                          component={MatchResultsScreen}
                          options={{
                              headerShown: true,
                              headerTitle: 'Match Results',
                              headerTitleAlign: 'center',
                              headerShadowVisible: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                          }}/>

            <Stack.Screen name={'SideSwipeAbleArticles'}
                          component={SideSwipeAbleArticles}
                          options={{
                              headerShown: false,
                              headerTitleStyle: {fontWeight: 'bold'},
                              headerStyle: {backgroundColor: '#f3f3f3'},
                              headerLeft: () => (
                                  <TouchableOpacity
                                      onPress={() => navigation.goBack()}>
                                      <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
                                  </TouchableOpacity>
                              ),
                          }}/>

        </Stack.Navigator>
    )
}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",

    },
    navigator: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,

    },
    drawerItem: {
        fontSize: 15,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 10

    },
    iconAndName: {
        flex: 0.15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        maxHeight: 50,
        minHeight: 50


    }, iconAndName2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        maxHeight: 50

    },
    logoutCont: {

        marginHorizontal: 20,
        // marginVertical: 10,

    }
});

