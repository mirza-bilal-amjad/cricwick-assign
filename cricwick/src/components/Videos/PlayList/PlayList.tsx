import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import Card from "./component/card";
import IonIcon from "react-native-vector-icons/Ionicons";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";

const PlayList = ({data, listID, seriesID, label, navigation}: any) => {

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
