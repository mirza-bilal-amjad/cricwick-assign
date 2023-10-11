import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import {ArticleComponent, MatchesComponent, NewsComponent, VideoComponent} from "../../index";
import IonIcon from "react-native-vector-icons/Ionicons";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import {getNumOfCharacters} from "../../../utils/method";

const Series = ({item}: any) => {
    const [componentWidth, setComponentWidth] = React.useState(0);
    const onLayout = (event: any) => {
        const {width} = event.nativeEvent.layout;
        setComponentWidth(width);
    };
    return (
        <View style={
            [styles.itemContainer, {
                // borderRadius: 15,
            }]
        }>
            <View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                        borderBottomWidth: .2,
                        borderColor: '#d0d0d0',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 10,
                    }}
                >
                    <Text style={[{
                        fontSize: 18,
                        color: 'black',
                        paddingHorizontal: 10,
                        fontWeight: 'bold',
                        marginVertical: 10,
                    }]}>
                        {item.title}
                    </Text>
                    <GoogleIcon name={'arrow-forward-ios'} size={20} color={'black'}/>
                </TouchableOpacity>
                <View>
                    {
                        item.data.sort((a: any, b: any) => b.type.localeCompare(a.type)).map(
                            (item: any) => {
                                const lent = item.data.length;
                                switch (item.type) {
                                    case 'news':
                                        return (
                                            item.data && <FlatList
                                                data={item.data} key={item.type} bounces
                                                style={{
                                                    borderTopWidth: .2,
                                                    borderColor: '#d0d0d0',
                                                }}
                                                renderItem={useMemo(() => {
                                                    return ({item, index}: any) => (
                                                        <NewsComponent index={index} item={item} dataLength={lent}/>
                                                    )
                                                }, [])}/>
                                        )
                                    case 'matches':
                                        return (
                                            item.data && <FlatList
                                                data={item.data} key={item.type}
                                                contentContainerStyle={{
                                                    flexDirection: 'column',
                                                }}
                                                style={{
                                                    borderTopWidth: .2,
                                                    borderColor: '#d0d0d0',
                                                }}
                                                ItemSeparatorComponent={() => (
                                                    <View style={{
                                                        borderTopWidth: .2,
                                                        borderColor: '#d0d0d0',
                                                        height: 0
                                                    }}></View>
                                                )}
                                                renderItem={useMemo(() => {
                                                    return ({item}: any) => (
                                                        <MatchesComponent item={item}/>
                                                    )
                                                }, [])}/>
                                        );
                                    case 'article':
                                        return (
                                            item.data && <FlatList
                                                data={item.data} key={item.type}
                                                style={{
                                                    // borderBottomWidth: .2,
                                                    borderTopWidth: .2,
                                                    borderColor: '#d0d0d0',
                                                }}
                                                contentContainerStyle={{
                                                    flexDirection: 'column',
                                                }}
                                                renderItem={useMemo(() => {
                                                    return ({item}: any) => (
                                                        <ArticleComponent item={item}/>
                                                    )
                                                }, [])}/>
                                        )
                                    case 'videos':
                                        return (
                                            item.data && <View key={item.type}>
                                                {item.data[0] && <View style={[styles.itemContainer, {
                                                    // borderRadius: 15,
                                                    marginVertical: 10,
                                                }]}>
                                                    <View style={[styles.thumbnailView]}>
                                                        <Image style={[{
                                                            width: '100%',
                                                        }, {height: 220}]}
                                                               source={{uri: item.data[0].thumb}}/>
                                                        <TouchableOpacity
                                                            style={{
                                                                position: 'absolute',
                                                                width: '100%',
                                                                zIndex: 10,
                                                                height: '100%',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }}
                                                            activeOpacity={.7}
                                                        >
                                                            <IonIcon name={'play-circle-outline'} size={40}
                                                                     color={'white'} style={{
                                                                backgroundColor: 'rgba(127,127,127,.5)',
                                                                borderRadius: 50,
                                                            }}/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        width: '100%'
                                                    }}>
                                                        <Text onLayout={onLayout} style={[styles.title, {
                                                            paddingHorizontal: 10,
                                                            fontWeight: '500'
                                                        }]}>
                                                            {item.data[0].title.slice(0, getNumOfCharacters(componentWidth)) + '...'}
                                                        </Text>
                                                        <Text style={[styles.title2, {
                                                            paddingHorizontal: 10,
                                                        }]}>
                                                            {item.data[0].match_obj.title} - {item.data[0].match_obj.team_1} vs {item.data[0].match_obj.team_2}
                                                        </Text>
                                                    </View>
                                                </View>}
                                                <FlatList
                                                    data={item.data}
                                                    horizontal={true}
                                                    style={{
                                                        // borderBottomWidth: .2,
                                                        flexDirection: 'row',

                                                        borderTopWidth: .2,
                                                        borderColor: '#d0d0d0',
                                                    }}
                                                    renderItem={useMemo(() => {
                                                        return ({item, index}: any) => (
                                                            item && index > 0 && <VideoComponent item={item}/>
                                                        )
                                                    }, [])}/>
                                            </View>
                                        );

                                    default:
                                        return null;
                                }
                            }
                        )
                    }


                </View>
            </View>
            {
                item.series_obj &&
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    borderTopWidth: 0.2,
                    borderColor: '#d0d0d0',
                    justifyContent: 'space-around'
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text style={{
                            fontSize: 13.5,
                            color: 'gray',
                            fontWeight: '600'
                        }}>Series Home</Text>
                    </View>
                    {item['series_obj'].has_points_table && <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        {/*<Image source={item['series_obj'].mini_logo_url}
                               style={{
                                   width: 20,
                                   height: 20,
                                   resizeMode: 'contain',
                                   marginHorizontal: 5,
                               }}/>*/}
                        <GoogleIcon name={'smart-display'} size={20} color={'gray'} style={{
                            paddingHorizontal: 3
                        }
                        }/>
                        <Text style={{
                            fontSize: 13.5,
                            color: 'gray',
                            fontWeight: '600'
                        }}>Points Table</Text>
                    </View>}
                    {item['series_obj'].fantasy_gm_allowed && <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        {/*   <Image source={item['series_obj'].mini_logo_url}
                               style={{
                                   width: 20,
                                   height: 20,
                                   resizeMode: 'contain',
                                   marginHorizontal: 5,
                               }}/>*/}
                        <Text style={{
                            fontSize: 13.5,
                            color: 'gray',
                            fontWeight: '600'
                        }}>Fantasy</Text>
                    </View>
                    }
                </View>}
        </View>
    );
}
export default Series
const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    thumbnailView: {
        width: '100%',
        alignItems: 'center',
    },
    thumbnail: {
        width: '100%',
        // borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
    title2: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 2,
    },
})
