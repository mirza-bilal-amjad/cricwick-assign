import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BallByBall = () => {
    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInUp" // Use the fadeInUp animation
                duration={1000} // Animation duration in milliseconds
                style={styles.animatedContainer}>
                <Text style={styles.title}>Section Title</Text>
                <Text style={styles.contentText}>This content fades in and moves up.</Text>
            </Animatable.View>
        </View>
    );
};

export default BallByBall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    animatedContainer: {

        padding: 20,
        borderRadius: 15,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 16,
        color: 'white',
    },
});
