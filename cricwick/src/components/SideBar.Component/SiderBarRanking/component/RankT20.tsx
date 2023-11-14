import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import Collapsible from "react-native-collapsible";
import Teams from "./comp/Teams";
import Batsman from "./comp/Batsman";
import Bowlers from "./comp/Bowlers";
import AllRounders from "./comp/AllRounders";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import Animated from "react-native-reanimated";
import {useTheme} from "../../../../hooks";

const RankT20 = ({route}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;
    const {t20} = route.params;

    const RenderItem = ({inItem, index}: any) => {
        const [isOpen, setIsOpen] = useState({
            isOpen1: false,
            isOpen2: true,
            isOpen3: true,
            isOpen4: true,
        });
        return (
            <View key={index}>
                <View>
                    <TouchableOpacity onPress={() => setIsOpen({
                        isOpen1: !isOpen.isOpen1,
                        isOpen2: true,
                        isOpen3: true,
                        isOpen4: true,
                    })} style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        backgroundColor: 'rgba(45,77,26,0.71)',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Teams</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <GoogleIcon name={!isOpen.isOpen1 ? 'arrow-drop-up' : 'arrow-drop-down'} size={25}
                                        color={'white'}/>
                        </View>
                    </TouchableOpacity>
                    {inItem.teams && <Collapsible collapsed={isOpen.isOpen1} style={{
                        flex: 1,
                    }}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: 'rgba(45,77,26,0.51)',
                            padding: 3

                        }}>
                            <View style={{
                                width: '10%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'right', right: 4}}>Rank</Text></View>
                            <View style={{
                                width: '45%',
                            }}><Text style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Team</Text></View>
                            <View style={{
                                width: '15%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'center'}}>Matches</Text></View>
                            <View style={{
                                width: '15%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'center'}}>Points</Text></View>
                            <View style={{
                                width: '15%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 5, fontSize: 12, textAlign: 'center'}}>Rating</Text></View>
                        </View>
                        <FlatList data={inItem.teams} renderItem={
                            ({item, index}: any) => <Teams item={item} index={index}/>
                        }/>
                    </Collapsible>}
                </View>


                <TouchableOpacity onPress={() => setIsOpen({
                    isOpen1: true,
                    isOpen2: !isOpen.isOpen2,
                    isOpen3: true,
                    isOpen4: true,
                })} style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: 'rgba(45,77,26,0.71)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5

                }}>
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Batsmen</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <GoogleIcon name={!isOpen.isOpen2 ? 'arrow-drop-up' : 'arrow-drop-down'} size={25}
                                    color={'white'}/>
                    </View>
                </TouchableOpacity>
                {
                    inItem.batsmen && <Collapsible collapsed={isOpen.isOpen2}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: 'rgba(45,77,26,0.51)',
                            padding: 3

                        }}>
                            <View style={{
                                width: '10%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'right', right: 4}}>Rank</Text></View>
                            <View style={{
                                width: '40%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Player</Text></View>
                            <View style={{
                                width: '35%',
                            }}><Text style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Team</Text></View>
                            <View style={{
                                width: '15%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 5, fontSize: 12, textAlign: 'center'}}>Rating</Text></View>
                        </View>
                        <FlatList data={inItem.batsmen} renderItem={
                            ({item, index}: any) => <Batsman item={item} index={index}/>
                        }/>
                    </Collapsible>
                }


                <TouchableOpacity onPress={() => setIsOpen({
                    isOpen1: true,
                    isOpen2: true,
                    isOpen3: !isOpen.isOpen3,
                    isOpen4: true,
                })} style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: 'rgba(45,77,26,0.71)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5

                }}>
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Bowlers</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <GoogleIcon name={!isOpen.isOpen3 ? 'arrow-drop-up' : 'arrow-drop-down'} size={25}
                                    color={'white'}/>
                    </View>
                </TouchableOpacity>
                {
                    inItem.bowler && <Collapsible collapsed={isOpen.isOpen3}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: 'rgba(45,77,26,0.51)',
                            padding: 3

                        }}>
                            <View style={{
                                width: '10%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'right', right: 4}}>Rank</Text></View>
                            <View style={{
                                width: '40%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Player</Text></View>
                            <View style={{
                                width: '35%',
                            }}><Text style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Team</Text></View>
                            <View style={{
                                width: '15%',
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 5, fontSize: 12, textAlign: 'center'}}>Rating</Text></View>
                        </View>
                        <FlatList data={inItem.bowler} renderItem={
                            ({item, index}: any) => <Bowlers item={item} index={index}/>
                        }/>

                    </Collapsible>
                }


                <TouchableOpacity onPress={() => setIsOpen({
                    isOpen1: true,
                    isOpen2: true,
                    isOpen3: true,
                    isOpen4: !isOpen.isOpen4,
                })} style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: 'rgba(45,77,26,0.71)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5

                }}>
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>All rounders</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <GoogleIcon name={!isOpen.isOpen4 ? 'arrow-drop-up' : 'arrow-drop-down'} size={25}
                                    color={'white'}/>
                    </View>
                </TouchableOpacity>
                {
                    inItem.all_rounder && <Collapsible collapsed={isOpen.isOpen4}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            backgroundColor: 'rgba(45,77,26,0.51)',
                            padding: 3

                        }}>
                            <View style={{
                                width: '10%',
                                alignItems: 'center'
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12, textAlign: 'right', right: 4}}>Rank</Text></View>
                            <View style={{
                                width: '40%',
                                alignItems: 'center'
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Player</Text></View>
                            <View style={{
                                width: '35%',
                                alignItems: 'center'
                            }}><Text style={{color: 'white', paddingHorizontal: 3, fontSize: 12}}>Team</Text></View>
                            <View style={{
                                width: '15%',
                                alignItems: 'center'
                            }}><Text
                                style={{color: 'white', paddingHorizontal: 5, fontSize: 12, textAlign: 'center'}}>Rating</Text></View>
                        </View>
                        <FlatList data={inItem.all_rounder} renderItem={
                            ({item, index}: any) => <AllRounders item={item} index={index}/>
                        }/>
                    </Collapsible>
                }
            </View>
        )
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,

        }}>
            {
                t20 && t20.length > 0 &&
                <Animated.FlatList
                    showsVerticalScrollIndicator={false}
                    data={t20}
                    renderItem={
                        ({item, index}) => (
                            <RenderItem inItem={item} index={index}/>
                        )
                    }/>
            }
        </View>
    );
}
export default RankT20
