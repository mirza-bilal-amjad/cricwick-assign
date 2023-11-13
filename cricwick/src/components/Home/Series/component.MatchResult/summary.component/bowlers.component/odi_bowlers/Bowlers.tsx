import {View, Text} from 'react-native'
import React from 'react'

const Bowlers = ({item}: any) => {
    const bowlerStat = (item: any, showStar: boolean) => {
        return (
            <View style={{
                marginHorizontal: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
                flexDirection: 'row'
            }}>
                <View style={{
                    width: '40%',
                    flexDirection: 'row',

                }}>
                    <Text style={{color: 'black'}}>{item.player.short_name}</Text>
                    {item.bowler.string_state && item.bowler.string_state !== null && item.bowler.string_state === 'bowling' &&
                        <Text style={{color: 'red'}}> *</Text>}
                </View>
                <View style={{
                    width: '14%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // backgroundColor:'red'
                }}>
                    <Text style={{color: 'black', fontSize: 12}}>{item.bowler.overs_bowled}</Text>
                    <Text style={{color: 'black', fontSize: 12}}> Ovs</Text>
                </View>
                <View style={{
                    width: '14%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // backgroundColor:'red'
                }}>
                    <Text style={{color: 'black', fontSize: 12}}>{item.bowler.wickets_taken}</Text>
                    <Text style={{color: 'black', fontSize: 12}}> Wkts</Text>
                </View>
                <View style={{
                    width: '14%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // backgroundColor:'red'
                }}>
                    <Text style={{color: 'black', fontSize: 12}}>{item.bowler.runs_given}</Text>
                    <Text style={{color: 'black', fontSize: 12}}> Runs</Text>
                </View>
                <View style={{
                    width: '18%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // backgroundColor:'red'
                }}>
                    <Text style={{color: 'black', fontSize: 12}}>{item.bowler.econ}</Text>
                    <Text style={{color: 'black', fontSize: 12}}> Econ</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{}}>
            <View style={{
                backgroundColor: 'white',
                marginHorizontal: 10,
                marginVertical: 5
            }}>
                {item.last_bowler && item.bowler && <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 15
                }}>Bowlers</Text>}
                {item.bowler && bowlerStat(item['bowler'], true)}
                {item.last_bowler && bowlerStat(item['last_bowler'], false)}
            </View>

        </View>
    );
}
export default Bowlers
