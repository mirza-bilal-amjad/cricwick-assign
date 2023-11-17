import {View} from 'react-native'
import React from 'react'
import Ball_Comentry from "./component/Ball_Comentry";

const PerBallComponent = ({data, title}: any) => {

    return (

        <View style={{}}>{
            data && data.map(
                (item: any, index: number) => {

                    return (
                        <View key={item.id} style={{
                            width: '100%',
                        }}>
                            <Ball_Comentry item={item}/>
                        </View>
                    )
                }
            )}
        </View>

    )

}
export default (PerBallComponent)
