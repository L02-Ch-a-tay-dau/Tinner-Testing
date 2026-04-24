import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { describe, beforeEach, it, expect, jest } from "@jest/globals";

import OnboardingScreen from "../app/OnboardingScreen";

const mockReplace = jest.fn();

jest.mock("expo-router", () => ({
	useRouter: () => ({
		replace: mockReplace,
	}),
}));

const renderOnboardingScreen = () =>
	render(
		<SafeAreaProvider>
			<OnboardingScreen />
		</SafeAreaProvider>
	);

describe("OnboardingScreen", () => {
	beforeEach(() => {
		mockReplace.mockClear();
	});

	it("1. Render thành công — hiển thị slide đầu tiên", () => {
		const { getByText } = renderOnboardingScreen();

		expect(getByText("Discover Amazing Food")).toBeTruthy();
		expect(getByText("Swipe through delicious dishes and find your next favorite meal")).toBeTruthy();
		expect(getByText("Skip")).toBeTruthy();
		expect(getByText("Next")).toBeTruthy();
	});

	it("2. Bấm Next chuyển sang slide tiếp theo", async () => {
		const { getByText } = renderOnboardingScreen();

		fireEvent.press(getByText("Next"));

		await waitFor(() => {
			expect(getByText("Smart Filters")).toBeTruthy();
			expect(getByText("Customize your preferences with cuisine, dietary, price, and distance filters")).toBeTruthy();
		});
	});

	it("3. Bấm Skip điều hướng sang HomeScreen", () => {
		const { getByText } = renderOnboardingScreen();

		fireEvent.press(getByText("Skip"));

		expect(mockReplace).toHaveBeenCalledTimes(1);
		expect(mockReplace).toHaveBeenCalledWith("/HomeScreen");
	});

	it("4. Bấm Next tới cuối thì Start sẽ điều hướng sang HomeScreen", async () => {
		const { getByText } = renderOnboardingScreen();

		fireEvent.press(getByText("Next"));
		fireEvent.press(getByText("Next"));
		fireEvent.press(getByText("Next"));
		fireEvent.press(getByText("Start"));

		await waitFor(() => {
			expect(mockReplace).toHaveBeenCalledWith("/HomeScreen");
		});
	});
});
