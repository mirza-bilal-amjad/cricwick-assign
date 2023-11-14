import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native'
import React, {PureComponent, useEffect, useMemo, useRef} from 'react'
import {SwiperFlatList} from "react-native-swiper-flatlist";
import LottieView from "lottie-react-native";
import {LiveAnim} from "../../../../assets";
import {Live, Scheduled} from "./sub.component";
import {useTheme} from "../../../../hooks";

const MatchCarousel = ({data, navigation}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const renderItem = useMemo(() => {

		return ({item}: any) => {
			const match = data[`l_m_${item}`];
			let inning = data[`l_i_${item}`];
			return (
				<TouchableOpacity
					style={{
						height: 230,
						width: Dimensions.get('window').width - 20,
						marginBottom: 10,
						backgroundColor: colors.card,
						marginHorizontal: 10,
					}}
					activeOpacity={.8}
					onPress={() => navigation.navigate('MatchResultBottomNavigation', {
						screen: match.match_state === 'Over' ? 'Report' : 'MRSummary',
						matchId: match.id,
						matchTitle: `${match.teamA.short_name} vs ${match.teamB.short_name}`,
						matchNumber: match.title,
						matchState: match.match_state,
						team_1_id: match.team_1_id,
						team_2_id: match.team_2_id,
						nameTeamA: match.teamA.name,
						nameTeamB: match.teamB.name,
						shortNameTeamA: match.teamA.short_name,
						shortNameTeamB: match.teamB.short_name,

					})}
				>
					<View style={{
						height: 215,
						width: '100%',
						// padding: 15,
					}}>
						<View style={{
							position: 'absolute',
							top: 10,
							paddingVertical: 3,
							paddingHorizontal: 8,
							zIndex: 10,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: match.match_state === 'Live' ? '#d50000' : 'transparent',
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
						}}>
							{match.match_state === 'Live' && <LottieView
                                source={LiveAnim}
                                style={{
									width: 20,
									height: 20,
									marginLeft: -8,
								}}
                                autoPlay
                                loop
                                speed={1.5}
                                colorFilters={[
									{
										keypath: "Shape Layer 1",
										color: "#fff"
									}]}
                            />}
							<Text style={{
								color: match.match_state === 'Live' ? 'white' : 'black',
								fontSize: 15,
								fontWeight: '900',
							}}>{match.match_state === 'Live' && match.break_type ? match.break_type : match.match_state === 'Live' && !match.break_type ? 'Live' : 'Upcoming'}</Text>

						</View>
						{match.match_state === 'Live' ?
							<Live match={match} inning={inning}/>
							:
							<Scheduled match={match} inning={inning}/>
						}
					</View>
				</TouchableOpacity>
			);
		}
	}, [data, navigation, colors.card]);

	return (
		<View style={{

			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'white'
		}}>
			<SwiperFlatList
				data={data['l_m_ids']} renderItem={renderItem}
				snapToAlignment={'center'}
				paginationDefaultColor={colors.background}
				maxToRenderPerBatch={1}
				initialNumToRender={1}

				paginationActiveColor={'#c22026'}
				decelerationRate={'fast'}
				index={0}
				paginationStyleItem={{
					width: 7,
					height: 7,
					marginHorizontal: 2,
					borderRadius: 5,
					padding: 0,
				}}
				showPagination={true}
				keyExtractor={
					(item, index) => index.toString()
				}
			/>
		</View>
	);
};


export default MatchCarousel
