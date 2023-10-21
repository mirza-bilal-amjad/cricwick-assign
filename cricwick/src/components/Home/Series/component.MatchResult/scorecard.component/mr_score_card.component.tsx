import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {ODITeamVsTeam, T20TeamVsTeam, TestTeamVsTeam} from "./team_vs_team.component";

const MrScoreCardComponent = ({item}: any) => {

    return (
        <View style={{
            // padding: 20,
            // marginHorizontal: 10
        }}>

            {/*Team Vs Team Component*/}
            {item && item.format === 'ODI' && <ODITeamVsTeam item={item}/>}
            {item && item.format === 'T20' && <T20TeamVsTeam item={item}/>}
            {item && item.format === 'Test' && <TestTeamVsTeam item={item}/>}
            {/*Bowlers Component*/}

        </View>
    );
}
export default MrScoreCardComponent
const styles = StyleSheet.create({})
