import React, { useState, useEffect } from 'react';
import { Button, FlatList, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';

export default function App() {
	const [assets, setAssets] = useState([]);

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) {
			alert("You need to enable permission to access the library.");
		}
	}

	useEffect(() => {
		requestPermission();
	}, [])

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true });
			if (!result.canceled) {
				setAssets(result.assets);
				console.log(assets);
			}
		} catch (error) {
			console.log("Error reading an image", error);
		}
	}

	return (
		<GestureHandlerRootView>
			<Screen>
				<Button title='Select Image' onPress={selectImage} />
				<FlatList
					data={assets}
					keyExtractor={item => item.assetId}
					renderItem={({ item }) => <Image source={{ uri: item.uri }} style={{ width: 200, height: 200 }} />}
				/>
			</Screen>
		</GestureHandlerRootView>
	);
}