import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";

const News = ({index, item, dataLength}: { index: number, item: any, dataLength: number }) => {
    const navigation = useNavigation();
    return (
        // @ts-ignore
        <TouchableOpacity onPress={()=> navigation.navigate('News',{
            newsID: item.id
        })} activeOpacity={.5} style={{
            padding: 10,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
            }}>
                <View style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center'
                }}><View
                    style={{
                        backgroundColor: 'black', width: 10, height: 10,
                        borderRadius: 20
                    }}></View>
                </View>
                <View style={{
                    width: '90%'
                }}>
                    <Text style={{color: 'black', fontSize: 15}}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};
export default News
const styles = StyleSheet.create({})
