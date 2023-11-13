import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import matches from "../../../Home/Series/component/matches";
import {useNavigation} from "@react-navigation/native";

const Match = ({match}: any) => {
    const navigation = useNavigation()
    const innings = match?.innings;
    const TeamAInfo = innings?.filter((item: any) => item?.batting_team_id === match?.team_1_id);
    const TeamBInfo = innings?.filter((item: any) => item?.batting_team_id === match?.team_2_id);
    const RenderTeamInfo = ({item, index}: any) => {
        return (
            <View style={{}}>
                <Text style={{
                    color: '#000',
                    fontSize: 13,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>{item?.runs}/{item?.wickets}</Text>
                <Text style={{
                    color: 'gray',
                    fontSize: 13,
                    textAlign: 'center'
                }}>({item?.overs} overs)</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={
                () => navigation.navigate('MatchResultBottomNavigation', {
                    screen: match?.match_state === 'Over' ? 'Report' : 'MRSummary',
                    matchId: match?.id,
                    matchTitle: `${match?.teamA.short_name} vs ${match?.teamB.short_name}`,
                    matchNumber: match?.title,
                    matchState: match?.match_state,
                    team_1_id: match?.team_1_id,
                    team_2_id: match?.team_2_id,
                    nameTeamA: match?.teamA.name,
                    nameTeamB: match?.teamB.name,
                    shortNameTeamA: match?.teamA.short_name,
                    shortNameTeamB: match?.teamB.short_name,
                })
            }
            style={{
                flex: 1,
                padding: 10
            }}>
            <View style={{
                flexDirection: 'row',
                // backgroundColor: 'green',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000',
                }}>{match?.title}</Text>
                <GoogleIcon name={'share'} size={20} color={'#c22026'}/>
            </View>
            <View style={{
                flex: 1,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                // backgroundColor: 'yellow',
            }}>
                <View style={{
                    // backgroundColor: 'yellow',
                    width: '45%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            // backgroundColor: 'blue',
                            width: 60,
                            aspectRatio: 1,
                            resizeMode: 'contain',
                        }}
                        source={{uri: match?.teamA?.flag_url}}/>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#000',
                    }}>{match?.teamA?.short_name}</Text>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        {
                            innings && innings?.length !== 0 &&
                            <FlatList
                                horizontal={true}
                                contentContainerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                data={TeamAInfo} renderItem={
                                ({item, index}: any) => (
                                    <RenderTeamInfo item={item} index={index}/>
                                )
                            }
                                ItemSeparatorComponent={
                                    () => <View style={{}}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: 'black',
                                            textAlign: 'center'
                                        }}>&</Text>
                                    </View>
                                }
                            />
                        }
                    </View>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray', textAlign: 'center'}}>vs</Text>
                <View style={{
                    width: '45%',
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            // backgroundColor: 'blue',
                            width: 60,
                            aspectRatio: 1,
                            resizeMode: 'contain',
                        }}
                        source={{uri: match?.teamB?.flag_url}}/>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#000',
                    }}>{match?.teamB?.short_name}</Text>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        {
                            innings && innings?.length !== 0 &&
                            <FlatList
                                horizontal={true}
                                contentContainerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                data={TeamBInfo} renderItem={
                                ({item, index}: any) => (
                                    <RenderTeamInfo item={item} index={index}/>
                                )
                            }
                                ItemSeparatorComponent={
                                    () => <View style={{}}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: 'black',
                                            textAlign: 'center'
                                        }}>&</Text>
                                    </View>
                                }
                            />
                        }
                    </View>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'lightblue',

            }}>
                {match?.match_result &&
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                    }}>{match?.match_result}</Text>
                }
            </View>
        </TouchableOpacity>
    )
        ;
}
export default Match

