import {FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'
import Card from "./component/card";
import {SwiperFlatList} from "react-native-swiper-flatlist";

const VideoCarousel = ({data}: any) => {
    return (
        <SwiperFlatList
            snapToAlignment={'center'}
            paginationDefaultColor={'#ccc'}
            maxToRenderPerBatch={1}
            initialNumToRender={1}

            paginationActiveColor={'#c22026'}
            decelerationRate={'fast'}
            index={0}

            paginationStyleItem={{
                width: 7,
                height: 7,
                marginHorizontal: 2,
                top: 10,
                borderRadius: 5,
                padding: 0,
            }}
            showPagination={true}
            keyExtractor={
                (item, index) => index.toString()
            }
            data={data}
            renderItem={useMemo(() => {
                return Card
            }, [])}
        />

    );
}
export default VideoCarousel
const styles = StyleSheet.create({})
