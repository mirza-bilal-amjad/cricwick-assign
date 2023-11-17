import {FlatList, StyleSheet, View} from 'react-native'
import React, {useMemo} from 'react'
import Card from "./component/card";
import {useTheme} from "../../../hooks";

const PlayList = ({data, listID, seriesID, label, navigation}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;
    return (
        <FlatList
            horizontal
            data={data}
            contentContainerStyle={{
                // marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,

            }}
            showsHorizontalScrollIndicator={false}

            style={{
                // backgroundColor: 'red'
            }}
            ItemSeparatorComponent={() => (
                <View style={{width: 10}}/>
            )}

            renderItem={useMemo(() => {
                return ({item}: any) => <Card item={item} listID={listID} seriesID={seriesID} label={label}
                                              navigation={navigation}/>;
            }, [listID, seriesID, label, navigation])}/>
    )
};
export default PlayList
const styles = StyleSheet.create({}
)
