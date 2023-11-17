import {View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import Match from "./Component/Match";

const MatchResultsCard = ({item, index}: any) => {
    const navigation = useNavigation();


    return (
        <View style={{
            height: 220,
            backgroundColor: '#fff',
            marginVertical: 5,
            borderRadius: 10,
            // elevation: 5,
            marginHorizontal: 5,
            flex: 1,
        }}>
            <Match match={item}/>
        </View>
    );
}
export default MatchResultsCard
