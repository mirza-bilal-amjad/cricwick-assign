import React, {useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GoogleIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
//@ts-ignore
import Fantasy_Bottom from "../../assets/Images/fantasy_bottom.png";
//@ts-ignore
import PSL from "../../assets/Images/psl_side.png";
//@ts-ignore
import SeriesIcon from "../../assets/Images/series_icon.png";
//@ts-ignore
import RankingSide from "../../assets/Images/ranking_side.png";
//@ts-ignore
import TeamSide from "../../assets/Images/team_side.png";
import {useTheme} from "../../hooks";


const SideDrawerContent = ({navigation}: any) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const {Layout, darkMode, NavigationTheme, Colors} = useTheme();
	const {colors} = NavigationTheme;
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View
				style={[styles.container, {backgroundColor: colors.background}]}>

				<View style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 10,
					paddingTop: 55,
					paddingBottom: 35,
					backgroundColor: darkMode ? Colors.inputBackground : '#e5e5e5'
				}}>
					<View style={{
						width: 80, height: 80, borderRadius: 50,
					}}>
						<GoogleIcon name={'account-circle'} size={80} color={colors.background}/>
					</View>
					<View style={{marginTop: 7}}>
						<View style={{marginLeft: 5}}>
							<Text style={{color: colors.text, fontWeight: 'bold'}}>
								Bilal Amjad
							</Text>
						</View>
						<View style={{marginLeft: 5}}><Text
							style={{color: colors.text, fontWeight: '400'}}>03335980020</Text></View>
					</View>

				</View>
				<View style={{
					borderBottomWidth: 0.2,
					borderBottomColor: Colors.textGray200,
				}}>
					{!isLoggedIn && <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
							marginHorizontal: 20,
							marginVertical: 15,
							flexDirection: "row",
							alignItems: "center",
						}}>
                        <GoogleIcon name={'check'} size={20} color={Colors.textGray200}/>
                        <Text style={{
							color: Colors.textGray200,
							fontWeight: 'bold',
							fontSize: 15,
							marginLeft: 5
						}}>Login or Register</Text>

                    </TouchableOpacity>}
					{isLoggedIn &&
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
									marginHorizontal: 20,
									marginVertical: 15,
									flexDirection: "row",
									alignItems: "center",
								}}>
                                <GoogleIcon name={'account-circle'} size={22} color={Colors.textGray200}/>
                                <Text style={{
									color: Colors.textGray200,
									fontWeight: 'bold',
									fontSize: 15,
									marginLeft: 5
								}}>Profile</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
									marginHorizontal: 20,
									marginVertical: 15,
									flexDirection: "row",
									alignItems: "center",
								}}>
                                <GoogleIcon name={'unsubscribe'} size={20} color={Colors.textGray200}/>
                                <Text style={{
									color: Colors.textGray200,
									fontWeight: 'bold',
									fontSize: 15,
									marginLeft: 5
								}}>Unsubscribe</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
									marginHorizontal: 20,
									marginVertical: 15,
									flexDirection: "row",
									alignItems: "center",
								}}>
                                <GoogleIcon name={'account-balance-wallet'} size={20} color={Colors.textGray200}/>
                                <Text style={{
									color: Colors.textGray200,
									fontWeight: 'bold',
									fontSize: 15,
									marginLeft: 5
								}}>Payout</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
									marginHorizontal: 20,
									marginVertical: 15,
									flexDirection: "row",
									alignItems: "center",
								}}>
                                <GoogleIcon name={'check'} size={20} color={Colors.textGray200}/>
                                <Text style={{
									color: Colors.textGray200,
									fontWeight: 'bold',
									fontSize: 15,
									marginLeft: 5
								}}>Change Package</Text>
                            </TouchableOpacity>
                        </View>}
				</View>
				<View style={styles.navigator}>

					<TouchableOpacity style={[styles.iconAndName]} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("Home")}
					>
						<IonIcon name={"home"} size={22} color={Colors.textGray200}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Home</Text>
					</TouchableOpacity>


					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}>
						<Image source={Fantasy_Bottom} style={{width: 25, height: 25, tintColor: Colors.textGray200}}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Fantasy League</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("Videos")}
					>
						<IonIcon name={"videocam-outline"} size={22} color={Colors.textGray200}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Videos</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7} onPress={
						() => navigation.navigate("Blogs")
					}>
						<IonIcon name={"newspaper-outline"} size={22} color={Colors.textGray200}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Blogs</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("DrawerArticle")}
					>
						<GoogleIcon name={"edit-document"} size={22} color={Colors.textGray200}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Articles</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7} onPress={
						() => navigation.navigate("PSL2023")
					}>
						<Image source={PSL} style={{width: 25, height: 25, tintColor: Colors.textGray200}}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>PSL 2023</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={
						() => navigation.navigate("MatchResultScreen")
					} style={styles.iconAndName} activeOpacity={0.7}>
						<GoogleIcon name={"list-alt"} size={22} color={Colors.textGray200}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Match Results</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("SeriesBottomTabNavigation")}
					>
						<Image source={SeriesIcon} style={{
							width: 25,
							height: 25,
							resizeMode: 'contain',
							aspectRatio: 12 / 9,
							tintColor: Colors.textGray200
						}}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Series</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("Rankings")}
					>
						<Image source={RankingSide} style={{
							width: 25,
							height: 25,
							resizeMode: 'contain',
							aspectRatio: 12 / 9,
							tintColor: Colors.textGray200
						}}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Rankings</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					                  onPress={() => navigation.navigate("SeriesBottomTabNavigation")}
					>
						<Image source={TeamSide} style={{
							width: 25,
							height: 25,
							resizeMode: 'contain',
							aspectRatio: 12 / 9,
							tintColor: Colors.textGray200
						}}/>
						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Teams</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					>
						<IonIcon name={"reader-outline"} size={22}
						         color={Colors.textGray200}/>

						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Fantasy T&C</Text>
					</TouchableOpacity>
					{/*<Text style={{borderWidth: .7, height: 0, margin: 0, padding: 0, borderColor: '#CBCBCB'}}/>*/}

					<TouchableOpacity style={styles.iconAndName} activeOpacity={0.7}
					>
						<GoogleIcon name={"help"} size={22}
						            color={Colors.textGray200}/>

						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Fantasy FAQs</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.logoutCont}>
					<TouchableOpacity style={styles.iconAndName2} activeOpacity={0.7}>
						<IonIcon name={"log-out"} size={22}
						         color={Colors.textGray200}/>

						<Text style={[styles.drawerItem, {
							color: Colors.textGray200
						}]}>Logout</Text>
					</TouchableOpacity>

				</View>
			</View>
		</ScrollView>
	);
};

export default SideDrawerContent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",

	},
	navigator: {
		flex: 1,
		marginHorizontal: 20,
		marginVertical: 10,

	},
	drawerItem: {
		fontSize: 15,
		fontWeight: "bold",
		paddingHorizontal: 10,
		paddingVertical: 10

	},
	iconAndName: {
		flex: 0.15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		maxHeight: 50,
		minHeight: 50


	}, iconAndName2: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		maxHeight: 50

	},
	logoutCont: {

		marginHorizontal: 20,
		// marginVertical: 10,

	}
});
