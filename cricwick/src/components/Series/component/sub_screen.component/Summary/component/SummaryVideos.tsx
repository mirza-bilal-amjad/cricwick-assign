import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import IonIcon from "react-native-vector-icons/Ionicons";
import {VideoComponent} from "../../../../../index";
import {useTheme} from "../../../../../../hooks";

const SummaryVideos = ({match, navigation}: any) => {
	const {Layout, darkMode, Colors, NavigationTheme} = useTheme();
	const {colors} = NavigationTheme;
	const [componentWidth, setComponentWidth] = React.useState(0);
	const onLayout = (event: any) => {
		const {width} = event.nativeEvent.layout;
		setComponentWidth(width);
	};
	const RenderVideoComponent = ({item}: any) => {
		return (
			<View style={{
				margin: 10,
				borderWidth: .2,
				borderColor: Colors.textGray200
			}}>
				<View>

					<Image
						source={{uri: item.thumb}}
						style={{
							width: '40%', aspectRatio: 16 / 9,
						}}/>
					<TouchableOpacity
						style={{
							position: 'absolute',
							width: '40%',
							zIndex: 10,
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						activeOpacity={.7}
					>
						<IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
							backgroundColor: 'rgba(127,127,127,.5)',
							borderRadius: 50,
						}}/>
					</TouchableOpacity>
				</View>
				<View style={{
					marginHorizontal: 10,
					marginVertical: 7
				}}>
					<Text style={{
						fontSize: 15, marginVertical: 5,
						fontWeight: '500', color: 'black'
					}}>{item.title}</Text>
					<Text style={{
						fontSize: 12,
						fontWeight: '500',
						color: Colors.textGray200
					}}>{item.match_desc}</Text>
				</View>
			</View>

		)
	}

	return (
		<View style={{
			borderBottomWidth: .2,
			borderBottomColor: Colors.textGray200
		}}>{
			match && match[0] &&
            <View style={{
				margin: 10,
				borderWidth: .2,
				borderColor: Colors.textGray200
			}}>
                <View>

                    <Image
                        source={{uri: match[0]?.thumb}}
                        style={{
							width: '100%', aspectRatio: 16 / 9,
						}}/>
                    <TouchableOpacity
                        style={{
							position: 'absolute',
							width: '100%',
							zIndex: 10,
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
                        activeOpacity={.7}
                        onPress={() => navigation.navigate('FeaturedContentVideos', {
							videoUri: match[0]?.qualities,
							title: match[0]?.title,
							poster: match[0]?.thumb,
							views: match[0]?.views,
							likes: match[0]?.likes,
							homePageItemType: 'videos-home'
						})}
                    >
                        <IonIcon name={'play-circle-outline'} size={30} color={'white'} style={{
							backgroundColor: 'rgba(127,127,127,.5)',
							borderRadius: 50,
						}}/>
                    </TouchableOpacity>
                </View>
                <View style={{
					marginHorizontal: 10,
					marginVertical: 7
				}}>
                    <Text style={{
						fontSize: 15, marginVertical: 5,
						fontWeight: '500', color: colors.text
					}}>{match[0]?.title?.slice(0, 48) + '...'}</Text>
                    <Text style={{
						fontSize: 12,
						fontWeight: '500',
						color: Colors.textGray200
					}}>{match[0]?.match_obj?.title} {match[0]?.match_obj?.team_1} vs {match[0]?.match_obj?.team_2}</Text>
                </View>
            </View>
		}
			{match &&
                <FlatList
                    data={match}
                    keyExtractor={(item: any, index: number) => index.toString()}
                    horizontal={true}
                    style={{
						// borderBottomWidth: .2,
						flexDirection: 'row',
						borderTopWidth: .2,
						borderColor: Colors.textGray200,
					}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={useMemo(() => {
						return ({item, index}: any) => (
							item && index > 0 && <VideoComponent item={item}/>
						)
					}, [])}/>
			}
		</View>

	)
}
export default SummaryVideos
const styles = StyleSheet.create({})
