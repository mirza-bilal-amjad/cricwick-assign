import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {OverNumber} from '../../../../utils/method';
import Ball_Comentry from '../../ballbyball.component/PerBallInning/component/Ball_Comentry';
import {useSelector} from 'react-redux';
import {useTheme} from "../../../../hooks";

const LiveBallByBallComponent = ({item, callBackFetch}: any) => {

	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	const flag = useSelector((state: any) => state.toggleReducer.flag);
	const [thisOverCurrent, setThisOverCurrent] = useState(item[0]?.balls);

	const returnApiInnings = (
		inningId: number | string,
		overNumber: number | string,
	) => {
		return `https://cwscoring.cricwick.net/api/v3/innings/${inningId}/get_previous_overs?over_number=${overNumber}&app_name=CricwickWeb`;
	};

	const HorizontalComponent = ({item, index}: any) => {
		const overNumber = Number(item?.title.split(' ')[1]);
		const [isActive, setIsActive] = useState(false);

		return (
			<TouchableOpacity
				onPress={() => setThisOverCurrent((prevState: any) => item?.balls)}
				style={{
					backgroundColor: colors.card,
				}}>
				<View
					style={{
						flexDirection: 'row',
						paddingHorizontal: 10,
					}}>
					{OverNumber(overNumber)}
				</View>

				<View
					style={{
						// paddingTop: 5,
						paddingBottom: 10,
						// backgroundColor: 'pink',
						// flexDirection: 'row'
					}}>
					{
						<FlatList
							style={{
								flexDirection: 'row',
							}}
							/*onEndReached={() => {
							  console.log('onEndReached');
							  callBackFetch();
							}}*/
							horizontal
							bounces={false}
							ItemSeparatorComponent={() => <View style={{width: 1}}/>}
							inverted
							data={item?.balls}
							renderItem={({item, index}) => {
								return (
									<View
										key={index}
										style={{
											marginHorizontal: 5,
											width: 35,
											height: 35,
											borderWidth: 1,
											borderRadius: 40,
											justifyContent: 'center',
											alignItems: 'center',
											backgroundColor: item?.boundary_6
												? '#07a072'
												: item?.boundary_4 || item?.extra_wide_runs === 4
													? '#f5a623'
													: item?.wicket
														? '#f23'
														: '#fff',
											borderColor: item?.boundary_6
												? '#07a072'
												: item?.boundary_4 || item?.extra_wide_runs === 4
													? '#f5a623'
													: item?.wicket
														? '#f23'
														: '#000',
										}}>
										<Text
											style={{
												fontSize: 12,
												paddingHorizontal: 5,
												color: item?.boundary_6
													? '#fff'
													: item?.boundary_4 || item?.extra_wide_runs === 4
														? '#fff'
														: item?.wicket
															? '#fff'
															: '#000',
											}}>
											{item?.wicket
												? 'W'
												: item?.wide_ball
													? item?.extra_wide_runs + 'wd'
													: item?.runs_scored}
										</Text>
									</View>
								);
							}}
						/>
					}
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View
			style={{
				padding: 10,
			}}>
			<FlatList
				inverted
				showsHorizontalScrollIndicator={false}
				horizontal
				data={item}
				ItemSeparatorComponent={() => {
					return <View style={{width: 5}}/>;
				}}
				renderItem={({item, index}) => (
					<HorizontalComponent item={item} index={index}/>
				)}
			/>

			{item[0]?.balls && (
				<FlatList
					style={{}}
					extraData={flag}
					showsVerticalScrollIndicator={false}
					data={thisOverCurrent}
					renderItem={({item}: any) => <Ball_Comentry item={item}/>}
				/>
			)}
		</View>
	);
};
export default LiveBallByBallComponent;
