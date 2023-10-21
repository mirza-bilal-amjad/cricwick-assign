import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import moment from "moment";

const Card = ({item, screenType, navigation}: any) => {
    console.log('video enabled',item.is_videos_enabled)
    console.log('has points table',item.has_points_table)
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
            }}>{item.short_name ? item.short_name : item.title}</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12
                }}>{item.result}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default Card
const styles = StyleSheet.create({})
