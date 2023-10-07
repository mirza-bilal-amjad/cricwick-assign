import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FantasyScreen, HomeScreen, MoreScreen, SeriesScreen, VideosScreen} from "../../screens";
import IonIcon from 'react-native-vector-icons/Ionicons'
import GoogleIcon from 'react-native-vector-icons/MaterialIcons'
// import {useFonts} from 'react-native-google-fonts'
const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTabs.Navigator initialRouteName={'Home'} screenOptions={{
            tabBarStyle: {
                backgroundColor: '#FFEAE7',
            },

        }}>
            <BottomTabs.Screen name="Home" component={HomeScreen} options={{
                headerShown: true,
                header: () => (
                    <View style={{
                        height: 50,
                        backgroundColor: '#FFEAE7',
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity>
                            <IonIcon name="menu" size={35} color={'black'}/>
                        </TouchableOpacity>
                        <View>

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
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="videocam" size={size} color={color}/>
                ),
            }

            }/>
            <BottomTabs.Screen name="Fantasy" component={FantasyScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="flag" size={size} color={color}/>
                ),
            }}/>
            <BottomTabs.Screen name="Series" component={SeriesScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <IonIcon name="tennisball" size={size} color={color}/>
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
