import {LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RootNavigator} from "./navigation";
const App = () => {
    useEffect(() => {
        LogBox.ignoreLogs(['Invalid prop `textStyle` of type `array` supplied to `Cell`'])
    }, []);
    return (
        <RootNavigator/>
    );
};
export default App;
const styles = StyleSheet.create({});
