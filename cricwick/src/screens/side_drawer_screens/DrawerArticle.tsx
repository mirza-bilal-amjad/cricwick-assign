import {FlatList, SafeAreaView, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {fetchArticles} from "../../utils/serverfetch/fetchBackend";
import LottieView from "lottie-react-native";
import {ActivityLoader, Loader} from "../../assets";
import ArticleCard from "../../components/SideBar.Component/SideBar.Articles/ArticleCard";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../hooks";

const DrawerArticle = () => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	const navigation = useNavigation();
	// console.log(dateObject);
	const [articleData, setArticleData] = useState([])
	const [pageCounter, setPageCounter] = useState(1);
	const [refreshing, setRefreshing] = useState(false);

	const fetchit = async () => {
		setRefreshing(true)
		fetchArticles(pageCounter).then((r: any) => {
			return setArticleData((prevState: any[]): any => {

				if (r.length !== 0) {
					setPageCounter(preValue => preValue + 1);
					setRefreshing(false);
					return [...prevState, ...r?.data];
				} else {
					setRefreshing(false);
					return prevState;
				}
			})
		})
	}
	useEffect(() => {
		fetchit();
		navigation.setOptions({
			headerTitle: 'Articles',
		})
	}, []);
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: colors.background
		}}>
			<View style={{
				height: 2,
			}}>
				{articleData.length !== 0 && refreshing && <LottieView
                    source={Loader} autoPlay loop
                    style={{
						position: 'relative',
						height: 4,
						top: -2,
						zIndex: 10
					}}
                    colorFilters={[
						{
							keypath: "Shape Layer 2",
							color: "#c22026"
						}]}
                />}
			</View>

			{articleData.length === 0 && articleData.length === 0 ? <View style={{
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
					            }]}
					/>
				</View> :
				<FlatList
					removeClippedSubviews={true}
					initialNumToRender={10}
					windowSize={100}
					onEndReachedThreshold={0.5}
					onEndReached={!refreshing ? fetchit : () => console.log('no fetch done')}
					keyExtractor={(item, index) => index.toString()}
					style={{
						flex: 1,
					}}
					ItemSeparatorComponent={
						() => <View style={{
							height: 5,
						}}/>
					}
					data={articleData}
					contentContainerStyle={{
						marginHorizontal: 2
					}} renderItem={

					({item, index}: any) => (
						<ArticleCard item={item} index={index}/>
					)

				}/>}
		</SafeAreaView>
	);
}
export default DrawerArticle
