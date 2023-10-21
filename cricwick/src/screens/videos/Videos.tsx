import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {MainVideoContainer} from "../../components";
import {fetchVideos} from "../../utils/serverfetch/fetchBackend";
import videoCarousel from "../../components/Videos/Carousel/VideoCarousel";

const Videos = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [refreshing, setRefreshing] = useState(true);
    const [videosData, setVideosData] = useState([])

    const returnApi = (pageNumber: number) => {
        return `https://cwscoring.cricwick.net/api/v4/video_lists?page=${pageNumber}&app_name=CricwickWeb`
    }
    const fetch = async () => {
        setRefreshing(true);

        await fetchVideos(returnApi(pageNumber)).then((r) => {
            if (r) {
                setPageNumber(prevState => prevState + 1)


                setVideosData((prevState: any): any => {
                    if (prevState.includes(r)) {
                        return prevState;
                    } else {
                        return [...prevState, ...r];
                    }
                });
            }
        }).then(() => setRefreshing(false)).catch((error) => {
            console.error(error)
        });
    }
    useEffect(() => {
        fetch()
    }, []);
    return (
        <MainVideoContainer item={videosData} refresh={refreshing} fetchCallBack={fetch}/>
    )
}
export default Videos
const styles = StyleSheet.create({})
