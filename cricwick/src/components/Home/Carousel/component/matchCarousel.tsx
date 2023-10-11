import {Animated, Dimensions, Text, View} from 'react-native'
import React, {PureComponent, useEffect, useMemo, useRef} from 'react'
import {SwiperFlatList} from "react-native-swiper-flatlist";
import LottieView from "lottie-react-native";
import {LiveAnim} from "../../../../assets";
import {Live, Scheduled} from "../index";

const MatchCarousel = ({data}: any) => {
    const renderItem = useMemo(() => {

        return ({item}: any) => {
            const match = data[`l_m_${item}`];
            let inning = data[`l_i_${item}`];

            return (
                <View style={{
                    height: 230,
                    width: Dimensions.get('window').width - 20,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                }}>
                    <View style={{
                        height: 215,
                        width: '100%',
                        // padding: 15,
                    }}>
                        <View style={{
                            position: 'absolute',
                            top: 10,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            zIndex: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: match.match_state === 'Live' ? '#d50000' : 'transparent',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                        }}>
                            {match.match_state === 'Live' && <LottieView
                                source={LiveAnim}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginLeft: -8,
                                }}
                                autoPlay
                                loop
                                speed={1.5}
                                colorFilters={[
                                    {
                                        keypath: "Shape Layer 1",
                                        color: "#fff"
                                    }]}
                            />}
                            <Text style={{
                                color: match.match_state === 'Live' ? 'white' : 'black',
                                fontSize: 15,
                                fontWeight: '900',
                            }}>{match.match_state === 'Live' && match.break_type ? match.break_type : match.match_state === 'Live' && !match.break_type ? 'Live' : 'Upcoming'}</Text>

                        </View>
                        {match.match_state === 'Live' ?
                            <Live match={match} inning={inning}/>
                            :
                            <Scheduled match={match} inning={inning}/>
                        }
                    </View>
                </View>
            );
        }
    }, [data]);

    return (
        <View style={{

            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white'
        }}>
            <SwiperFlatList
                snapToAlignment={'center'}
                data={data['l_m_ids']} renderItem={renderItem}
                paginationDefaultColor={'#ccc'}
                maxToRenderPerBatch={1}
                initialNumToRender={1}

                paginationActiveColor={'#c22026'}
                decelerationRate={'fast'}
                index={0}
                paginationStyleItem={{
                    width: 7,
                    height: 7,
                    marginHorizontal: 2,
                    borderRadius: 5,
                    padding: 0,
                }}
                showPagination={true}
                keyExtractor={
                    (item, index) => index.toString()
                }
            />
        </View>
    );
};


export default MatchCarousel
