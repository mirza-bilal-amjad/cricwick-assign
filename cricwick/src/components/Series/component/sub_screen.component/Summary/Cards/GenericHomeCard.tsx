import {View, Text} from 'react-native'
import React from 'react'
import News from "./sub-component/generic-home-comp/news";
import Video from "./sub-component/generic-home-comp/video";
import Article from "./sub-component/generic-home-comp/article";

const GenericHomeCard = ({item, navigation}: any) => {

    switch (item?.sub_type) {
        case 'news':
            return <News item={item?.data} navigation={navigation}/>;
        case 'video':
            return <Video item={item?.data} navigation={navigation}/>;
        case 'article':
            return <Article item={item?.data} navigation={navigation}/>;
        default:
            return null;
    }
}
export default GenericHomeCard
