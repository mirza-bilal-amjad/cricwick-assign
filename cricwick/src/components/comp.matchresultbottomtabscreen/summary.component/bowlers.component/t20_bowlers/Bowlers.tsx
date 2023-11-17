import {Text, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../../../../hooks";

const Bowlers = ({item}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;
    const bowlerStat = (item: any, showStar: boolean) => {
        return (
            <View style={{
                marginHorizontal: 5,
                padding: 10,
                flexDirection: 'row'
            }}>
                <View style={{
                    width: '40%',
                    flexDirection: 'row',

                }}>
                    <Text style={{color: colors.text}}>{item.player.short_name}</Text>
                    {showStar && <Text style={{color: 'red'}}> *</Text>}
                </View>
                <View style={{
                    width: '15%'
                }}>
                    <Text style={{color: colors.text, fontSize: 12}}>{item.bowler.overs_bowled} Ovs</Text>
                </View>
                <View style={{
                    width: '15%'
                }}>
                    <Text style={{color: colors.text, fontSize: 12}}>{item.bowler.wickets_taken} Wkts</Text>
                </View>
                <View style={{
                    width: '15%'
                }}>
                    <Text style={{color: colors.text, fontSize: 12}}>{item.bowler.runs_given} Runs</Text>
                </View>
                <View style={{
                    width: '20%'
                }}>
                    <Text style={{color: colors.text, fontSize: 12}}>{item.bowler.econ} Econ</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{}}>
            <View style={{
                backgroundColor: colors.card,
                marginHorizontal: 10,
                marginVertical: 5
            }}>
                {item.last_bowler && item.bowler && <Text style={{
                    color: colors.text,
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
