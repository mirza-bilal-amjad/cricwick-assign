import {Text, View} from 'react-native'
import React from 'react'
import TopBatsman from "./sub.component/topBatsman";
import AllRounder from "./sub.component/allRounder";
import TopBowler from "./sub.component/topbowler";

const T20 = ({route}: any) => {
    const {data} = route.params;
    const item = [].concat(data['t20']);
   /* const renderItem = useMemo(
        () => {
            return ({item}: any) => (
                <View style={{
                    backgroundColor: 'white',
                    // padding: 10,

                }}>
                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top
                        Batsmen</Text>
                    <TopBatsman item={item.batsmen}/>

                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top Bowlers</Text>
                    <TopBowler item={item.bowler}/>

                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top All-Rounders</Text>
                    <AllRounder item={item.all_rounder}/>
                </View>
            )
        }, []
    );*/

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',

        }}>
            {item && item.map((item: any, index: number) => {
                return (
                    <View key={index} style={{
                        backgroundColor: 'white',
                    }}>
                        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top
                            Batsmen</Text>
                        <TopBatsman item={item.batsmen}/>

                        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top
                            Bowlers</Text>
                        <TopBowler item={item.bowler}/>

                        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10}}>Top
                            All-Rounders</Text>
                        <AllRounder item={item.all_rounder}/>
                    </View>
                )
            })
            }
        </View>
    );
};
export default T20
