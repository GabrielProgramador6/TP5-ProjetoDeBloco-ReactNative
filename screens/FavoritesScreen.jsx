import React, { useEffect, useState } from 'react';
import { useContextProvider } from '../context/Context';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Favorites from '../components/Favorites';

export default function FavoritesScreen({ navigation }) {
	const { _retrieveData } = useContextProvider();

	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		async function fetchFavorites() {
			const data = await _retrieveData();
			setFavorites(data);
		}

		fetchFavorites();
	}, []);

	const uniqueData = Array.from(new Set(favorites.map((item) => item.id))).map(
		(id) => favorites.find((item) => item.id === id)
	);

	return (
		<ScrollView>
			<FlatList
				data={uniqueData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Favorites item={item} navigation={navigation} />
				)}
			/>
		</ScrollView>
	);
}
