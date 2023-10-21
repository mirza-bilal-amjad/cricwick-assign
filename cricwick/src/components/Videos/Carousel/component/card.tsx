import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import React, {useMemo} from 'react'

const Card = ({item}: any) => {
    return (
        <View style={{
            flex: 1,
            height: 250,
            marginHorizontal: 10,
        }}>
            <Image source={{uri: item['data'][0].thumb}} style={{
                width: Dimensions.get('window').width - 20,
                aspectRatio: 16 / 9,
                borderRadius: 14.5,

            }}/>
        </View>
    );
}
export default Card
const styles = StyleSheet.create({})
