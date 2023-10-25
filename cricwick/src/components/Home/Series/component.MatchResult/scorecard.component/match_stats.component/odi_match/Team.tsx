import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Team = ({item}: any) => {
    return (
        <View style={{
            // backgroundColor: 'red',

        }}>
            <View style={{
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 10,
                backgroundColor: 'white'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5
                }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{item.series.title}</Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
                </View>

                {
                    <View style={{}}>
                        {item && <Text style={{
                            color: 'black',
                            fontWeight: '400'
                        }}>{item.toss_won_by_id === item.team_1_id ? item.team_1.team.short_name : item.team_2.team.short_name} opted
                            to {item.chose_to === 'Bowl' ? 'field' : 'bat'}</Text>}
                    </View>

                }
                {
                    item.match_result && <View style={{
                        marginVertical: 5
                    }}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>{item.match_result}</Text>
                    </View>
                }
            </View>
        </View>
    )
        ;
}
export default Team
const styles = StyleSheet.create({})
