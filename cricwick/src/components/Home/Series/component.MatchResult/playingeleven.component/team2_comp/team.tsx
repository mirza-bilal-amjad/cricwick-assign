import {View, Text, Image, FlatList} from 'react-native'
import React from 'react'

const Team = ({route}: any) => {
    const {team} = route.params;


    const TeamCard = ({item}: any) => {
        let date = item.player.birth_date;
        date = date.replace(/\//g, '-');
        // try different mentho to find age from date of birth
        let age = Math.floor((new Date().getTime() - new Date(date).getTime()) / 3.15576e+10);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: 'white'
            }}>
                <View>
                    <Image
                        source={{uri: item.player.full_display_picture_url === null ? item.player.display_picture_url : item.player.full_display_picture_url}}
                        style={{width: 120, aspectRatio: 1, resizeMode: 'contain'}}/>
                </View>
                <View style={{
                    marginLeft: 10,
                    justifyContent: 'center'
                }}>
                    <View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
                        style={{color: 'black', fontWeight: 'bold'}}>{item.player.name}</Text></View>
                    <View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
                        style={{color: 'black', fontWeight: 'bold'}}>Age:</Text><Text
                        style={{color: 'black', fontWeight: '400'}}> {age}</Text></View>
                    <View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
                        style={{color: 'black', fontWeight: 'bold'}}>Playing
                        role:</Text><Text
                        style={{color: 'black', fontWeight: '400'}}> {item.player.playing_role}</Text></View>
                    <View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
                        style={{color: 'black', fontWeight: 'bold'}}>Batting:</Text><Text
                        style={{color: 'black', fontWeight: '400'}}> {item.player.batting_hand}</Text></View>
                    <View style={{flexDirection: 'row', marginVertical: 2.5}}><Text
                        style={{color: 'black', fontWeight: 'bold'}}>Bowling:</Text><Text
                        style={{color: 'black', fontWeight: '400'}}> {item.player.bowling_hand}</Text></View>
                </View>
            </View>
        );
    }
    return (
        <FlatList data={team} contentContainerStyle={{
            marginTop: 5
        }} ItemSeparatorComponent={
            () => <View style={{height: 5, backgroundColor: '#f3f3f3'}}/>
        } renderItem={TeamCard}/>
    )
};
export default Team
