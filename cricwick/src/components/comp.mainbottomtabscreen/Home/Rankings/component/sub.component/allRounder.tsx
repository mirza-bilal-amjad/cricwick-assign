import {FlatList} from 'react-native'
import React, {useMemo} from 'react'
import PlayerInfoCard from "../../../../../UnviversalComponent/PlayerInfoCard";

const AllRounder = ({item}: any) => {

    return (
        <FlatList data={item} scrollEnabled={false} horizontal contentContainerStyle={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            flexShrink: 1
        }} renderItem={useMemo(() => {
            return ({item}: any) => (
                <PlayerInfoCard item={item}/>
            );

        }, [])}/>
    )
}
export default AllRounder
