import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import Card from "./component/card";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";

const Series = ({data}: any) => {
    return (
        <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                // marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 10,

            }}
            style={{
                height: 250,
                // backgroundColor: 'red'
            }}
            ItemSeparatorComponent={() => (
                <View style={{width: 10}}/>
            )}
            /*            ListFooterComponent={() => {
                            return <View style={{
                                width: 50,
                                height: 220,
                                elevation: 3,
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                marginLeft: 10,
                                borderRadius: 15,
                                marginRight: 20,

                            }}>
                                <TouchableOpacity activeOpacity={0.7} style={{
                                    width: 50,
                                    height: 50,
                                    borderWidth: .3,
                                    borderColor: '#00ff94',
                                    left: 20,

                                    borderRadius: 50,
                                    backgroundColor: 'white',
                                    elevation: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <GoogleIcon name={'more-vert'} size={30} color={'gray'}/>
                                </TouchableOpacity>
                            </View>
                        }}*/
            renderItem={useMemo(() => {
                return Card;
            }, [])}/>
    )
}
export default Series
