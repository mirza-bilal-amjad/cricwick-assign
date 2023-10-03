import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {ArticleComponent, MatchesComponent, NewsComponent} from "../../index";

const Series = ({item}: any) => {
    return (
        <View style={
            [styles.itemContainer, {
                borderRadius: 15,
            }]
        }>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
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
                </TouchableOpacity>
                <View>
                    {
                        item.data.sort((a: any, b: any) => b.type.localeCompare(a.type)).map(
                            (item: any) => {
                                const lent = item.data.length;
                                switch (item.type) {
                                    case 'news':
                                        return (
                                            <FlatList
                                                data={item.data} key={item.type} bounces
                                                style={{
                                                    borderTopWidth: .2,
                                                    borderColor: '#d0d0d0',
                                                }}
                                                renderItem={({item, index}: any) => (
                                                    <NewsComponent index={index} item={item} dataLength={lent}/>
                                                )
                                                }/>
                                        )
                                    case 'matches':
                                        return (
                                            <FlatList
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
                                                renderItem={({item}: any) => (
                                                    <MatchesComponent item={item}/>
                                                )}/>
                                        );
                                    case 'article':
                                        return (
                                            <FlatList
                                                data={item.data} key={item.type}
                                                style={{
                                                    // borderBottomWidth: .2,
                                                    borderTopWidth: .2,
                                                    borderColor: '#d0d0d0',
                                                }}
                                                contentContainerStyle={{
                                                    flexDirection: 'column',
                                                }}
                                                renderItem={({item}: any) => (
                                                    <ArticleComponent item={item}/>
                                                )}/>
                                        )

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
                    paddingHorizontal: 15,
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
    )
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
        borderRadius: 14
    },
    title: {
        fontSize: 12.5,
        color: 'black',
        marginTop: 10,
    },
})
