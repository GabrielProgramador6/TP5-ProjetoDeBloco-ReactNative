import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import { useContextProvider } from '../context/Context';

export default function StreamList({ item, navigation }) {
	const imageUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;

	const { _storeData } = useContextProvider();

	const renderRightActions = () => (
		<RectButton
			style={[styles.actionButton, { backgroundColor: 'transparent' }]}
			onPress={() => _storeData(item)}>
			<Text style={styles.actionText}>Favorite</Text>
		</RectButton>
	);

	return (
		<Pressable
			onPress={() => navigation.navigate('Stream', { id: item?.id })}
			style={{
				boxShadow: '0px 5px 10px rgba(0,0,0,0.9)',
				paddingTop: 20,
				display: 'flex',
				justifyContent: 'space-between',
				height: '100%',
				cursor: 'pointer',
				borderRadius: 10,
				overflow: 'hidden',
			}}>
			<Text
				style={{
					fontSize: 21,
					fontWeight: 700,
					marginLeft: 10,
					marginBottom: 10,
				}}>
				{item.original_title
					? item.original_title
					: item.title
					? item.title
					: item.name
					? item.name
					: item.original_name}
			</Text>
			<Swipeable renderRightActions={renderRightActions}>
				<Image
					style={{ width: '100%', height: 300 }}
					source={{ uri: imageUrl, cache: 'only-if-cached' }}
				/>
			</Swipeable>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		boxShadow: '0px 5px 10px rgba(0,0,0,0.9)',
		paddingTop: 20,
		display: 'flex',
		justifyContent: 'space-between',
		height: '100%',
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: '#fff',
		marginBottom: 10,
	},
	title: {
		fontSize: 21,
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 10,
	},
	image: {
		width: '100%',
		height: 300,
	},
	actionButton: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: '100%',
		cursor: 'pointer',
	},
	actionText: {
		color: '#000',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
