import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import {getTimeSpan} from "../../../utils/method";
import {WebView} from "react-native-webview";
import {useNavigation} from "@react-navigation/native";

const ArticleCard = ({item, index}: any) => {
    const navigation = useNavigation();
    const htmlComp = (textParagraph: any) => {
        return (
            `<html>
             <head>
                <style>
                    body {
                        /*font-family: Poppins, sans-serif;*/         
                        color: #333;
                        scrollbar-width: none;
                    }
                    .highlighted {
                        background-color: yellow;
                    }
                    p {
                        overflow: auto;
                        font-size: 1.8rem;
                    }
                    h2 {
                        font-size: 2.5rem;
                    } 
                    h3 {
                        font-size: 2.5rem;
                    }
                </style>
            </head>
            <body>
            ${textParagraph}
            </body>
            </html>`
        )
    }
    const handleNavigation = (event: any) => {
        const {url} = event;
        if (url.startsWith('http')) {
            Linking.openURL(url);
            return false;
        }
        return true;
    };
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() =>
                //@ts-ignore
                navigation.navigate('Articles', {
                    articleId: item?.id,
                    showCrossButton: false,
                })
            }
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                backgroundColor: 'white',
                /*borderRadius: 10,
                overflow: 'hidden',*/
            }}>
            <View style={{
                width: '100%',
                aspectRatio: 16 / 9,
                flex: 1,
            }}>
                <Image style={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                }}
                       source={{uri: item?.image}}
                />
                <LinearGradient
                    colors={[
                        'transparent',
                        'rgba(0,0,0,0.1)',
                        'rgba(0,0,0,0.3)',
                        'rgba(0,0,0,0.9)',
                    ]}
                    style={{
                        width: '100%',
                        aspectRatio: 16 / 9,
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        position: 'absolute',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',

                    }}>
                    <Text style={{
                        color: 'white',
                    }}>{
                        item?.title.length > 50 ? item?.title.slice(0, 50) + '...' : item?.title
                    }</Text>
                    <Text style={{
                        color: '#e1e1e1',
                        fontSize: 10,
                    }}>{item?.by + ' | '}{
                        getTimeSpan(item?.created_at)
                    }</Text>
                </LinearGradient>


            </View>
            <View style={{
                flex: 1,
                width: '100%',
                height: 70,
                padding: 5,
            }}>
                <WebView
                    onShouldStartLoadWithRequest={handleNavigation}

                    originWhitelist={['*']}
                    source={{html: htmlComp(item?.body)}}
                />
            </View>
        </TouchableOpacity>
    );
}
export default ArticleCard
