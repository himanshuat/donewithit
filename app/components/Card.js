import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import Text from './Text';

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
	return (
		<TouchableWithoutFeedback onPress={onPress} >
			<View style={styles.card}>
				<Image style={styles.image} preview={{ uri: thumbnailUrl }} uri={imageUrl} tint='light' />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subTitle}>{subTitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden',
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 200,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold',
	},
	title: {
		marginBottom: 7,
	}
})

export default Card;