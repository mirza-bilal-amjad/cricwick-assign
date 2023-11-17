import {SafeAreaView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {fetchSeries} from "../../utils/serverfetch/fetchBackend";
import {useNavigation} from "@react-navigation/native";
import ActivityLoaderComp from "../../assets/ActivityLoader/ActivityLoader";
import ProgressBarLoader from "../../assets/ProgressBarLoader/ProgressBarLoader";
import {useSelector} from "react-redux";
import {useTheme} from "../../hooks";
import Mr_ballbyballComponent
	from "../../components/comp.matchresultbottomtabscreen/ballbyball.component/mr_ballbyball.component";

const BallByBall = ({route}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const flag = useSelector(
		(state: any) => state?.toggleReducer?.flag
	)
	const navigation = useNavigation()
	const {matchId} = route.params;
	const [bBBMatchData, setBBBMatchData] = useState([]);
	const [graphData, setGraphData] = useState([]);
	const [bBBOversData, setBBBOversData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [inningId, setInningId] = useState(null);
	const [overNumber, setOverNumber] = useState(null);
	const [matchFormat, setMatchFormat] = useState(null);

	const returnApiMatch = (matchId: number) => {
		return `https://cwscoring.cricwick.net/api/v4/matches/${matchId}/unsub_summary?web_user=1&telco=ufone&app_name=CricwickWeb`
	};
	const returnApiInnings = (inningId: number | string, overNumber: number | string) => {
		return `https://cwscoring.cricwick.net/api/v3/innings/${inningId}/get_previous_overs?over_number=${overNumber}&app_name=CricwickWeb`
	};
	const returnApiGraphsInns = (matchId: number | string,) => {
		return `https://cwscoring.cricwick.net/api/${matchId}/graph_data?telco=mobilink&app_name=CricwickPakistan`
	};
	const fetchBbBData = async () => {
		await fetchSeries(returnApiMatch(matchId))
		.then(
			(r: any) => {

				setBBBMatchData((prevState: any[]): any => {
					if (r) {
						const {match} = r;
						return [match];
					} else return prevState;
				});
				setBBBOversData(
					(prevState: any[]): any => {
						if (r) {
							const {overs} = r;
							if (prevState.length === 0) {
								const lastOver = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1]?.over_number);
								const inn = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1]?.inn);
								setOverNumber(
									prevState1 => {
										if (prevState1 !== lastOver)
											return lastOver;
										else return null
									}
								);
								setInningId(inn);
								return overs;
							} else {
								const lastOver = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1].over_number);
								const inn = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1].inn);
								setOverNumber(lastOver);
								setInningId(inn);
								return [...overs, ...prevState];
							}
						} else return prevState;
					}
				)
			}
		)
		.catch(e => console.error('Error:', e));
	};
	const fetchBbBDataInnings = async (inningId: number, overNumber: number) => {
		setRefreshing(true);
		await fetchSeries(returnApiInnings(inningId, overNumber))
		.then(
			(r: any) => {
				setBBBOversData(
					(prevState: any[]): any => {
						if (r) {
							const {overs} = r;
							if (overs.length > 0) {
								const lastOver = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1].over_number);
								const inn = (overs[overs.length - 1]?.balls[overs[overs.length - 1]?.balls.length - 1].inn);
								setOverNumber(
									prevState1 => {
										if (prevState1 !== lastOver)
											return lastOver;
										else return null
									}
								);
								setInningId(inn);
								return [...prevState, ...overs];
							} else return prevState;
						} else return prevState;
					}
				)
				setRefreshing(false);
			}
		)
		.catch(e => console.error('Error:', e));
	}

	const fetchBBBGraphData = async () => {
		await fetchSeries(returnApiGraphsInns(matchId))
		.then(
			(r: any) => {
				if (r && r?.innings.length > 0) {
					setMatchFormat(r?.format);
					setGraphData(r);
				}
			}
		)
		.catch(e => console.error('Error:', e));
	}

	useEffect(() => {
		fetchBbBData()
		fetchBBBGraphData();
	}, [flag]);
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: colors.background
		}}>
			<ProgressBarLoader data={bBBOversData} refreshing={refreshing}/>
			{(bBBMatchData.length > 0 || graphData.length > 0) ?
				<Mr_ballbyballComponent
					matchFormat={matchFormat}
					graphData={graphData}
					matchData={bBBMatchData} oversData={bBBOversData}
					callBackFetch={() =>
						fetchBbBDataInnings(
							// @ts-ignore
							inningId, overNumber
						)}/> :
				<ActivityLoaderComp style={{
					width: 280, height: 280
				}} colorFilters={
					[{
						keypath: "Shape Layer 2",
						color: "#c22026"
					}]
				}/>
			}
		</SafeAreaView>
	)
};
export default BallByBall
