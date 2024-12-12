import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, TextInput } from 'react-native';

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
]

import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
	const [category, setCategory] = useState(categories[0]);

	return (
		<GestureHandlerRootView>
			<Screen>
				<AppPicker
					selectedItem={category}
					onSelectItem={item => setCategory(item)}
					items={categories}
					icon="apps"
					placeholder="Category"
				/>
				<AppTextInput icon="email" placeholder="Email" />
			</Screen>
		</GestureHandlerRootView>
	);
}