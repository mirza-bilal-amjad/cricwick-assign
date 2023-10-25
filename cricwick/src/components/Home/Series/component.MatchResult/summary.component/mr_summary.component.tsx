import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {ODITeamVsTeam, T20TeamVsTeam, TestTeamVsTeam} from "./team_vs_team.component";
import {ODIManOfTheMatch, T20ManOfTheMatch} from "./man_of_the_match.component";
import {ODIBowlers, T20Bowlers, TestBowlers} from "./bowlers.component";

const MrSummaryComponent = ({item, index, navigation}: any) => {
    return (
        <View style={{
            // padding: 20,
            // marginHorizontal: 10
        }}>
            {/*Team Vs Team Component*/}
            {item &&
                item['match'].format === 'ODI' &&
                item['match'].match_state !== 'Scheduled' &&
                <ODITeamVsTeam item={item['match']}/>}
            {item &&
                item['match'].format === 'T20i' || item['match'].format === 'T20' &&
                item['match'].match_state !== 'Scheduled' &&
                <T20TeamVsTeam item={item['match']}/>}
            {item &&
                item['match'].format === 'Test' &&
                item['match'].match_state !== 'Scheduled' &&
                <TestTeamVsTeam item={item['match']}/>}
            {/*Bowlers Component*/}

            {item['match'].format === 'ODI' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].partnership !== null &&
                <ODIBowlers item={item['match'].partnership}/>}
            {item['match'].format === 'T20' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].partnership !== null &&
                <T20Bowlers item={item['match'].partnership}/>}
            {item['match'].format === 'Test' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].partnership !== null &&
                <TestBowlers item={item['match'].partnership}/>}
            {/*Man Of the Match*/}

            {item['match'].format === 'ODI' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].manOfMatch &&
                <ODIManOfTheMatch item={item['match'].manOfMatch}/>}
            {item['match'].format === 'T20' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].manOfMatch &&
                <T20ManOfTheMatch item={item['match'].manOfMatch}/>}
            {item['match'].format === 'Test' &&
                item['match'].match_state !== 'Scheduled' &&
                item['match'].manOfMatch &&
                <T20ManOfTheMatch item={item['match'].manOfMatch}/>}

            {/*Article*/}
            {item['match'].format !== 'Test' && item['articles'].length > 0 && < View style={{
                backgroundColor: 'white',
                marginVertical: 5,
                marginHorizontal: 10,
                paddingVertical: 5,
                paddingHorizontal: 7.5,

            }}>

                {
                    item &&
                    item['articles'].map((inItem: any, index: number) =>
                        (<TouchableOpacity onPress={() => navigation.navigate('Articles', {
                            articleId: inItem.id,
                            matchId: item.match.id
                        })}
                                           activeOpacity={.7} key={index}
                                           style={{
                                               flexDirection: 'row',
                                               justifyContent: 'space-between',
                                               alignItems: 'center',
                                               marginVertical: 2.5,
                                               borderBottomWidth: index % 2 === 0 ? 0.2 : 0,
                                               borderColor: 'gray'

                                           }}>
                            <View style={{
                                width: 145
                            }}>
                                <Image source={{uri: inItem.large_image}}
                                       style={{width: 140, aspectRatio: 16 / 9, resizeMode: 'contain'}}/>
                            </View>
                            <View style={{
                                justifyContent: 'flex-start',
                                width: Dimensions.get('screen').width - 170,
                                paddingHorizontal: 5,
                                paddingVertical: 2.5
                            }}>
                                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>{inItem.title}</Text>
                                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>{inItem.by}</Text>
                            </View>


                        </TouchableOpacity>)
                    )
                }
            </View>
            }

        </View>
    )
        ;
}
export default MrSummaryComponent
const styles = StyleSheet.create({})
