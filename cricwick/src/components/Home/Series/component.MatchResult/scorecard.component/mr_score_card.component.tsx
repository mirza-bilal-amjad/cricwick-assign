import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {ODITeamVsTeam, T20TeamVsTeam, TestTeamVsTeam} from "./team_vs_team.component";
import {ODIDecisionComp, T20DecisionComp, TestDecisionComp} from "./match_stats.component";
import {Animated} from 'react-native';
import InningStatCard from "./innings_batt_bowl_fallofwickets/InningStatCard";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import Collapsible from "react-native-collapsible";

const MrScoreCardComponent = ({item}: any) => {

    return (
        <View style={{
            flex: 1
        }}>


            {/*Team Vs Team Component*/}
            {item && item.format === 'ODI' && <ODITeamVsTeam item={item}/>}
            {item && (item.format === 'T20i' || item.format === 'T20') && <T20TeamVsTeam item={item}/>}
            {item && item.format === 'Test' && <TestTeamVsTeam item={item}/>}
            {/*CricketName and Decisions Component*/}
            {item && item.format === 'ODI' && <ODIDecisionComp item={item}/>}
            {item && (item.format === 'T20i' || item.format === 'T20') && <T20DecisionComp item={item}/>}
            {item && item.format === 'Test' && <TestDecisionComp item={item}/>}
            {/*    Team ScoreBoard     */}
            <ScrollView style={{
                marginVertical: 2.5
            }}>{
                item && item.innings &&
                item.innings.map(
                    (inItem: any, index: number) => {
                        const [isOpen, setIsOpen] = useState((index !== item.innings.length - 1));
                        console.log(isOpen, item.innings.length, index)

                        return (
                            <View key={index} style={{
                                marginHorizontal: 10,
                                marginBottom: 2.5
                            }}>
                                <TouchableOpacity onPress={() => setIsOpen(prevState => !prevState)} style={{
                                    paddingVertical: 12.5,
                                    paddingHorizontal: 10,
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <View>
                                        <Text
                                            style={{color: 'black'}}>{inItem.batting_team_id === item.team_1_id ? item.team_1.team.short_name : item.team_2.team.short_name}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}> {
                                            inItem.runs ? inItem.runs : '0'
                                        }/{
                                            inItem.wickets ? inItem.wickets : '0'
                                        } </Text>
                                        <Text style={{color: 'black'}}> </Text>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: 11,
                                            fontWeight: '400'
                                        }}>({
                                            inItem.overs ? inItem.overs.toFixed(1) : '0.0'
                                        })</Text>
                                        <GoogleIcon name={!isOpen ? 'arrow-drop-up' : 'arrow-drop-down'} size={25}
                                                    color={'black'}/>
                                    </View>
                                </TouchableOpacity>
                                <Collapsible collapsed={isOpen} style={[styles.dropdown]}>
                                    <InningStatCard item={inItem}/>
                                </Collapsible>
                            </View>
                        );
                    }
                )
            }</ScrollView>
        </View>
    );
}
export default MrScoreCardComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    dropdownButton: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    dropdown: {
        overflow: 'hidden',
    },
});
