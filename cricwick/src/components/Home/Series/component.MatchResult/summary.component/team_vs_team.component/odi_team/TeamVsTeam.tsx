import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const TeamVsTeam = ({item}: any) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginHorizontal: 10,
            marginBottom: 2.5
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 2.5

                    }}>
                        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{item.teamA.short_name}</Text>
                        <Image
                            style={{width: 40, aspectRatio: 15 / 10, marginVertical: 5}}
                            source={{uri: item.teamA.flag_url}}
                        />
                    </View>
                    <View style={{
                        borderBottomWidth: 0.2,
                    }}/>
                    <View style={{}}>{item.innings &&
                        item["innings"].map(
                            (insideItem: any, index: number) => (
                                insideItem !== null && insideItem.batting_team_id === item.team_1_id
                                    ?
                                    <View key={index} style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginVertical: 5
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>{insideItem.overs > 0 ? insideItem.overs.toFixed(1) : 0.0}</Text>
                                            <Text style={{color: 'black', fontSize: 10}}>(ov)</Text>
                                        </View><View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>{insideItem.runs > 0 ? insideItem.runs : 0}</Text>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>/{insideItem.wickets > 0 ? insideItem.wickets : 0}</Text>
                                    </View>
                                    </View> :
                                    item.match_state === 'Live' && item.break_type && <View key={index} style={{
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'space-between',
                                        marginVertical: 5
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>-</Text>
                                            <Text style={{color: 'black', fontSize: 10}}></Text>
                                        </View><View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>-</Text>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>/-</Text>
                                    </View>
                                    </View>
                            )
                        )

                    }
                    </View>
                </View>
                <View style={{
                    paddingHorizontal: 10,

                }}>
                    <Text style={{color: 'gray'}}>vs</Text>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 2.5

                    }}>
                        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{item.teamB.short_name}</Text>
                        <Image
                            style={{width: 40, aspectRatio: 15 / 10, marginVertical: 5}}
                            source={{uri: item.teamB.flag_url}}
                        />
                    </View>
                    <View style={{
                        borderBottomWidth: 0.2,
                    }}/>
                    <View style={{}}>{item.innings &&
                        item["innings"].map(
                            (insideItem: any, index: number) => (
                                insideItem && insideItem.batting_team_id === item.team_2_id
                                    ?
                                    <View key={index} style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginVertical: 5
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>{insideItem.overs > 0 ? insideItem.overs.toFixed(1) : 0.0}</Text>
                                            <Text style={{color: 'black', fontSize: 10}}>(ov)</Text>
                                        </View><View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>{insideItem.runs > 0 ? insideItem.runs : 0}</Text>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>/{insideItem.wickets > 0 ? insideItem.wickets : 0}</Text>
                                    </View>
                                    </View> :
                                    item.match_state === 'Live' && item.break_type && < View key={index} style={{
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'space-between',
                                        marginVertical: 5
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>-</Text>
                                            <Text style={{color: 'black', fontSize: 10}}></Text>
                                        </View><View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>-</Text>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: '400'
                                        }}>/-</Text>
                                    </View>
                                    </View>
                            )
                        )
                    }
                    </View>
                </View>
            </View>
            {
                !item.match_result && item['innings'].map((inItem: any, index: number) => (
                    inItem.batting_team_id === item.team_1_id || inItem.batting_team_id === item.team_2_id &&
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
                    </View>))
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
const styles = StyleSheet.create({})
