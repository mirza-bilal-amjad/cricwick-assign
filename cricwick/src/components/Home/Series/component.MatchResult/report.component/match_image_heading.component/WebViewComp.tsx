import {Dimensions, Linking, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {WebView} from "react-native-webview";
import RenderHTML from "react-native-render-html";

const WebViewComp = ({item, height}: any) => {
    const handleNavigation = (event) => {
        const {url} = event;
        if (url.startsWith('http')) {
            // Open links starting with "http" in external browser
            Linking.openURL(url);
            return false; // Return false to prevent loading in WebView
        }
        return true; // Allow other URLs to load in WebView
    };
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
                    color: 'black',
                    fontSize: 15,
                }}
                contentWidth={Dimensions.get('window').width}
                source={{html: htmlComp(item.body)}}/>
            {/*<Text style={{color: 'black'}}>{item.body}</Text>*/}
        </ScrollView>
    );
}
export default WebViewComp
const styles = StyleSheet.create({})
