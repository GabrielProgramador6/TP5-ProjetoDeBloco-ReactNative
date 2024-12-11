import React from 'react';
import { Button, View } from 'react-native';
import { useContextProvider } from '../context/Context';

export default function SettingsScreen() {
	const { isAutheticated, setIsAutheticated, user, setUser } =
		useContextProvider();

	function onSubmit() {
		setIsAutheticated(false);
		setUser({ email: '', password: '' });
		navigation.navigate('Login');
	}

	return (
		<View>
			<Button title="Logout" onPress={() => onSubmit()} />
		</View>
	);
}
