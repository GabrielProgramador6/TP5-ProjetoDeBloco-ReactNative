import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { getRecommendations } from '../api';

export default function Recommendations({ id, navigation }) {
	const [recommendation, setRecommendation] = useState([]);

	useEffect(() => {
		async function fetchRecommendations() {
			const recommendations = await getRecommendations(id);
			setRecommendation(recommendations);
			console.log(recommendations);
		}

		fetchRecommendations();
	}, []);

	if (recommendation.length === 0) return;

	const imageUrl = recommendation?.backdrop_path
		? `https://image.tmdb.org/t/p/w500${recommendation.backdrop_path}`
		: 'https://via.placeholder.com/500';

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={true}
			style={{
				flexDirection: 'row',
				marginBottom: 20,
				marginTop: 30,
			}}>
			{recommendation?.map((rec, i) => (
				<Pressable
					onPress={() => navigation.navigate('Stream', { id: rec?.id })}
					key={rec.id}
					style={{
						width: 200,
						height: 300,
					}}>
					<Image
						style={{ width: 200, height: 300 }}
						source={{
							uri: rec.poster_path
								? `https://image.tmdb.org/t/p/w500${rec.poster_path}`
								: 'https://via.placeholder.com/500',
						}}
					/>
				</Pressable>
			))}
		</ScrollView>
	);
}
