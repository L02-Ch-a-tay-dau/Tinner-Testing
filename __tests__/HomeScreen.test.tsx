import React from "react";
import { Image } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { describe, it, expect } from "@jest/globals";

import HomeScreen from "../app/HomeScreen";

const renderHomeScreen = () =>
	render(
		<SafeAreaProvider>
			<HomeScreen />
		</SafeAreaProvider>
	);

describe("HomeScreen", () => {
	it("1. Render thành công — hiển thị brand, card và không crash", () => {
		const { getByText } = renderHomeScreen();

		expect(getByText("Tinner")).toBeTruthy();
		expect(getByText("Find your next craving")).toBeTruthy();
		expect(getByText("Pad Thai")).toBeTruthy();
		expect(getByText("420 kcal")).toBeTruthy();
	});

	it("2. Có đủ 4 icon bottom navigation từ assets/images", () => {
		const { UNSAFE_getAllByType } = renderHomeScreen();
		const navImages = UNSAFE_getAllByType(Image);

		expect(navImages.length).toBeGreaterThanOrEqual(4);
	});

	it("3. Bấm các nút action không bị crash", () => {
		const { getByText } = renderHomeScreen();

		expect(() => fireEvent.press(getByText("✕"))).not.toThrow();
		expect(() => fireEvent.press(getByText("↻"))).not.toThrow();
		expect(() => fireEvent.press(getByText("♡"))).not.toThrow();
	});

	it("4. Rerender không bị crash", () => {
		const { rerender, getByText } = renderHomeScreen();

		rerender(
			<SafeAreaProvider>
				<HomeScreen />
			</SafeAreaProvider>
		);

		expect(getByText("Pad Thai")).toBeTruthy();
	});
});
