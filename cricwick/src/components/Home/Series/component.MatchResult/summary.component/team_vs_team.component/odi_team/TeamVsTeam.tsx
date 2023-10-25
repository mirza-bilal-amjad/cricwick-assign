import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../../../../index";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";

const TeamVsTeam = ({item}: any) => {

    const team1 = item['innings'].filter((inItem: any) => inItem.batting_team_id === item.team_1_id);
    const team2 = item['innings'].filter((inItem: any) => inItem.batting_team_id === item.team_2_id);

    if (team1.length < 2) {
        for (let i = 0; i < 1 - team1.length; i++) {
            team1.push({
                batting_team_id: item.team_1_id,
                fielding_team_id: item.team_2_id,
                id: null,
                overs: null,
                run_rate: null,
                total_overs: 50,
                runs: null,
                wickets: null,
                required_rate: null
            });

        }
    }
    if (team2.length < 2) {
        console.log('less than 2')
        for (let i = 0; i < 1 - team2.length; i++) {
            team2.push({
                batting_team_id: item.team_2_id,
                fielding_team_id: item.team_1_id,
                id: null,
                overs: null,
                run_rate: null,
                total_overs: 50,
                runs: null,
                wickets: null,
                required_rate: null
            });

        }
    }


    const odi_overs = (item: any) => {
        return (
            <View style={{
                // backgroundColor: 'lightblue',
            }}>
                <View style={{
                    flexShrink: 1,
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                }}>
                    {item.overs !== null ? <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 12,
                            }}>{Number(item.overs > 0 ? item.overs : 0).toFixed(1)}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 11,
                                fontWeight: 'bold',
                            }}> (ov)</Text>
                        </View> :
                        <Text style={{
                            color: 'black',
                            textAlign: 'center',
                        }}>-/-</Text>
                    }

                </View>
                <View></View>
            </View>
        );
    }
    const odi_score = (item: any) => {
        console.log(item.wickets !== null && item.runs !== null)
        return (
            <View style={{}}>
                <View style={{
                    flexShrink: 1,
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                }}>
                    {item.wickets !== null && item.runs !== null ? <Text style={{
                            color: 'black',
                            fontWeight: '500',
                            fontSize: 15,

                        }}>{item.runs > 0 ? item.runs : 0}/{item.wickets > 0 ? item.wickets : 0}</Text> :
                        <Text style={{
                            color: 'black',
                            fontWeight: '500',
                            fontSize: 15,
                            textAlign: 'center',
                        }}>-/-</Text>
                    }
                </View>
            </View>
        );
    }
    return (
        <View style={{
            // top: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,

            marginHorizontal: 10,
            backgroundColor: 'white',
        }}>
            <View style={[styles.teamABCont]}>
                <View style={[styles.teamA]}>
                    <View style={[styles.teamName_Flag]}>
                        <Text style={[styles.teamName]}>{item.teamA.short_name}</Text>
                        <Image source={{uri: item.teamA.flag_url}} style={[styles.teamFlag]}/>
                    </View>
                    <View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
                    <View style={[styles.teamScoreInfo]}>
                        {item.format === 'ODI' ? odi_overs(team1[0]) : <></>}
                        {item.format === 'ODI' ? odi_score(team1[0]) : <></>}
                    </View>
                </View>
                <Text style={[styles.vs]}>vs</Text>
                <View style={[styles.teamB]}>
                    <View style={[styles.teamName_Flag]}>
                        <Image source={{uri: item.teamB.flag_url}} style={[styles.teamFlag]}/>
                        <Text style={[styles.teamName]}>{item.teamB.short_name}</Text>
                    </View>
                    <View style={{borderWidth: .21, width: '100%', marginVertical: 3}}/>
                    <View style={[styles.teamScoreInfo]}>
                        {item.format === 'ODI' && odi_overs(team2[0])}
                        {item.format === 'Test' && team2[0].runs && team2[1].runs ?
                            <Text>&</Text> : <></>}
                        {item.format === 'ODI' && odi_score(team2[0])}
                    </View>
                </View>
            </View>
            {
                !item.match_result && item['innings'].map((inItem: any, index: number) => {
                    console.log(inItem.batting_team_id, item.team_1_id, item.team_2_id)
                    return (
                        (index === item.innings.length - 1) &&
                        <View key={index} style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}>
                            {inItem.required_rate !== null && <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    color: 'gray'
                                }}>RRR: </Text>
                                <Text style={{
                                    color: 'black',
                                }}>{inItem.required_rate}</Text>
                                <View style={{width: 10}}/>
                            </View>}

                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    color: 'gray'
                                }}>CRR: </Text>
                                <Text style={{
                                    color: 'black',
                                }}>{inItem.run_rate}</Text>
                            </View>
                        </View>)
                })
            }
            {
                item.match_result ? <View style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    marginTop: 25
                }}>
                    <Text style={{color: 'black', fontWeight: '500'}}>{item.match_result}</Text>
                </View> : <View style={{
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    marginTop: 5,
                    marginBottom: 5
                }}>
                    {item.match_status === null ? <Text style={{
                        color: 'black',
                        fontWeight: '500'
                    }}>{item.toss_won_by_id === item.team_1_id ? item.teamA.short_name : item.teamB.short_name} opted
                        to {item.chose_to === 'Bowl' ? 'field' : 'bat'}</Text> : <Text style={{
                        color: 'black',
                        fontWeight: '500'
                    }}>{item.match_status}</Text>}
                </View>
            }

        </View>
    )
        ;
}
export default TeamVsTeam
const styles = StyleSheet.create({
    teamABCont: {
        maxHeight: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    teamA: {
        width: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    teamB: {
        width: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    vs: {
        width: '10%',
        fontSize: 14,
        fontWeight: '500',
        color: '#555',
        // backgroundColor: 'white',
        textAlign: 'center'
    },
    teamInfo_Button: {
        marginVertical: 5,
    },
    teamName_Flag: {
        width: '100%',
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    teamFlag: {
        width: 40,
        height: 40,
    },
    teamScoreInfo: {
        width: '97%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue',

    },
});
