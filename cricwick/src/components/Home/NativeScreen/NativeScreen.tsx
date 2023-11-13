import React, {memo} from "react";
import {Image, StyleSheet, View} from "react-native";

const NativeScreen = memo(function NativeScreen(props: { uri: any }) {
    return <View style={[styles.thumbnailView,]}>
        <Image style={[styles.thumbnail, {height: 120}]} source={{uri: props.uri}}/>
    </View>;
});
export default NativeScreen;


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