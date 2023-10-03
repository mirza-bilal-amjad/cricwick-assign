import {View, Text} from 'react-native'
import React from 'react'
import moment from "moment";

const DateComponent = ({date, style}: any) => {
    const parts = date.split(/[\s:\/]+/);
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);
    const hours = Number(parts[3]);
    const minutes = Number(parts[4]);
    const seconds = Number(parts[5]);
    date = `${year}-${month}-${day} ${hours + 5}:${minutes}:${seconds}`;
    date = moment(new Date(date)).format('DD MMM, hh:mm A');

    return (
        <Text style={style}>{
            date
        }</Text>
    );
}
export default DateComponent
