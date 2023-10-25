import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FantasyScreen, HomeScreen, MoreScreen, VideosScreen} from "../../screens";
import IonIcon from 'react-native-vector-icons/Ionicons'
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// import {useFonts} from 'react-native-google-fonts'
// @ts-ignore
import cricwickImage from '../../assets/Images/app_logo.png'
// @ts-ignore
import fantasyImage from '../../assets/Images/fantasy_bottom.png'
// @ts-ignore
import seriesBottomImage from '../../assets/Images/series_side.png'
import SeriesBottomTabNavigation from "./seriesBottomNavigator/SeriesBottomTabNavigation";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}: any) => {
    return (
        <BottomTabs.Navigator initialRouteName={'Home'}
                              detachInactiveScreens={true}
                              screenOptions={{
                                  tabBarStyle: {
                                      backgroundColor: '#f3f3f3',
                                      height: 60,
                                      padding: 0,
                                      justifyContent: 'center',
                                  },
                                  tabBarActiveTintColor: '#c22026',
                                  tabBarLabelStyle: {
                                      padding: 0,
                                      top: -2,
                                      fontSize: 12,
                                      fontWeight: 'bold',
                                  },
                                  tabBarIconStyle: {
                                      padding: 0,
                                      top: 5
                                  }

                              }}>
            <BottomTabs.Screen name="Home" component={HomeScreen} options={{
                headerShown: true,
                header: () => (
                    <View style={{
                        height: 50,
                        backgroundColor: '#f3f3f3',
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity onPress={
                            () => navigation.openDrawer()
                        } >
                            <IonIcon name="menu" size={35} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            {cricwickImage &&
                                <Image source={cricwickImage} style={{height: 27, aspectRatio: 7 / 2}}/>}
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#FFEAE7',
                },
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="home" size={size} color={color}/>
                ),
            }}/>
            <BottomTabs.Screen name="Videos" component={VideosScreen} options={{
                headerShown: true,
                header: () => (
                    <View style={{
                        height: 50,
                        backgroundColor: '#f3f3f3',
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity>
                            <GoogleIcon name="menu" size={35} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>Videos</Text>
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="videocam" size={size} color={color}/>
                ),
            }}/>
            <BottomTabs.Screen name="Fantasy" component={FantasyScreen} options={{
                headerShown: false,
                tabBarButton: () => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#c22026',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 13
                        }}
                        activeOpacity={.8}
                        onPress={() => navigation.navigate('SeriesBottomTabNavigation')}
                    >
                        <Image source={fantasyImage}
                               style={{height: 26.5, width: 26.5, tintColor: 'white'}}/>
                        <Text style={{
                            color: 'white',
                            marginTop: 4,
                            top: -2,

                            fontSize: 12,
                            fontWeight: '600',


                        }}>Fantasy</Text>
                    </TouchableOpacity>
                ),
            }}/>
            <BottomTabs.Screen name="Series" component={SeriesBottomTabNavigation} options={{
                headerShown: false,
                tabBarButton: () => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 13
                        }}
                        activeOpacity={.8}
                        onPress={() => navigation.navigate('SeriesBottomTabNavigation')}
                    >
                        <Image source={seriesBottomImage}
                               style={{height: 25, width: 25, tintColor: 'gray'}}/>
                        <Text style={{
                            color: 'gray',
                            marginTop: 5,
                            top: -2,

                            fontSize: 12,
                            fontWeight: '600',


                        }}>Series</Text>
                    </TouchableOpacity>
                ),
            }}/>
            <BottomTabs.Screen name="More" component={MoreScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="ellipsis-horizontal" size={size} color={color}/>
                ),
            }}/>
        </BottomTabs.Navigator>
    );
}
export default BottomTabNavigation
const styles = StyleSheet.create({})
