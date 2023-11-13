import {View, Text, Dimensions} from 'react-native'
import React from 'react'
import {LineChart} from "react-native-chart-kit";

const LineChartComp = ({matchFormat, item}: any) => {
    let iterator = 0;
    const runsData = item?.innings?.map((inItem: any, index: number) => {
        let previousRuns = 0;
        const opacity = index % 2 === 0 ? (opacity = 1) => `rgba(255, 0, 0, ${opacity})` :
            (opacity = .1) => `rgba(0, 0, 255, ${opacity})`;
        const strokeWidth = index % 2 === 0 ? 2 : 1;
        return {
            data: inItem?.graph_data?.map((graphItem: any) => {
                const currentRuns = graphItem?.runs;
                const totalRuns = currentRuns + previousRuns; // Add currentRuns to previousRuns
                previousRuns = totalRuns; // Update previousRuns for the next iteration
                return totalRuns; // Return the totalRuns for this graphItem
            }),
            color: opacity,
            strokeWidth: strokeWidth,
            decimalPlaces: 0,
            withDots: true,
        };
    })

    console.log(runsData)
    const data = {
        labels: ['0', '10', '20', '30', '40', '50'],
        datasets: runsData,

    };
    return (
        <View style={{
            // marginHorizontal: 10,
            justifyContent: 'center',
        }}>
            {runsData && <LineChart
                bezier={true}
                data={data}
                hidePointsAtIndex={[]}
                width={Dimensions.get('window').width}
                height={250}
                chartConfig={{
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo: 'white',
                    color: (opacity = 1) => `rgba(125, 125,  125,  ${opacity})`,
                    strokeWidth: 1,
                    decimalPlaces: 0,
                    propsForDots: {
                        r: '3',
                        strokeWidth: '2',

                    }


                }}
                /*renderDotContent={({x, y, index, indexData}) => {
                    return (
                        <React.Fragment key={index}>
                            <View
                                style={{
                                    position: 'absolute',
                                    left: x - 2.5,
                                    width: 5,
                                    height: 5,
                                    top: y - 2.5,
                                    borderRadius: 50,
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    backgroundColor: '#0095f8'

                                }}>

                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    left: x - 2.5,
                                    width: 5,
                                    height: 5,
                                    top: y - 10,
                                    borderRadius: 50,
                                    borderWidth: 1,
                                    borderColor: '#000'

                                }}>

                            </View>
                        </React.Fragment>

                    )
                }}
*/

                /*getDotProps={
                    (value, index) => {
                        console.log('getDotProps', value, index)
                        return {
                            r: index % 2 === 0 ? '0' : '2',

                        }
                    }
                }*/
                getDotColor={
                    (value, index) => {
                        index === 0 ? iterator += 1 : iterator = 0
                        return item?.innings[iterator]?.graph_data[index].wickets > 0 ? '#f23' : '#000'
                    }
                }
                withDots={true}
                withInnerLines={false} // Optional: hide grid lines
                withOuterLines={true} // Optional: hide outer border
                fromZero={true}
                withVerticalLabels={true}
                withHorizontalLabels={true}
                withVerticalLines={true}

            />}

        </View>
    )
}
export default LineChartComp
