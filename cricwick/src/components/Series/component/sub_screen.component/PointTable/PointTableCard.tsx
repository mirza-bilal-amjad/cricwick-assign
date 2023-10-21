import {Dimensions, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Row, Table} from "react-native-table-component";

const PointTableCard = ({match, index}: any) => {
    return (
        <View style={{
            backgroundColor: index % 2 === 0 ? "#e3e3e3" : 'white',
            paddingVertical: 10,
            paddingHorizontal: 3
        }}>
            <Table borderStyle={{}}>
                <Row textStyle={{color: 'black', padding: 5, fontSize: 14}} style={{}}
                     data={[match.name, match.match_played, match.match_won, match.match_lost, match.match_tied, match.match_no_result, match.points, match.net_run_rate.toFixed(2)]}
                     flexArr={[3.4, 1, 1, 1, 1, 1, 1, 1.3]}></Row>
            </Table>
        </View>
    )
}
export default PointTableCard
const styles = StyleSheet.create({})
