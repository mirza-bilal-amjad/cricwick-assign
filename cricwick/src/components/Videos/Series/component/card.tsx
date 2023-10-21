import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native'
import React from 'react'
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

const Card = ({item}: any) => {
    return (
        <TouchableOpacity
            style={{
                width: 250,
                // height: 200,
                elevation: 3,
                // alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',


            }}
            activeOpacity={0.8}
        >
            <View style={{
                height: '65.5%',
                aspectRatio: 16 / 9,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 14

            }}>
                <IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
                    backgroundColor: 'rgba(0,0,0,.5)',
                    borderRadius: 50,
                }}/>
            </View>
            <Image source={{uri: item.data[0].thumb}} style={{
                width: '100%',
                aspectRatio: 16 / 9,

            }}/>
            <View style={{
                marginTop: 5,
                marginBottom: 7,

            }}>
                <Text style={{
                    color: 'black',
                    marginHorizontal: 10,
                    marginVertical: 5,
                    fontSize: 14.5,
                    fontWeight: 'bold'
                }}>{item['data'][0].title.length > 27 ? item['data'][0].title.slice(0, 27) + '...' : item['data'][0].title}</Text>
                <Text style={{
                    color: 'gray',
                    marginHorizontal: 10,
                    fontSize: 10.5,

                }}>{item['data'][0].description.length > 43 ? item['data'][0].description.slice(0, 43) + '...' : item['data'][0].description}</Text>
                <Text style={{
                    color: 'gray',
                    marginHorizontal: 10,
                    fontSize: 10.5,
                    marginVertical: 2.5
                }}>{new Date(item['data'][0].created_at).toDateString()}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default Card
const styles = StyleSheet.create({})
