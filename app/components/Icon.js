import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size = 40, backgroundColor = '#000', iconColor = '#FFF' }) {
	return (
		<View style={[styles.icon, { width: size, height: size, borderRadius: size / 2, backgroundColor: backgroundColor }]}>
			<MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default Icon;