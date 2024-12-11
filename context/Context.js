import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
// import * as SecureStore from 'expo-secure-store';

const Context = createContext(null);

export function ContextProvider({ children }) {
	const [isAutheticated, setIsAutheticated] = useState(false);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	async function _storeData(stream) {
		try {
			const existingData = await _retrieveData();

			const newData = existingData ? [...existingData, stream] : [stream];

			await AsyncStorage.setItem('@favorites', JSON.stringify(newData));
		} catch (error) {
			throw new Error('Error in saving your favorites!');
		}
	}

	async function _retrieveData() {
		try {
			const value = await AsyncStorage.getItem('@favorites');

			return value ? JSON.parse(value) : [];
		} catch (error) {
			throw new Error('Error retrieving your favorites!');
		}
	}

	function backgroundForDifferentPlatforms() {
		if (Platform.OS === 'ios' || Platform.OS === 'macos') {
			return '#e5e7eb';
		} else if (Platform.OS === 'android' || Platform.OS === 'windows') {
			return '#374151';
		}

		return '#6b7280';
	}

	const sharedValue = {
		_storeData,
		_retrieveData,
		backgroundForDifferentPlatforms,
		isAutheticated,
		setIsAutheticated,
		user,
		setUser,
	};

	return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export function useContextProvider() {
	const context = useContext(Context);

	if (!context) throw new Error('Error in Context API!');

	return context;
}
