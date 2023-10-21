import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import matches from "../../../../../Home/Series/component/matches";

const SummaryNews = ({match, navigation}: any) => {
    return (
        <View style={{

            borderBottomWidth: .2,
            borderBottomColor: '#d7d7d7'

        }}>{
            match && match.map((inMatch: any, index: number) => {
                return (
                    <View key={index} style={{
                        marginHorizontal: 20,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>

                        <View style={{
                            height: 13,
                            width: 13,
                            backgroundColor: 'black',
                            borderRadius: 40,
                        }}/>
                        <View style={{
                            marginHorizontal: 15,
                            marginVertical:5
                        }}>
                            <Text style={{fontSize: 15, color: 'black'}}>{inMatch.title}</Text>
                        </View>
                    </View>
                )
            })
        }

        </View>
    );
}
export default SummaryNews
const styles = StyleSheet.create({})
