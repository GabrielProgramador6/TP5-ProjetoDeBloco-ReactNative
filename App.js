import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StreamScreen from './screens/StreamScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ContextProvider, useContextProvider } from './context/Context';
import FavoritesScreen from './screens/FavoritesScreen';
import LoginScreen from './screens/LoginScreen';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
	const { isAutheticated } = useContextProvider();
	// const [isAutheticated, setIsAutheticated] = useState(true);

	return (
		// <ContextProvider>
		<NavigationContainer>
			<Stack.Navigator>
				{isAutheticated ? (
					<>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Stream" component={StreamScreen} />
						<Stack.Screen name="Favorites" component={FavoritesScreen} />
						<Stack.Screen name="Settings" component={SettingsScreen} />
					</>
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
		// </ContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
