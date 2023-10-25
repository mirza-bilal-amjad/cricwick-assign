import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import ODI from "../../../components/Home/Rankings/component/ODI";
import T20 from "../../../components/Home/Rankings/component/T20";
import Test from "../../../components/Home/Rankings/component/TEST";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {removeDuplicate} from "../../../utils/method";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenericHome} from "../../../utils/serverfetch/fetchBackend";
import {onValue} from "firebase/database";
import {FIREBASE_DATABASE_REF} from "../../../config/firebase/firebase.config";
import {toggleFlag} from "../../../store/toggleReducer";
import {addToCarousel} from "../../../store/FBCarouselReducer";
import {Team1, Team2} from "../../../components/Home/Series/component.MatchResult/playingeleven.component";
import LottieView from "lottie-react-native";
import {ActivityLoader} from "../../../assets";

const TopTabs = createMaterialTopTabNavigator();
const PlayingEleven = ({route}: any) => {
    const {team_1_id, team_2_id, matchId, nameTeamA, nameTeamB} = route.params;
    const [pXIDataT1, setPXIDataT1] = useState([]);
    const [pXIDataT2, setPXIDataT2] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const returnApi1 = (team_1_id: string | number, matchId: string | number) => {
        return `https://cwscoring.cricwick.net/api/${team_1_id}/${matchId}/squad?app_name=CricwickWeb`
    };
    const returnApi2 = (team_2_id: string | number, matchId: string | number) => {
        return `https://cwscoring.cricwick.net/api/${team_2_id}/${matchId}/squad?app_name=CricwickWeb`
    };
    const fetchPlayingXI = async () => {
        setRefreshing(true);
        await fetchGenericHome(returnApi1(team_1_id, matchId))
            .then((r: any) => {
                setPXIDataT1((prevState: any[]): any => {

                    if (r.length !== 0) {
                        setRefreshing(false);
                        return r;
                    } else {
                        setRefreshing(false);
                        return prevState;
                    }
                });
            })
            .catch(e => console.error('Error:', e));
        await fetchGenericHome(returnApi2(team_2_id, matchId))
            .then((r: any) => {
                setPXIDataT2((prevState: any[]): any => {

                    if (r.length !== 0) {
                        setRefreshing(false);
                        return r;
                    } else {
                        setRefreshing(false);
                        return prevState;
                    }
                });
            })
            .catch(e => console.error('Error:', e));
    };

    useEffect(() => {
        fetchPlayingXI().catch((e) => console.error(e));
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            {pXIDataT1.length > 0 && pXIDataT2.length > 0 ?
                <View style={{
                    flex: 1,
                    minHeight: 500,
                    backgroundColor: 'white',
                }}>
                    <TopTabs.Navigator
                        initialRouteName={'ODI'}
                        screenOptions={{
                            tabBarLabelStyle: {
                                fontSize: 13,
                                elevation: 0,
                                fontWeight: '700',
                            },
                            tabBarActiveTintColor: '#c22026',
                            tabBarStyle: {
                                height: 50,
                                elevation: 0,
                                borderBottomWidth: .2,
                                borderColor: 'transparent',
                                marginHorizontal: 5,

                            },
                            tabBarContentContainerStyle: {
                                height: '100%',
                                elevation: 0,
                                marginTop: 1,

                            },
                            tabBarIndicatorContainerStyle: {

                                marginVertical: 4,
                                backgroundColor: 'white',
                            },
                            tabBarIndicatorStyle: {
                                height: '100%',
                                backgroundColor: '#c22026',
                                borderRadius: 40,
                                opacity: .1
                            },
                            tabBarItemStyle: {
                                elevation: 0,

                            },


                        }}
                    >

                        <TopTabs.Screen name={`${nameTeamA}`} component={Team1} initialParams={{team: pXIDataT1}}/>
                        <TopTabs.Screen name={`${nameTeamB}`} component={Team2} initialParams={{team: pXIDataT2}}/>
                    </TopTabs.Navigator>
                </View> :
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LottieView source={ActivityLoader} autoPlay loop
                                style={{
                                    width: 280, height: 280
                                }}
                                colorFilters={[{
                                    keypath: "Shape Layer 2",
                                    color: "#c22026"
                                }]}
                    />
                </View>
            }

        </SafeAreaView>
    )
}
export default PlayingEleven
const styles = StyleSheet.create({})
