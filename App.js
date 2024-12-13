import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	return (
		<GestureHandlerRootView>
			<WelcomeScreen />
		</GestureHandlerRootView>
	);
}