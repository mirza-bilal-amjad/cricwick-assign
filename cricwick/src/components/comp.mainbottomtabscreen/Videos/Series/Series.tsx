import {FlatList, View} from 'react-native'
import React, {useMemo} from 'react'
import Card from "./component/card";

const Series = ({data, listID, seriesID, label, navigation}: any) => {

    return (
        <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                // marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 10,

            }}
            style={{
                height: 250,
                // backgroundColor: 'red'
            }}
            ItemSeparatorComponent={() => (
                <View style={{width: 10}}/>
            )}

            renderItem={useMemo(() => {
                return ({item}) => <Card item={item} listID={listID} seriesID={seriesID} label={label}
                                         navigation={navigation}/>;
            }, [seriesID, listID, label, navigation])}/>
    )
}
export default Series
