import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import moment from "moment";

const Card = ({item, screenType, navigation}: any) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('SeriesInfoBottomNavigation', {
                title: item.title,
                matchId: item.id,
                is_videos_enabled: item.is_videos_enabled,
                has_points_table: item.has_points_table,
            })}
            style={{
                padding: 10,
                height: 70,
                justifyContent: 'center',
                marginHorizontal: 5,
                backgroundColor: 'white'
            }}>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500'
            }}>{item.short_name}</Text>

            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12
                }}>{moment(item.start_date, "YYYY/MM/DD").format("DD MMMM")}</Text>
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 12}}> - </Text>
                <Text style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12
                }}>{moment(item.end_date, "YYYY/MM/DD").format("D MMMM YYYY")}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default Card
const styles = StyleSheet.create({})
