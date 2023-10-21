import {BackHandler, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect} from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BallByBall from "../../../screens/home/MatchResult.Screen/BallByBall";
import ScoreCard from "../../../screens/home/MatchResult.Screen/ScoreCard";
import MRSummary from "../../../screens/home/MatchResult.Screen/MRSummary";
import MRVideos from "../../../screens/home/MatchResult.Screen/MRVideos";
import PlayingEleven from "../../../screens/home/MatchResult.Screen/PlayingEleven";
import Report from "../../../screens/home/MatchResult.Screen/Report";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";

const MatchResultBottomTabs = createBottomTabNavigator();


const MatchResultBottomNavigation = ({route}: any) => {
    const navigation = useNavigation();
    const renderHeader = (title: string, matchNumber: string) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 52.5,
                position: 'relative',

            }}>
                <TouchableOpacity style={{
                    marginHorizontal: 15,
                    zIndex: 10
                }} onPress={() => navigation.goBack()}>
                    <GoogleIcon name={'arrow-back-ios'} size={30} color={'black'}/>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    // backgroundColor: 'pink',
                    position: 'absolute',
                    // left: Dimensions.get('window').width / 2 - 40
                    // marginHorizontal: 10,
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center'
                    }}>{
                        title
                    }</Text>
                    <Text style={{
                        color: 'gray',
                        fontWeight: '500',
                        fontSize: 14,
                        textAlign: 'center'
                    }}>{
                        matchNumber
                    }</Text>
                </View>
            </View>
        );
    }

    useEffect(() => {
        const handleBackPress = () => {
            //@ts-ignore
            navigation.goBack({
                index: 0,
                // @ts-ignore
                routes: [{name: 'BottomTabNavigation'}] // Replace with the name of the screen you want to navigate to
            });
            return true; // Return true to prevent default behavior (going back)
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, [route]);

    return (
        <MatchResultBottomTabs.Navigator initialRouteName={'MRSummary'} screenOptions={{
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
            {route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'BallByBall'} component={BallByBall} options={{
                    headerShown: true,
                    header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                    title: 'Ball by Ball'
                }} initialParams={{
                    matchId: route.params.matchId
                }}/>}
            {route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'ScoreCard'} component={ScoreCard} options={{
                    headerShown: true,
                    header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                    title: 'Scorecard',

                }} initialParams={{
                    matchId: route.params.matchId
                }}/>}
            <MatchResultBottomTabs.Screen name={'MRSummary'} component={MRSummary} options={{
                headerShown: true,
                header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                title: 'Summary'
            }} initialParams={{
                matchId: route.params.matchId
            }}/>
            {route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'MRVideos'} component={MRVideos} options={{
                    headerShown: true,
                    header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                    title: 'Videos',
                }} initialParams={{
                    matchId: route.params.matchId
                }}/>}
            {route.params.matchState !== 'Over' ?
                route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'PlayingEleven'} component={PlayingEleven} options={{
                    headerShown: true,
                    header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                    title: 'Playing XI'
                }} initialParams={{
                    matchd: route.params.matchId
                }}/> : route.params.matchState !== 'Scheduled' &&
                <MatchResultBottomTabs.Screen name={'Report'} component={Report} options={{
                    headerShown: true,
                    header: () => renderHeader(route.params.matchTitle, route.params.matchNumber),
                    title: 'Report'
                }} initialParams={{
                    matchId: route.params.matchId
                }}/>}

        </MatchResultBottomTabs.Navigator>
    );
};
export default MatchResultBottomNavigation
const styles = StyleSheet.create({})
