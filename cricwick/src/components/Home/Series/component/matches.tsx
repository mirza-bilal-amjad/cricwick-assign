import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {DateComponent} from "../../../index";

const overMatchCont = (item: any) => {
    return (
        <View style={{
            paddingVertical: 10,
            marginHorizontal: 10,
        }}>
            <View style={{
                flexDirection: 'column',
            }}>
                <Text style={{
                    fontSize: 14,
                    color: 'gray',
                    fontWeight: '400',
                }}>{
                    'RESULT  ' + `${item.card_title}, `
                }</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 7,

                    }}>
                        <Image source={{uri: item['teamA'].flag_url}}
                               style={{
                                   width: 30,
                                   height: 30,
                               }}/>
                        <Text style={{
                            marginLeft: 10,
                            color: 'black',
                            fontSize: 15
                        }}>{item['teamA'].short_name}</Text>
                    </View>
                    {
                        item.innings && item.innings[0] &&
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                        }}>< Text style={{
                            color: 'black',
                        }}>
                            {
                                item.innings[0].runs > 0 ? item.innings[0].runs : 0
                            }
                            /
                            {
                                item.innings[0].wickets > 0 ? item.innings[0].wickets : 0
                            }{' '}
                        </Text>
                            <Text style={{
                                color: 'gray',
                                fontSize: 10,

                            }}>
                                (
                                {item.innings[0].overs > 0 ? item.innings[0].overs : 0}
                                {` ov)`}
                            </Text>
                        </View>
                    }
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 7,

                    }}>
                        <Image source={{uri: item['teamB'].flag_url}}
                               style={{
                                   width: 30,
                                   height: 30,
                               }}/>
                        <Text style={{
                            marginLeft: 10,
                            color: 'black',
                            fontSize: 15
                        }}>{item['teamB'].short_name}</Text>
                    </View>
                    {
                        item.innings && item.innings[1] &&
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                        }}>< Text style={{
                            color: 'black',
                        }}>
                            {
                                item.innings[1].runs > 0 ? item.innings[1].runs : 0
                            }
                            /
                            {
                                item.innings[1].wickets > 0 ? item.innings[1].wickets : 0
                            }{' '}
                        </Text>
                            <Text style={{
                                color: 'gray',
                                fontSize: 10,

                            }}>
                                (
                                {item.innings[1].overs > 0 ? item.innings[1].overs : 0}
                                {` ov)`}
                            </Text>
                        </View>
                    }
                </View>
            </View>
            {item.detail && item.detail.length > 0 && <View style={{
                alignItems: 'center',
            }
            }>
                <Text style={{
                    fontSize: 12,
                    color: 'red',
                    fontWeight: '500',
                }}>
                    {item.detail}
                </Text>
            </View>}
        </View>
    )
        ;
}
const upcomingMatchCont = (item: any) => {
    return (
        <View style={{
            paddingVertical: 10,
            marginHorizontal: 10,

        }}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 5,
            }}>
                <Text style={{
                    fontSize: 14,
                    color: 'gray',
                    fontWeight: '400',
                }}>{
                    'UPCOMING  ' + `${item.card_title}, `
                }</Text>
                {item.match_state === 'Scheduled' ?
                    <DateComponent style={{
                        fontSize: 15,
                        color: 'gray',
                    }} date={item.match_start}/> : <></>}
            </View>


            <View style={{
                width: 200,
                flexDirection: 'row',
                minHeight: 50,
                alignItems: 'center',
                justifyContent: 'space-around',

            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image source={{uri: item['teamA'].flag_url}}
                           style={{
                               width: 30,
                               height: 30,
                           }}/>

                    <Text style={{
                        marginLeft: 10,
                        color: 'black',
                        fontSize: 15
                    }}>{item['teamA'].short_name}</Text>
                </View>
                <Text style={{
                    color: 'gray',
                    fontSize: 19
                }}> vs </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'

                }}>
                    <Image source={{uri: item['teamB'].flag_url}}
                           style={{
                               width: 30,
                               height: 30,
                           }}/>
                    <Text style={{
                        marginLeft: 10,
                        color: 'black',
                        fontSize: 15
                    }}>{item['teamB'].short_name}</Text>
                </View>
            </View>
        </View>
    )
}

const Matches = ({item}: any) => {
    return (
        item.match_state === 'Scheduled' ?
            upcomingMatchCont(item) :
            overMatchCont(item)
    )
}
export default Matches
