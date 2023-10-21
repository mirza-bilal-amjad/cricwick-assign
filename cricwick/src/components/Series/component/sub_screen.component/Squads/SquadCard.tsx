import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";

const SquadCard = ({match}: any) => {
    console.log(match.team.name)
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => navigation.navigate('SquadDetails', {
                teamID: match.id,
                seriesID: match.series_id,
                teamName: match.team.name,
            })}
            style={{
                backgroundColor: 'white',
                marginHorizontal: 10,
                padding: 10,
                flexDirection: 'row',
                minHeight: 70,
                alignItems: 'center',
            }}>
            <View>
                <Image
                    source={{uri: match.team.full_flag_url}}
                    style={{width: 55, aspectRatio: 1}}/>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{color: 'black', fontSize: 18}}>{match.team.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default SquadCard
const styles = StyleSheet.create({})
