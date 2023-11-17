import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native'
import React, {useMemo} from 'react'
import {GenericHome, Rankings, Series, VideoContainerVertical} from "../../index";

import {Callback} from "@react-native-async-storage/async-storage/lib/typescript/types";

const HomeScreenComponent = ({data, fetchHome}: { data: any, fetchHome: Callback }) => {
	const renderItem = useMemo(() => {
		return ({item}: any) => {

			if (item.type === 'native_screen' && item.data) {// console.log('native-screen')
				return <View style={[styles.itemContainer, {}]}>
					<View style={[styles.thumbnailView,]}>
						<Image style={[styles.thumbnail, {height: 120}]} source={{uri: item.data.thumbnail}}/>
					</View>
				</View>;
			} else if (item.type === 'generic-home') {
				return item.data !== null && item.data && <GenericHome item={item}/>;
			} else if (item.type === 'series' && item.data) {
				return <Series item={item}/>;
			} else if (item.type === 'video' && item.data) {
				return <VideoContainerVertical item={item.data}/>;
			} else if (item.type === 'ranking' && item) {
				return <Rankings item={item}/>;
			} else return null;
		}
	}, []);

	// @ts-ignore
	return (
		<FlatList
			data={data}
			contentContainerStyle={{
				width: Dimensions.get('screen').width,
				paddingBottom: 10
			}}

			ItemSeparatorComponent={() => (
				<View style={{height: 10}}></View>
			)}
			// @ts-ignore
			onEndReached={fetchHome}
			onEndReachedThreshold={0.1}
			keyExtractor={(key, index) => key + index.toString()}
			renderItem={renderItem}
		/>
	)
};
export default HomeScreenComponent


const styles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 10,
		// borderWidth: 1,
		backgroundColor: 'white',
		overflow: 'hidden',
		// elevation: 4,
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
});
