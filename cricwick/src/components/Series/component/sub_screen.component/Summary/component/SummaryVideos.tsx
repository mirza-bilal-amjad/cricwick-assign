import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";

const SummaryVideos = ({match, navigation}: any) => {
    return (
        <View style={{
            borderBottomWidth: .2,
            borderBottomColor: '#d7d7d7'
        }}>{
            match && match.map((inMatch: any, index: number) => {
                return (
                    <View key={index} style={{
                        margin: 10,
                        borderWidth: .2,
                        borderColor: '#d7d7d7'
                    }}>
                        <View>

                            <Image
                                source={{uri: inMatch.thumb}}
                                style={{
                                    width: '100%', aspectRatio: 16 / 9,
                                }}/>
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    zIndex: 10,
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                activeOpacity={.7}
                            >
                                <IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
                                    backgroundColor: 'rgba(127,127,127,.5)',
                                    borderRadius: 50,
                                }}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginHorizontal: 10,
                            marginVertical: 7
                        }}>
                            <Text style={{
                                fontSize: 15, marginVertical: 5,
                                fontWeight: '500', color: 'black'
                            }}>{inMatch.title}</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: 'gray'
                            }}>{inMatch.match_desc}</Text>
                        </View>
                    </View>
                )
            })
        }
        </View>

    )
}
export default SummaryVideos
const styles = StyleSheet.create({})
