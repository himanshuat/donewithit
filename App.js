import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

export default function App() {
	const [imageUri, setImageUri] = useState();

	return (
		<GestureHandlerRootView>
			<Screen>
				<ImageInput
					imageUri={imageUri}
					onChangeImage={uri => setImageUri(uri)}
				/>
			</Screen>
		</GestureHandlerRootView>
	);
}