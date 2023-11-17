import {StyleSheet, View} from 'react-native'
import React from 'react'
import {useTheme} from "../../hooks";
import ImageHeading
	from "../comp.matchresultbottomtabscreen/report.component/match_image_heading.component/ImageHeading";
import WebViewComp from "../comp.matchresultbottomtabscreen/report.component/match_image_heading.component/WebViewComp";

const ArticleComponent = ({item}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;
    return (
        <View style={{
            flex: 1
        }}>
            {item.large_image && item.title && <ImageHeading item={item}/>}
            {item.body && <WebViewComp item={item}/>}
        </View>
    )
}
export default ArticleComponent
const styles = StyleSheet.create({})
