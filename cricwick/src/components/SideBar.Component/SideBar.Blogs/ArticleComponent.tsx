import {Dimensions, StyleSheet, Text, View} from 'react-native'
import React, {useRef, useState} from 'react'
import ImageHeading
    from "../../Home/Series/component.MatchResult/report.component/match_image_heading.component/ImageHeading";
import WebViewComp
    from "../../Home/Series/component.MatchResult/report.component/match_image_heading.component/WebViewComp";

const ArticleComponent = ({item, isScrollEnabled}: any) => {

    return (
        <View style={{
            flex: 1
        }}>
            {item.large_image && item.title && <ImageHeading item={item}/>}
            {item.body && <WebViewComp  item={item}/>}
        </View>
    )
}
export default ArticleComponent
const styles = StyleSheet.create({})
