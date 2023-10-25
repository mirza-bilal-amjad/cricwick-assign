import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo} from 'react'
import SummaryMatches from "./component/SummaryMatches";
import SummaryVideos from "./component/SummaryVideos";
import SummaryNews from "./component/SummaryNews";
import SummaryArticle from "./component/SummaryArticle";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
// @ts-ignore
import MatchHomeIcon from '../../../../../assets/Images/match_home.png'
// @ts-ignore
import VideoIcon from '../../../../../assets/Images/video_icon.png'
import {useNavigation} from "@react-navigation/native";

const SummaryCard = ({match, navigation}: any) => {

    return (
        <View style={{
            marginHorizontal: 10,
            backgroundColor: 'white'
        }}>
            <View style={{
                borderBottomWidth: .2,
                borderBottomColor: '#d7d7d7'
            }}>
                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>{match.title}</Text>
                    <GoogleIcon name={'arrow-forward-ios'} size={15} color={'black'}/>
                </View>

            </View>

            {/*RESULTS*/}
            {match.data && match.data.length > 0 &&
                match.data.map((item: any, index: number) => {

                    switch (item.type) {
                        case 'match_object':
                            return item.data !== null &&
                                <SummaryMatches match={item.data} key={index} navigation={navigation}/>;
                        case 'videos':
                            return item.data !== null && item.data.length > 0 &&
                                <SummaryVideos match={item.data} key={index} navigation={navigation}/>;
                        case 'news':
                            return item.data !== null && item.data.length > 0 &&
                                <SummaryNews match={item.data} key={index} navigation={navigation}/>;
                        case 'articles':
                            return item.data !== null && item.data.length > 0 &&
                                <SummaryArticle match={item.data} key={index} navigation={navigation}/>;
                        default:
                            return null;
                    }
                })
            }
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <TouchableOpacity activeOpacity={.5} style={{
                    borderColor: '#d7d7d7',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '50%',
                    justifyContent: 'center'

                }}>
                    <Image source={MatchHomeIcon} style={{
                        width: 18, resizeMode: 'contain', tintColor: 'gray',
                        left: 10

                    }}/>
                    <Text style={{fontSize: 15, padding: 15, fontWeight: '700', color: 'gray'}}>Match Home</Text>
                </TouchableOpacity>

                {match.series_obj && match.series_obj.is_videos_enabled && <TouchableOpacity activeOpacity={.5} style={{
                    alignItems: 'center',
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Image source={VideoIcon} style={{
                        width: 18, resizeMode: 'contain', tintColor: 'gray',
                        left: 10

                    }}/>
                    <Text style={{fontSize: 15, padding: 15, fontWeight: '700', color: 'gray'}}>Video</Text>
                </TouchableOpacity>}
            </View>
        </View>
    );
}
export default memo(SummaryCard)
const styles = StyleSheet.create({})