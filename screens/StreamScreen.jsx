import React, { useEffect, useState } from 'react';
import {
	Button,
	Image,
	ScrollView,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import { getStreamById } from '../api';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';
import { useContextProvider } from '../context/Context';

export default function StreamScreen({ route, navigation }) {
	const [stream, setStream] = useState(null);

	const { _storeData } = useContextProvider();

	const { id } = route.params;

	useEffect(() => {
		async function fetchStreamById() {
			const stream = await getStreamById(id);
			setStream(stream);
			console.log(stream);
		}

		fetchStreamById();
	}, [id]);

	if (!stream) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Erro ao carregar o Stream!</Text>
			</View>
		);
	}

	const imageUrl = stream?.backdrop_path
		? `https://image.tmdb.org/t/p/w500${stream.backdrop_path}`
		: 'https://via.placeholder.com/500';

	return (
		<ScrollView
			style={{
				boxShadow: '0px 5px 10px rgba(0,0,0,0.9)',
				paddingTop: 20,
				// height: '100%',
				cursor: 'pointer',
				borderRadius: 10,
				// overflow: 'hidden',
			}}>
			<Text
				style={{
					fontSize: 21,
					fontWeight: 700,
					marginLeft: 10,
					marginBottom: 10,
				}}>
				{stream.original_title
					? stream.original_title
					: stream.title
					? stream.title
					: stream.name
					? stream.name
					: stream.original_name}
			</Text>

			<Image
				style={{ width: '100%', height: 300 }}
				source={{ uri: imageUrl, cache: 'only-if-cached' }}
			/>

			<Text style={{ paddingHorizontal: 10, paddingBlock: 20, fontSize: 18 }}>
				{stream.overview}
			</Text>

			<Button title="Add your Favorites" onPress={() => _storeData(stream)} />

			<Recommendations id={stream.id} navigation={navigation} />

			<Footer />
		</ScrollView>
	);
}
