import "react-native-reanimated";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
	const systemColorScheme = useColorScheme();
	const resolvedTheme = systemColorScheme ?? "light";

	return (
		<SafeAreaProvider>
			<ThemeProvider value={resolvedTheme === "dark" ? DarkTheme : DefaultTheme}>
				<Slot />
				<StatusBar style="auto" />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
