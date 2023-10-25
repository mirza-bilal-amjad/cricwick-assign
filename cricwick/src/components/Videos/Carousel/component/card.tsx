import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'

const Card = ({item, listID, seriesID, label, navigation}: any) => {

    return (
        <View>
            {
                item.data.length > 0 && item.data.map((inItem: any, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}

                            activeOpacity={.8} style={{
                            flex: 1,
                            height: 250,
                            marginHorizontal: 10,
                        }}>
                            <Image key={index} source={{uri: item['data'][0].thumb}} style={{
                                width: Dimensions.get('window').width - 20,
                                aspectRatio: 16 / 9,
                                borderRadius: 14.5,

                            }}/>
                        </TouchableOpacity>)
                })
            }
        </View>
    );
}
export default Card
const styles = StyleSheet.create({})
