import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;

	return (
		<View style={styles.overlay}>
			<LottieView
				style={styles.animation}
				autoPlay
				loop
				source={require("../assets/animations/loader.json")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	animation: {
		flex: 1,
	},
	overlay: {
		position: "absolute",
		backgroundColor: "white",
		height: "100%",
		opacity: 0.8,
		width: "100%",
		zIndex: 1,
	},
});

export default ActivityIndicator;
