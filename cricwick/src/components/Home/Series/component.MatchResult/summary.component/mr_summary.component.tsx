import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  ODITeamVsTeam,
  T20TeamVsTeam,
  TestTeamVsTeam,
} from './team_vs_team.component';
import {ODIManOfTheMatch, T20ManOfTheMatch} from './man_of_the_match.component';
import {ODIBowlers, T20Bowlers, TestBowlers} from './bowlers.component';
import {ODIBatsmen, T20Batsmen, TestBatsmen} from './batsman.component';
import LiveBallByBallComponent from './LiveBallByBall/LiveBallByBallComponent';

const MrSummaryComponent = ({
  match,
  articles,
  overs,
  index,
  navigation,
  callBackFetch,
}: any) => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      {/*Team Vs Team Component*/}
      {match &&
        match?.format === 'ODI' &&
        match?.match_state !== 'Scheduled' && (
          <ODITeamVsTeam item={match} index={index} />
        )}
      {match &&
        (match?.format === 'T20i' || match?.format === 'T20') &&
        match?.match_state !== 'Scheduled' && <T20TeamVsTeam item={match} />}
      {match &&
        match?.format === 'Test' &&
        match?.match_state !== 'Scheduled' && <TestTeamVsTeam item={match} />}
      {/*Batsmen Component*/}
      {match &&
        match?.format === 'ODI' &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && <ODIBatsmen item={match?.partnership} />}
      {match &&
        (match?.format === 'T20i' || match?.format === 'T20') &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && <T20Batsmen item={match?.partnership} />}
      {match?.format === 'Test' &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && (
          <TestBatsmen item={match?.partnership} />
        )}

      {/*Bowlers Component*/}

      {match?.format === 'ODI' &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && <ODIBowlers item={match?.partnership} />}
      {(match?.format === 'T20i' || match?.format === 'T20') &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && <T20Bowlers item={match?.partnership} />}
      {match?.format === 'Test' &&
        match?.match_state !== 'Scheduled' &&
        match?.partnership !== null && (
          <TestBowlers item={match?.partnership} />
        )}
      {/*Man Of the Match*/}

      {match?.format === 'ODI' &&
        match?.match_state !== 'Scheduled' &&
        match?.manOfMatch && <ODIManOfTheMatch item={match?.manOfMatch} />}
      {match?.format === 'T20' &&
        match?.match_state !== 'Scheduled' &&
        match?.manOfMatch && <T20ManOfTheMatch item={match?.manOfMatch} />}
      {match?.format === 'Test' &&
        match?.match_state !== 'Scheduled' &&
        match?.manOfMatch && <T20ManOfTheMatch item={match?.manOfMatch} />}

      {/*Live Ball By Ball*/}
      {match?.match_state === 'Live' && (
        <View
          style={{
            marginTop: -10,
          }}>
          <LiveBallByBallComponent item={overs} callBackFetch={callBackFetch} />
        </View>
      )}

      {/*Article*/}
      {articles.length > 0 && (
        <View
          style={{
            backgroundColor: 'white',
            marginVertical: -5,
            marginHorizontal: 10,
            paddingVertical: 5,
            paddingHorizontal: 7.5,
          }}>
          {articles &&
            articles.map((inItem: any, index: number) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Articles', {
                    articleId: inItem?.id,
                    matchId: match?.id,
                  })
                }
                activeOpacity={0.7}
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 2.5,
                  borderBottomWidth: index % 2 === 0 ? 0.2 : 0,
                  borderColor: 'gray',
                }}>
                <View
                  style={{
                    width: 145,
                  }}>
                  <Image
                    source={{uri: inItem.large_image}}
                    style={{
                      width: 140,
                      aspectRatio: 16 / 9,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    width: Dimensions.get('screen').width - 170,
                    paddingHorizontal: 5,
                    paddingVertical: 2.5,
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                    {inItem.title}
                  </Text>
                  <Text
                    style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>
                    {inItem.by}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </ScrollView>
  );
};
export default MrSummaryComponent;
const styles = StyleSheet.create({});
