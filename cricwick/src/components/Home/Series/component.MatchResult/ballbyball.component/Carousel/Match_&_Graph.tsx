import {View, Text} from 'react-native'
import React from 'react'
import {SwiperFlatList} from "react-native-swiper-flatlist";
import LineChartComp from "./component/LineChartComp";
import Match from "./component/Match";

const MatchGraphicComp = ({matchFormat, data, graphData}: any) => {
    console.log('MatchGraphicComp', data[0].id)
    const carouselData = [
        {
            id: 0,
            component: () => <Match  item={data}/>
        },
        {
            id: 1,
            component: () => <LineChartComp matchFormat={matchFormat} item={graphData}/>
        }
    ];
    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'white',
            // backgroundColor: 'pink',

        }}>
            <SwiperFlatList
                snapToAlignment={'center'}
                paginationDefaultColor={'#ccc'}
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
                keyExtractor={(item, index) => index.toString()}
                data={carouselData}
                renderItem={({item}) => <View style={{flex: 1}}>{item.component()}</View>
                }/>
        </View>
    );
}
export default MatchGraphicComp
