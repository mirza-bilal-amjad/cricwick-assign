import {View, Text, FlatList, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import SideRankingComponent from "../components/SideBar.Component/SiderBarRanking/SideRankingComponent";
import {fetchODIRank, fetchT20Rank, fetchTestRank} from "../utils/serverfetch/fetchBackend";
import t20 from "../components/Home/Rankings/component/T20";
import {ActivityLoader} from "../assets";
import LottieView from "lottie-react-native";
import {useTheme} from "../hooks";

const IccRankings = () => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const [odiData, setOdiData] = useState([]);
	const [t20Data, setT20Data] = useState([]);
	const [testData, setTestData] = useState([]);
	const fetch = async () => {
		fetchODIRank().then((res) => {
			setOdiData(
				(prevState: any): any => ([res])
			);
		}).catch((err) => {
			console.log(err);
		})
		fetchT20Rank().then((res) => {
			setT20Data((prevState: any): any => ([res]));
		}).catch((err) => {
			console.log(err);
		})
		fetchTestRank().then((res) => {
			setTestData((prevState: any): any => ([res]));
		}).catch((err) => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetch();
	}, []);

	return (
		<View style={{
			flex: 1,
			backgroundColor: colors.background
		}}>
			{
				odiData.length > 0 && t20Data.length > 0 && testData.length > 0 ?
					<SideRankingComponent odi={odiData} t20={t20Data} test={testData}/> :

					<View style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<LottieView source={ActivityLoader} autoPlay loop
						            style={{
							            width: 280, height: 280
						            }}
						            colorFilters={[{
							            keypath: "Shape Layer 2",
							            color: "#c22026"
						            }, {
							            keypath: "Shape Layer 1",
							            color: colors.text
						            }]}
						/>
					</View>
			}
		</View>
	);
}
export default IccRankings
