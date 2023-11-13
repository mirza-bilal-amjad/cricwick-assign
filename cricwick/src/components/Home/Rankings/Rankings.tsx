import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ODI from "./component/ODI";
import T20 from "./component/T20";
import Test from "./component/TEST";

const TopTabs = createMaterialTopTabNavigator();
const Rankings = ({item}: any) => {
    return (
        <View style={
            [styles.itemContainer, {
                // borderRadius: 15,
            }]
        }>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <Text style={[{
                        fontSize: 18,
                        color: 'black',
                        paddingHorizontal: 10,
                        fontWeight: 'bold',
                        marginVertical: 10,
                    }]}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    minHeight: 500,
                }}>
                    <TopTabs.Navigator
                        initialRouteName={'ODI'}
                        screenOptions={{
                            tabBarLabelStyle: {
                                fontSize: 14,
                                fontWeight: '900',
                            },

                            tabBarStyle: {
                                height: 40,
                                elevation: 0,
                                borderBottomWidth: .2,
                                borderColor: '#d0d0d0',

                            },
                            tabBarContentContainerStyle: {
                                height: '100%',
                                marginTop: -2,


                            },
                            tabBarIndicatorContainerStyle: {
                                height: '80%',
                                marginVertical: 5
                            },
                            tabBarIndicatorStyle: {
                                height: '100%',
                                width: '17.33%',
                                marginHorizontal: 31,

                                borderRadius: 40,
                                opacity: .1
                            },
                            tabBarItemStyle: {},


                        }}
                    >
                        <TopTabs.Screen name="ODI" component={ODI} initialParams={item}/>
                        <TopTabs.Screen name="T20" component={T20} initialParams={item}/>
                        <TopTabs.Screen name="Test" component={Test} initialParams={item}/>
                    </TopTabs.Navigator>
                </View>
            </View>
        </View>
    )
}
export default Rankings
const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        // borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        // elevation: 4,
    },
    thumbnailView: {
        width: '100%',
        alignItems: 'center',
    },
    thumbnail: {
        width: '100%',
        // borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
})

