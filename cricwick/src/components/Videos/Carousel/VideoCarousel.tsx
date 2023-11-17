import {StyleSheet} from 'react-native'
import React, {useMemo} from 'react'
import Card from "./component/card";
import {SwiperFlatList} from "react-native-swiper-flatlist";

const VideoCarousel = ({data, listID, seriesID, label,navigation}: any) => {

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
                return ({item}: any) => <Card item={item} listID={listID} seriesID={seriesID} label={label} navigation={navigation}/>;
            }, [listID, seriesID, label, navigation])}
        />

    );
}
export default VideoCarousel
const styles = StyleSheet.create({})
