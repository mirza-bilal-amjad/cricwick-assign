import {StyleSheet} from 'react-native'
import React from 'react'
import OverMatch from "./comp.match_state/OverMatch";
import ScheduleMatch from "./comp.match_state/ScheduleMatch";
import LiveMatch from "./comp.match_state/LiveMatch";

const Test = ({item}: any) => {
    switch (item.match_state) {
        case 'Live':
            return <LiveMatch item={item}/>;
        case 'Over':
            return <OverMatch item={item}/>;
        case 'Scheduled':
            return <ScheduleMatch item={item}/>;
        default:
            return null;
    }
}
export default Test
const styles = StyleSheet.create({})
