import {View, Text, useWindowDimensions} from 'react-native'
import React from 'react'
import {ODITeamVsTeam, T20TeamVsTeam, TestTeamVsTeam} from "../../../summary.component/team_vs_team.component";

const Match = ({item}: any) => {
    const dimensions = useWindowDimensions()

    return (
        <View style={{
            flex: 1,
            width: dimensions.width,
        }}>
            {item &&
                item[0].format === 'ODI' &&
                item[0].match_state !== 'Scheduled' &&
                <ODITeamVsTeam item={item[0]}/>}
            {item &&
                (item[0].format === 'T20i' || item[0].format === 'T20') &&
                item[0].match_state !== 'Scheduled' &&
                <T20TeamVsTeam item={item[0]}/>}
            {item &&
                item[0].format === 'Test' &&
                item[0].match_state !== 'Scheduled' &&
                <TestTeamVsTeam item={item[0]}/>}
        </View>
    );
}
export default Match
