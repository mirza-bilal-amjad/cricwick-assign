import {View, Text, FlatList} from 'react-native'
import React, {useState} from 'react'
import PerBallComponent from "./PerBallInning/PerBallComponent";
import Match__Graph from "./Carousel/Match_&_Graph";

const MrBallbyBallComponent = ({matchFormat, graphData, matchData, oversData, callBackFetch}: any) => {

    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'white',
        }}>
            {matchData &&
                <View style={{
                    flex: .5,
                }}>
                    <Match__Graph matchFormat={matchFormat} data={matchData} graphData={graphData}/>
                </View>
            }
            {oversData &&
                <FlatList
                    data={oversData}

                    style={{
                        flex: 1,
                    }}
                    renderItem={
                        ({item}: any) => {
                            return (
                                <PerBallComponent data={item.balls} title={item.title}/>
                            )
                        }
                    } keyExtractor={(item: any, index) => index.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={callBackFetch}
                    ItemSeparatorComponent={
                        () => {
                            return (
                                <View style={{height: 1,}}/>
                            )
                        }
                    }
                />
            }
        </View>
    );
}
export default MrBallbyBallComponent
