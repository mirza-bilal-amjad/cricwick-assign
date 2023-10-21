import {Dimensions, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ImageHeading from "./match_image_heading.component/ImageHeading";
import WebViewComp from "./match_image_heading.component/WebViewComp";

const MatchResultReportComponent = ({item}: any) => {
    return (
        <View style={{
            flex: 1,
        }}>
            {item.match_report.large_image && item.match_report.title &&
                <ImageHeading item={item.match_report}/>}
            {item.match_report.body && <WebViewComp item={item.match_report} height={
                Dimensions.get('screen').height - 465}/>}
        </View>
    );
}
export default MatchResultReportComponent
const styles = StyleSheet.create({})
