import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IonIcon from 'react-native-vector-icons/Ionicons'
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// import {useFonts} from 'react-native-google-fonts'
// @ts-ignore
import cricwickImage from '../../../assets/Images/app_logo.png'
// @ts-ignore
import onGoing from '../../../assets/Images/ico_ongoing_on.png'
// @ts-ignore
import resultIcon from '../../../assets/Images/ico_results_on.png'
// @ts-ignore
import upcomingIcon from '../../../assets/Images/ico_upcoming_on.png'
// @ts-ignore
import fantasyImage from '../../../assets/Images/fantasy_bottom.png'
// @ts-ignore
import seriesBottomImage from '../../../assets/Images/series_side.png'
import OnGoing from "../../../screens/series/on_going/OnGoing";
import Upcoming from "../../../screens/series/upcoming/Upcoming";
import Result from "../../../screens/series/result/Result";
import result from "../../../screens/series/result/Result";
import {fetchSeries} from "../../../utils/serverfetch/fetchBackend";

const BottomTabs = createBottomTabNavigator();

const SeriesBottomTabNavigation = ({navigation}: any) => {
    return (
        <BottomTabs.Navigator initialRouteName={'Ongoing'} screenOptions={{
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
            <BottomTabs.Screen name="Ongoing" component={OnGoing} options={{
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
                            }}>Ongoing</Text>
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
            }}/>
            <BottomTabs.Screen name="Upcoming" component={Upcoming} options={{
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
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>Upcoming</Text>
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
            }}/>
            <BottomTabs.Screen name="Result" component={Result} options={{
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
                            onPress={() => navigation.goBack()}
                        >
                            <GoogleIcon name="arrow-back" size={30} color={'black'}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>Result</Text>
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
            }}/>
        </BottomTabs.Navigator>
    );
}
export default SeriesBottomTabNavigation
const styles = StyleSheet.create({})
