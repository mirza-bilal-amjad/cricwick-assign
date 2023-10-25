import {Dimensions, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {WebView} from "react-native-webview";

const WebViewComp = ({item, height}: any) => {
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
        <View style={{
            flex: 1,
            justifyContent: 'center',
            // width: Dimensions.get('window').width - 20,
            marginHorizontal: 10,
        }}>
            <WebView
                style={{
                    // flex: 1,
                    backgroundColor: '#f3f3f3',
                    // height: 300,
                }}
                originWhitelist={['*']}
                source={{html: htmlComp(item.body)}}/>
            {/*<Text style={{color: 'black'}}>{item.body}</Text>*/}
        </View>
    )
}
export default WebViewComp
const styles = StyleSheet.create({})
