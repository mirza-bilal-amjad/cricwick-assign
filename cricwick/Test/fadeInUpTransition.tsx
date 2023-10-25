import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const Newspaper = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animatable.View animation="fadeInUp" duration={2000}>
                <Icon name="newspaper-o" size={100} color="black" />
            </Animatable.View>
            <Animatable.Text animation="fadeInUp" duration={2000} style={{ fontSize: 24, marginTop: 20 }}>
                Today's News
            </Animatable.Text>
        </View>
    );
};

export default Newspaper;
