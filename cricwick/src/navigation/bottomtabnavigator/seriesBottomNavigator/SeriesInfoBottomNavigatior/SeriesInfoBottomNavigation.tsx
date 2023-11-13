import {Easing, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IonIcon from 'react-native-vector-icons/Ionicons'
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// import {useFonts} from 'react-native-google-fonts'
// @ts-ignore
import cricwickImage from '../../../../assets/Images/app_logo.png'
// @ts-ignore
import onGoing from '../../../../assets/Images/ico_ongoing_on.png'
// @ts-ignore
import pointTableIcon from '../../../../assets/Images/ico_ongoing_on.png'
// @ts-ignore
import scheduleIcon from '../../../../assets/Images/ico_scorecard_on.png'
// @ts-ignore
import squadIcon from '../../../../assets/Images/ico_sqad_on.png'
// @ts-ignore
import resultIcon from '../../../../assets/Images/ico_results_on.png'
// @ts-ignore
import upcomingIcon from '../../../../assets/Images/ico_upcoming_on.png'
// @ts-ignore
import fantasyImage from '../../../../assets/Images/fantasy_bottom.png'
// @ts-ignore
import seriesBottomImage from '../../../../assets/Images/series_side.png'
import Summary from "../../../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/Summary";
import Videos from "../../../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/Videos";
import PointTable from "../../../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/PointTable";
import Schedules from "../../../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/Schedules";
import Squads from "../../../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/Squads";
import {useRoute} from "@react-navigation/native";

const BottomTabs = createBottomTabNavigator();

const SeriesInfoBottomNavigation = ({navigation, route}: any) => {
    const {is_videos_enabled, has_points_table} = route.params;
    return (
        <BottomTabs.Navigator
            initialRouteName={'Summary'}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#f3f3f3',
                    height: 60,
                    padding: 0
                },
                tabBarActiveTintColor: '#c22026',
                tabBarLabelStyle: {
                    padding: 0,
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                tabBarIconStyle: {
                    padding: 0,
                    top: 5
                }

            }}>
            <BottomTabs.Screen name="Summary" component={Summary} options={{
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
                        <TouchableOpacity
                            style={{
                                alignItems: 'center'
                            }} activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{route.params.title}</Text>
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
                    <Image source={onGoing} style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
                ),
            }} initialParams={{
                matchId: route.params.matchId,
            }}/>
            {is_videos_enabled && <BottomTabs.Screen name="Videos" component={Videos} options={{
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
                        <TouchableOpacity
                            style={{
                                alignItems: 'center'
                            }} activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{route.params.title}</Text>
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <Image source={upcomingIcon}
                           style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
                ),
            }} initialParams={{
                matchId: route.params.matchId,
            }}/>}
            {has_points_table && <BottomTabs.Screen name="PointTable" component={PointTable} options={{
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
                        <TouchableOpacity
                            style={{
                                alignItems: 'center'
                            }} activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{route.params.title}</Text>
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <Image source={resultIcon}
                           style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
                ),
            }} initialParams={{
                matchId: route.params.matchId,
            }}/>}
            <BottomTabs.Screen name="Schedules" component={Schedules} options={{
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
                        <TouchableOpacity
                            style={{
                                alignItems: 'center'
                            }} activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{route.params.title}</Text>
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <Image source={scheduleIcon}
                           style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
                ),
            }} initialParams={{
                matchId: route.params.matchId,
            }}/>
            <BottomTabs.Screen name="Squads" component={Squads} options={{
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
                        <TouchableOpacity
                            style={{
                                alignItems: 'center'
                            }} activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{route.params.title}</Text>
                        </View>
                        <TouchableOpacity>
                            <GoogleIcon name="cast" size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <Image source={squadIcon}
                           style={{width: 30, height: 30, resizeMode: 'contain', tintColor: color}}/>
                ),
            }} initialParams={{
                matchId: route.params.matchId,
            }}/>
        </BottomTabs.Navigator>
    );
}
export default SeriesInfoBottomNavigation
const styles = StyleSheet.create({})
