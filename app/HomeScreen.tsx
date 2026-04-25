import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DISH_TAGS = ["#Thai", "#Noodles", "#Spicy"];

const NAV_ITEMS = [
	{ label: "Home", icon: require("@/assets/images/swipe.png") },
	{ label: "Map", icon: require("@/assets/images/map.png") },
	{ label: "Saved", icon: require("@/assets/images/saved.png") },
	{ label: "Profile", icon: require("@/assets/images/profile.png") },
];

export default function HomeScreen() {
	const { width, height } = useWindowDimensions();
	const isSmallPhone = width < 380;
	const cardHeight = Math.min(Math.max(Math.round(height * 0.52), 400), 480);
	const iconSize = isSmallPhone ? 28 : 32;
	const actionGap = isSmallPhone ? 16 : 20;
	const contentPaddingBottom = Math.max(12, 24 - (isSmallPhone ? 6 : 0));

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.scrollContent}
				contentContainerStyle={[styles.scrollContentInner, { paddingBottom: 16 + (isSmallPhone ? 4 : 0) }]}
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<Text style={styles.brand}>Tinner</Text>
						<Text style={styles.subtitle}>Find your next craving</Text>
					</View>
					<Pressable style={styles.profileIcon}>
						<Text style={styles.profileIconText}>👤</Text>
					</Pressable>
				</View>

				{/* Card */}
				<View style={styles.card}>
				<ImageBackground
					source={require("@/assets/images/pad-thai.png")}
					style={[styles.photo, { height: cardHeight }]}
					imageStyle={styles.photoImage}
					resizeMode="cover"
				>
					<View style={styles.photoShade} />

					<View style={styles.badge}>
						<Text style={styles.badgeText}>Thai</Text>
					</View>

					<View style={styles.content}>
						<Text style={styles.title}>Pad Thai</Text>
						<Text style={styles.description}>Stir-fried rice noodles with shrimp, eggs, bean sprouts and peanuts</Text>
						<View style={styles.tags}>
							{DISH_TAGS.map((tag) => (
								<Text key={tag} style={styles.tag}>
									{tag}
								</Text>
							))}
							<Text style={styles.calorie}>420 kcal</Text>
						</View>
						<Text style={styles.hint}>✕ swipe left to skip   |   swipe right to find ♡</Text>
					</View>
				</ImageBackground>
			</View>

			{/* Action Buttons */}
				<View style={[styles.actions, { gap: actionGap, paddingBottom: contentPaddingBottom }] }>
				<Pressable style={styles.actionBtn}>
					<Text style={styles.actionText}>✕</Text>
				</Pressable>
				<Pressable style={styles.actionBtn}>
					<Text style={styles.actionText}>↻</Text>
				</Pressable>
				<Pressable style={[styles.actionBtn, styles.actionBtnFilled]}>
					<Text style={[styles.actionText, styles.actionTextFilled]}>♡</Text>
				</Pressable>
			</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<View style={styles.bottomNav}>
				{NAV_ITEMS.map((item) => (
					<Pressable key={item.label} style={styles.navItem}>
						<Image source={item.icon} style={[styles.navIconImage, { width: iconSize, height: iconSize }]} resizeMode="contain" />
					</Pressable>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F3EE",
		flexDirection: "column",
	},
	scrollContent: {
		flex: 1,
	},
	scrollContentInner: {
		paddingBottom: 8,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 12,
	},
	headerLeft: {
		flex: 1,
	},
	brand: {
		fontSize: 24,
		fontWeight: "800",
		color: "#373A42",
	},
	subtitle: {
		fontSize: 12,
		fontWeight: "500",
		color: "#B0B2BF",
		marginTop: 2,
	},
	profileIcon: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: "#E5E5E5",
		alignItems: "center",
		justifyContent: "center",
	},
	profileIconText: {
		fontSize: 18,
	},
	card: {
		marginHorizontal: 16,
		marginTop: 8,
		borderRadius: 20,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.15,
		shadowRadius: 16,
		elevation: 6,
		marginBottom: 12,
	},
	badge: {
		position: "absolute",
		top: 12,
		zIndex: 2,
		alignSelf: "center",
		backgroundColor: "rgba(45, 55, 72, 0.78)",
		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.35)",
		paddingHorizontal: 14,
		paddingVertical: 6,
		borderRadius: 999,
	},
	badgeText: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "600",
	},
	photo: {
		width: "100%",
	},
	photoImage: {
		borderRadius: 20,
	},
	photoShade: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.34)",
	},
	content: {
		position: "absolute",
		left: 14,
		right: 14,
		bottom: 14,
		gap: 6,
	},
	title: {
		fontSize: 28,
		fontWeight: "800",
		color: "#FFFFFF",
	},
	description: {
		color: "#EEF2F6",
		fontSize: 14,
		lineHeight: 22,
	},
	tags: {
		marginTop: 4,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 6,
	},
	tag: {
		backgroundColor: "rgba(35, 35, 35, 0.58)",
		borderRadius: 999,
		paddingHorizontal: 10,
		paddingVertical: 5,
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "600",
	},
	calorie: {
		backgroundColor: "#FF6B00",
		borderRadius: 999,
		paddingHorizontal: 10,
		paddingVertical: 5,
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "700",
	},
	hint: {
		marginTop: 8,
		color: "rgba(255,255,255,0.72)",
		fontSize: 11,
		fontWeight: "500",
		textAlign: "center",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	actionBtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: "#E8E8E8",
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.08,
		shadowRadius: 8,
		elevation: 2,
	},
	actionBtnFilled: {
		borderColor: "#FF6B00",
		backgroundColor: "#FFE8D6",
	},
	actionText: {
		fontSize: 21,
		color: "#A4AAB3",
	},
	actionTextFilled: {
		color: "#FF6B00",
	},
	bottomNav: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 14,
		paddingBottom: 18,
		borderTopWidth: 1,
		borderTopColor: "#E8E8E8",
		backgroundColor: "#FFFFFF",
	},
	navItem: {
		alignItems: "center",
		paddingVertical: 4,
		minWidth: 56,
	},
	navIconImage: {
		width: 32,
		height: 32,
	},
});
