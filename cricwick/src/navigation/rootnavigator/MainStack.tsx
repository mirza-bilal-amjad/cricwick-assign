import BottomTabNavigation from "../bottomtabnavigator/BottomTabNavigation";
import SeriesBottomTabNavigation from "../bottomtabnavigator/seriesBottomNavigator/SeriesBottomTabNavigation";
import SeriesInfoBottomNavigation
	from "../bottomtabnavigator/seriesBottomNavigator/SeriesInfoBottomNavigatior/SeriesInfoBottomNavigation";
import MatchResultBottomNavigation
	from "../bottomtabnavigator/MatchResult.BottomNavigation/MatchResult.BottomNavigation";
import {BlogsScreen, DrawerArticleScreen, ICCRankingsScreen, MatchResultsScreen, PSLScreen} from "../../screens";
import {TouchableOpacity} from "react-native";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import FeaturedContentGHome from "../../screens/home/FeaturedContent/FeaturedContentGHome";
import FeaturedContentVideos from "../../screens/home/FeaturedContent/FeaturedContentVideos";
import Articles from "../../screens/Articles";
import News from "../../screens/News";
import SquadDetails
	from "../../screens/series/inside_ongoing_result_upcomming_bottom_tab_screen/SingleSquadDetails/SquadDetails";
import DrawerArticle from "../../screens/DrawerArticle";
import SideSwipeAbleArticles from "../../screens/SideSwipeAbleArticles";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useTheme} from "../../hooks";

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}: any) => {
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;

	return (
		<Stack.Navigator>
			<Stack.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} options={{
				headerShown: false,
			}}/>
			<Stack.Screen name={'SeriesBottomTabNavigation'} component={SeriesBottomTabNavigation}
			              options={{
				              headerShown: false
			              }}/>
			<Stack.Screen name={'SeriesInfoBottomNavigation'} component={SeriesInfoBottomNavigation}
			              options={{
				              headerShown: false
			              }}/>

			<Stack.Screen name={'MatchResultBottomNavigation'} component={MatchResultBottomNavigation}
			              options={{
				              headerShown: false,
			              }}/>

			<Stack.Screen name={'Blogs'}
			              component={BlogsScreen}
			              options={{
				              headerShown: true,
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
				              //add more options here
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),


			              }}/>

			<Stack.Screen name={'Rankings'}
			              component={ICCRankingsScreen}
			              options={{
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),
				              headerShown: true,
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
			              }}/>

			<Stack.Screen name={'DrawerArticle'}
			              component={DrawerArticleScreen}
			              options={{
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
				              headerShown: true,
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},
			              }}/>

			<Stack.Screen name={'PSL2023'}
			              component={PSLScreen}
			              options={{
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
				              headerShown: true,
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},
			              }}/>

			<Stack.Screen name={'FeaturedContentGHome'} component={FeaturedContentGHome} options={{
				headerShown: true,
				headerTitle: 'Feature Content',
				headerTitleAlign: 'center',
				headerStyle: {backgroundColor: '#f3f3f3'},
				headerShadowVisible: false,
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.goBack()}>
						<GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					</TouchableOpacity>
				),

			}}/>

			<Stack.Screen name={'FeaturedContentVideos'} component={FeaturedContentVideos} options={{
				headerShown: true,
				headerTitle: 'Feature Content',
				headerTitleAlign: 'center',
				headerStyle: {backgroundColor: '#f3f3f3'},
				headerShadowVisible: false,
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.goBack()}>
						<GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					</TouchableOpacity>
				),

			}}/>

			<Stack.Screen name={'Articles'}
			              component={Articles}
			              options={{
				              headerShown: true,
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'}
			              }}/>
			<Stack.Screen name={'News'}
			              component={News}
			              options={{
				              headerShown: false,
			              }}/>


			<Stack.Screen name={'SquadDetails'}
			              component={SquadDetails}
			              options={{
				              headerShown: true,
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},

			              }}/>
			<Stack.Screen name={'DrawerArticles'}
			              component={DrawerArticle}
			              options={{
				              headerShown: true,

				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
			              }}/>

			<Stack.Screen name={'MatchResultScreen'}
			              component={MatchResultsScreen}
			              options={{
				              headerShown: true,
				              headerTitle: 'Match Results',
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
			              }}/>

			<Stack.Screen name={'SideSwipeAbleArticles'}
			              component={SideSwipeAbleArticles}
			              options={{
				              headerShown: false,
				              headerTitleStyle: {fontWeight: 'bold'},
				              headerStyle: {backgroundColor: '#f3f3f3'},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={'black'}/>
					              </TouchableOpacity>
				              ),
			              }}/>

		</Stack.Navigator>
	)
}
export default MainStack