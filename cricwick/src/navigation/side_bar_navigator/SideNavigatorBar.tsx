import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
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

const Drawer = createDrawerNavigator();
const SideDrawerContent = ({navigation}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={[styles.container, {backgroundColor: '#f3f3f3'}]}>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingTop: 55,
                    paddingBottom: 35,
                    backgroundColor: '#e5e5e5'
                }}>
                    <View style={{
                        width: 80, height: 80, borderRadius: 50,
                    }}>
                        <GoogleIcon name={'account-circle'} size={80} color={'#c0c0c0'}/>
                    </View>
                    <View style={{marginTop: 7}}>
                        <View style={{marginLeft: 5}}>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>
                                Bilal Amjad
                            </Text>
                        </View>
                        <View style={{marginLeft: 5}}><Text
                            style={{color: 'black', fontWeight: '400'}}>03335980020</Text></View>
                    </View>

                </View>
                <View style={{
                    borderBottomWidth: 0.2,
                    borderBottomColor: 'darkgray',
                }}>
                    {!isLoggedIn && <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            marginHorizontal: 20,
                            marginVertical: 15,
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <GoogleIcon name={'check'} size={20} color={'darkgray'}/>
                        <Text style={{
                            color: 'darkgray',
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginLeft: 5
                        }}>Login or Register</Text>

                    </TouchableOpacity>}
                    {isLoggedIn &&
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    marginHorizontal: 20,
                                    marginVertical: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <GoogleIcon name={'account-circle'} size={22} color={'darkgray'}/>
                                <Text style={{
                                    color: 'darkgray',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>Profile</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    marginHorizontal: 20,
                                    marginVertical: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <GoogleIcon name={'unsubscribe'} size={20} color={'darkgray'}/>
                                <Text style={{
                                    color: 'darkgray',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>Unsubscribe</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    marginHorizontal: 20,
                                    marginVertical: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <GoogleIcon name={'account-balance-wallet'} size={20} color={'darkgray'}/>
                                <Text style={{
                                    color: 'darkgray',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>Payout</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    marginHorizontal: 20,
                                    marginVertical: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <GoogleIcon name={'check'} size={20} color={'darkgray'}/>
                                <Text style={{
                                    color: 'darkgray',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>Change Package</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
                <View style={styles.navigator}>

                    <TouchableOpacity style={[styles.iconAndName]} activeOpacity={0.7}
                                      onPress={() => navigation.navigate("BottomTabNavigation")}
                    >
                        <IonIcon name={"home"} size={22} color={'gray'}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Home</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}>
                        <Image source={Fantasy_Bottom} style={{width: 25, height: 25, tintColor: 'gray'}}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Fantasy League</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                                      onPress={() => navigation.navigate("Videos")}
                    >
                        <IonIcon name={"videocam-outline"} size={22} color={'gray'}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Videos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7} onPress={
                        () => navigation.navigate("Blogs")
                    }>
                        <IonIcon name={"newspaper-outline"} size={22} color={'gray'}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Blogs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}>
                        <GoogleIcon name={"edit-document"} size={22} color={'gray'}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Articles</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}>

                        <Image source={PSL} style={{width: 25, height: 25, tintColor: 'gray'}}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>PSL 2023</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}>
                        <GoogleIcon name={"list-alt"} size={22} color={'gray'}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Match Results</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                                      onPress={() => navigation.navigate("SeriesBottomTabNavigation")}
                    >
                        <Image source={SeriesIcon} style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            aspectRatio: 12 / 9,
                            tintColor: 'gray'
                        }}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Series</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                                      onPress={() => navigation.navigate("SeriesBottomTabNavigation")}
                    >
                        <Image source={RankingSide} style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            aspectRatio: 12 / 9,
                            tintColor: 'gray'
                        }}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>ICC Rankings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                                      onPress={() => navigation.navigate("SeriesBottomTabNavigation")}
                    >
                        <Image source={TeamSide} style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            aspectRatio: 12 / 9,
                            tintColor: 'gray'
                        }}/>
                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Teams</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                    >
                        <IonIcon name={"reader-outline"} size={22}
                                 color={'gray'}/>

                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Fantasy T&C</Text>
                    </TouchableOpacity>
                    {/*<Text style={{borderWidth: .7, height: 0, margin: 0, padding: 0, borderColor: '#CBCBCB'}}/>*/}

                    <TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
                    >
                        <GoogleIcon name={"help"} size={22}
                                    color={'gray'}/>

                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Fantasy FAQs</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.logoutCont}>
                    <TouchableOpacity style={styles.iconAndName2} activeOpacity={0.7}>
                        <IonIcon name={"log-out"} size={22}
                                 color={'gray'}/>

                        <Text style={[styles.drawerItem, {
                            color: 'darkgray'
                        }]}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );
};
const SideNavigatorBar = ({navigation}: any) => {

    return (
        <Drawer.Navigator drawerContent={(props) => <SideDrawerContent {...props} />}
                          initialRouteName={'BottomTabNavigation'}
                          screenOptions={{
                              drawerStyle: {
                                  backgroundColor: 'white',
                                  padding: 0,
                                  width: 280
                              }, drawerItemStyle: {
                                  backgroundColor: "pink",
                                  margin: 0, padding: 0

                              }
                              , drawerLabelStyle: {
                                  color: "red"

                              }
                          }}>
            <Drawer.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} options={{
                headerShown: false,
            }}/>
            <Drawer.Screen name={'SeriesBottomTabNavigation'} component={SeriesBottomTabNavigation}
                           options={{
                               headerShown: false
                           }}/>

            <Drawer.Screen name={'MatchResultBottomNavigation'} component={MatchResultBottomNavigation}
                           options={{
                               headerShown: false,
                           }}/>
            <Drawer.Screen name={'Blogs'}
                           component={Blogs}
                           options={{
                               headerShown: true,
                               headerTitleAlign: 'center',
                               headerShadowVisible: false,
                               headerTitleStyle: {fontWeight: 'bold'},
                               headerStyle: {backgroundColor: '#f3f3f3'},
                               //add more options here
                               headerLeft: () => (
                                   <TouchableOpacity
                                       style={{marginLeft: 10}}
                                       onPress={() => navigation.reset({
                                             index: 0,
                                                routes: [{name: 'SideNavigatorBar'}],
                                       })}>
                                       <IonIcon name="chevron-back-outline" size={40} color="black"/>
                                   </TouchableOpacity>
                               ),


                           }}/>
        </Drawer.Navigator>
    );
}
export default SideNavigatorBar

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
        maxHeight: 50


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

