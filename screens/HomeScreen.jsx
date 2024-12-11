import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStreams } from '../api';
import StreamList from '../components/StreamList';
import Footer from '../components/Footer';
import { BookHeart, Settings } from 'lucide-react-native';
import { useContextProvider } from '../context/Context';

export default function HomeScreen({ navigation }) {
	const [streams, setStreams] = useState(null);

	const { backgroundForDifferentPlatforms } = useContextProvider();

	useEffect(() => {
		async function fetchStreams() {
			const stream = await getStreams();
			setStreams(stream);
			console.log(stream);
		}

		fetchStreams();
	}, []);

	return (
		<ScrollView>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
					justifyContent: 'space-between',
					marginBlock: 20,
					marginHorizontal: 20,
					cursor: 'pointer',
					backgroundColor: backgroundForDifferentPlatforms,
				}}>
				<Text
					style={{
						fontSize: 32,
						fontWeight: 700,
						textAlign: 'left',
						marginBlock: 20,
						marginHorizontal: 10,
					}}>
					IMDB Films
				</Text>
				<View style={{ flexDirection: 'row', gap: 10 }}>
					<BookHeart onPress={() => navigation.navigate('Favorites')} />
					<Settings onPress={() => navigation.navigate('Settings')} />
				</View>
			</View>

			<FlatList
				data={streams}
				renderItem={({ item }) => (
					<StreamList item={item} navigation={navigation} />
				)}
				keyExtractor={(item) => item.id}
			/>
			<Footer />
		</ScrollView>
	);
}
