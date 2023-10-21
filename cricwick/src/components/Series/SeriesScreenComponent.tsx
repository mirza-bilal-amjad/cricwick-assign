import {FlatList, View} from 'react-native'
import React, {memo, useMemo} from 'react'
import {OnGoingCard, ResultCard, UpcomingCard} from "./component";
import {useNavigation} from "@react-navigation/native";

const SeriesScreenComponent = ({data, screenType, callBackFunc}: any) => {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={data}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                getItemLayout={(data, index) => (
                    {length: 70, offset: 70 * index, index}
                )}
                onEndReachedThreshold={.5}
                onEndReached={callBackFunc}
                renderItem={useMemo(() => {
                    switch (screenType) {
                        case 'ongoing':
                            return ({item}) => <OnGoingCard item={item} screenType={screenType}
                                                            navigation={navigation}/>

                        case 'upcoming':
                            return ({item}) => <UpcomingCard item={item} screenType={screenType}
                                                             navigation={navigation}/>

                        case 'result':
                            return ({item}) => <ResultCard item={item} screenType={screenType}
                                                           navigation={navigation}/>
                        default:
                            return null;
                    }
                }, [screenType, navigation])}
                ItemSeparatorComponent={() => <View style={{height: 4}}/>}
            />
        </View>
    );
};
export default memo(SeriesScreenComponent)
