import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {WebView} from 'react-native-webview';

const ImageHeading = ({item}: any) => {

    return (
        <View style={{}}>
            <View>
                <Image source={{uri: item.full_image}} style={{
                    width: Dimensions.get('screen').width,
                    aspectRatio: 16 / 9
                }}/>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    width: '80%',
                    marginHorizontal: 10,
                    marginVertical: 5
                }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray'}}>By {item.by}</Text>
                </View>
                <TouchableOpacity activeOpacity={.8} style={{
                    marginHorizontal: 10
                }}>
                    <GoogleIcon name={'share'} size={20} color={'gray'}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ImageHeading
const styles = StyleSheet.create({})
