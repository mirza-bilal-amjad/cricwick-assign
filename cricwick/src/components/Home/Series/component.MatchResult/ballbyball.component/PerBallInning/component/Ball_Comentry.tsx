import {View, Text} from 'react-native'
import React from 'react'

const BallCommentary = ({item}: any) => {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 1.5,
            padding: 10,
            alignItems: 'center'
        }}>
            <View style={{
                justifyContent: 'center', alignItems: 'center',
            }}>
                <View style={{
                    width: 50, height: 50, borderWidth: 1, borderRadius: 40,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: item?.boundary_6 ? '#07a072' : item?.boundary_4 ? '#f5a623' : item?.wicket ? '#f23' : '#fff',
                    borderColor: item?.boundary_6 ? '#07a072' : item?.boundary_4 ? '#f5a623' : item?.wicket ? '#f23' : '#000'
                }}>
                    <Text style={{
                        fontSize: 20,
                        paddingHorizontal: 5,
                        color: item?.boundary_6 ? '#fff' : item?.boundary_4 ? '#fff' : item?.wicket ? '#fff' : '#000'
                    }}>{item?.wicket ? 'Out' : item?.wide_ball ? item?.runs_scored + 'wd' : item?.runs_scored}</Text>
                </View>
                <Text style={{
                    fontSize: 12,
                    color: '#000'
                }}>{item?.title}</Text>
            </View>
            <View style={{
                width: '100%',
                marginHorizontal: 10
            }}>
                <Text style={{
                    fontSize: 12,
                    color: 'black',
                }}>{item?.commentary}</Text>
            </View>
        </View>
    )
}
export default BallCommentary
