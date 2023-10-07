import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const Pagination = ({data, scrollX, ITEM_WIDTH, style}: any) => {
    return (
        <View style={styles.paginationContainer}>
            {data.map((_: any, index: number) => {

                return (
                    <Animated.View
                        key={index.toString()}
                        style={[style, {
                            opacity: scrollX.interpolate({
                                inputRange: [(index) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH],
                                outputRange: [0.2, 1, 0.2],
                                extrapolate: 'clamp',
                            }),
                        }]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue', // Adjust color as needed
        marginHorizontal: 5,
    },
});

export default Pagination;
