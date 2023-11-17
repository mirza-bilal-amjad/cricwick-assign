import BottomTabNavigation from "../bottomtabnavigator/BottomTabNavigation";
import Series from "../bottomtabnavigator/series/Series";
import MatchSummary from "../bottomtabnavigator/matchsummary/MatchSummary";
import MatchResult from "../bottomtabnavigator/matchresult/MatchResult";
import {BlogsScreen, DrawerArticleScreen, ICCRankingsScreen, MatchResultsScreen, PSLScreen} from "../../screens";
import {TouchableOpacity} from "react-native";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import FeaturedContentGHome from "../../screens/mainbottomtabscreens/home/FeaturedContent/FeaturedContentGHome";
import FeaturedContentVideos from "../../screens/mainbottomtabscreens/home/FeaturedContent/FeaturedContentVideos";
import Articles from "../../screens/Articles";
import News from "../../screens/News";
import SquadDetails from "../../screens/match_summary_bottom_tab_screen/SingleSquadDetails/SquadDetails";
import DrawerArticle from "../../screens/side_drawer_screens/DrawerArticle";
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
			<Stack.Screen name={'SeriesBottomTabNavigation'} component={Series}
			              options={{
				              headerShown: false
			              }}/>
			<Stack.Screen name={'SeriesInfoBottomNavigation'} component={MatchSummary}
			              options={{
				              headerShown: false
			              }}/>

			<Stack.Screen name={'MatchResultBottomNavigation'} component={MatchResult}
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
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),
				              headerShown: true,
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
			              }}/>

			<Stack.Screen name={'PSL2023'}
			              component={PSLScreen}
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

			<Stack.Screen name={'FeaturedContentGHome'} component={FeaturedContentGHome} options={{
				headerShown: true,
				headerTitle: 'Feature Content',
				headerTitleAlign: 'center',
				headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				headerStyle: {backgroundColor: colors.background},
				headerShadowVisible: false,
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.goBack()}>
						<GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					</TouchableOpacity>
				),

			}}/>

			<Stack.Screen name={'FeaturedContentVideos'} component={FeaturedContentVideos} options={{
				headerShown: true,
				headerTitle: 'Feature Content',
				headerTitleAlign: 'center',
				headerStyle: {backgroundColor: colors.background},
				headerShadowVisible: false,
				headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.goBack()}>
						<GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
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
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),
				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background}
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
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),

				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},

			              }}/>
			<Stack.Screen name={'DrawerArticles'}
			              component={DrawerArticle}
			              options={{
				              headerShown: true,

				              headerTitleAlign: 'center',
				              headerShadowVisible: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
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
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),
			              }}/>

			<Stack.Screen name={'SideSwipeAbleArticles'}
			              component={SideSwipeAbleArticles}
			              options={{
				              headerShown: false,
				              headerTitleStyle: {fontWeight: 'bold', color: colors.text},
				              headerStyle: {backgroundColor: colors.background},
				              headerLeft: () => (
					              <TouchableOpacity
						              onPress={() => navigation.goBack()}>
						              <GoogleIcon name={'arrow-back-ios'} size={35} color={colors.text}/>
					              </TouchableOpacity>
				              ),
			              }}/>

		</Stack.Navigator>
	)
}
export default MainStack