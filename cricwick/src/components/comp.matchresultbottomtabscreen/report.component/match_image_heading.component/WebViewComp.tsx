import {Dimensions, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import RenderHTML from "react-native-render-html";
import {useTheme} from "../../../../hooks";

const WebViewComp = ({item, height}: any) => {
    const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
    const {colors} = NavigationTheme;

    const htmlComp = (textParagraph: any) => {
        return (
            `<html>
            <head>
                <style>
                    body {
                    /*font-family: Poppins, sans-serif;*/
                    font-size: 2.5rem;
                    color: #333;
                    scrollbar-width: none;
                   
                }
                    .highlighted {
                    background-color: yellow;
                }
                p {
                    overflow: auto;
                }
                </style>
            </head>
            <body>
            ${textParagraph}
            </body>
            </html>`
        )
    }
    return (
        <ScrollView style={{
            flex: 1,
            marginHorizontal: 10,
        }}>
            <RenderHTML
                baseStyle={{
                    color: colors.text,
                    fontSize: 15,
                }}
                contentWidth={Dimensions.get('window').width}
                source={{html: htmlComp(item.body)}}/>
            {/*<Text style={{color: colors.text}}>{item.body}</Text>*/}
        </ScrollView>
    );
}
export default WebViewComp
const styles = StyleSheet.create({})
