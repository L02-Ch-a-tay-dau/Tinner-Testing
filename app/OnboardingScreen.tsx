import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Slide = {
	id: number;
	title: string;
	description: string;
	image: any;
	halo: string;
};

const SLIDES: Slide[] = [
	{
		id: 1,
		title: "Discover Amazing Food",
		description: "Swipe through delicious dishes and find your next favorite meal",
		image: require("@/assets/images/onboarding-1.png"),
		halo: "#FFB066",
	},
	{
		id: 2,
		title: "Smart Filters",
		description: "Customize your preferences with cuisine, dietary, price, and distance filters",
		image: require("@/assets/images/onboarding-2.png"),
		halo: "#6EA8FF",
	},
	{
		id: 3,
		title: "Find Restaurants Nearby",
		description: "Explore restaurants on a map and get directions to your favorite places",
		image: require("@/assets/images/onboarding-3.png"),
		halo: "#72E7C2",
	},
	{
		id: 4,
		title: "Save Your Favorites",
		description: "Create collections of dishes you love and access them anytime",
		image: require("@/assets/images/onboarding-4.png"),
		halo: "#FF7FA7",
	},
];

export default function OnboardingScreen() {
	const router = useRouter();
	const [index, setIndex] = useState(0);

	const slide = useMemo(() => SLIDES[index], [index]);
	const isLast = index === SLIDES.length - 1;

	const goNext = () => {
		if (isLast) {
			router.replace("/HomeScreen" as any);
			return;
		}
		setIndex((prev) => prev + 1);
	};

	const skip = () => {
		router.replace("/HomeScreen" as any);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Pressable onPress={skip} style={styles.skipBtn}>
					<Text style={styles.skipText}>Skip</Text>
				</Pressable>
			</View>

			<View style={styles.center}>
				<View style={[styles.halo, { backgroundColor: slide.halo }]}>
					<Image source={slide.image} style={styles.slideImage} resizeMode="contain" />
				</View>
				<Text style={styles.title}>{slide.title}</Text>
				<Text style={styles.description}>{slide.description}</Text>
			</View>

			<View style={styles.bottom}>
				<View style={styles.dots}>
					{SLIDES.map((item, dotIndex) => (
						<View
							key={item.id}
							style={[styles.dot, dotIndex === index ? styles.dotActive : null]}
						/>
					))}
				</View>

				<Pressable onPress={goNext} style={styles.nextBtn}>
					<Text style={styles.nextText}>{isLast ? "Start" : "Next"}</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F3EE",
		paddingHorizontal: 20,
	},
	header: {
		alignItems: "flex-end",
		paddingTop: 8,
	},
	skipBtn: {
		padding: 10,
	},
	skipText: {
		fontSize: 20,
		color: "#A4AAB3",
		fontWeight: "600",
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 50,
	},
	halo: {
		width: 170,
		height: 170,
		borderRadius: 90,
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.9,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.2,
		shadowRadius: 24,
		elevation: 9,
	},
	slideImage: {
		width: 92,
		height: 92,
	},
	title: {
		marginTop: 54,
		fontSize: 40,
		fontWeight: "800",
		color: "#171E2E",
		textAlign: "center",
	},
	description: {
		marginTop: 24,
		fontSize: 30,
		lineHeight: 42,
		textAlign: "center",
		color: "#667085",
		fontWeight: "600",
		paddingHorizontal: 10,
	},
	bottom: {
		paddingBottom: 26,
	},
	dots: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		marginBottom: 20,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 6,
		backgroundColor: "#D0D5DD",
	},
	dotActive: {
		width: 32,
		backgroundColor: "#FF6B00",
	},
	nextBtn: {
		height: 56,
		borderRadius: 16,
		backgroundColor: "#FF6B00",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#FF6B00",
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.25,
		shadowRadius: 24,
		elevation: 6,
	},
	nextText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "700",
	},
});
