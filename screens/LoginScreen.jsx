import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useContextProvider } from '../context/Context';

export default function LoginScreen({ navigation }) {
	const { isAutheticated, setIsAutheticated, user, setUser } =
		useContextProvider();

	function onSubmit() {
		console.log(user);
		if (user.email && user.password) {
			setIsAutheticated(true);
			navigation.navigate('Home');
		}

		return;
	}

	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				height: '88dvh',
			}}>
			<View style={{ marginTop: 20 }}>
				<Text style={{ paddingLeft: 12, marginTop: 20 }}>
					Digite o seu email:
				</Text>
				<TextInput
					style={styles.input}
					keyboardType="email-address"
					placeholder="Digite o seu email"
					onChangeText={(text) => setUser((prev) => ({ ...prev, email: text }))}
					value={user.email}
				/>

				<Text style={{ paddingLeft: 12, marginTop: 20 }}>
					Digite a sua senha:
				</Text>
				<TextInput
					style={styles.input}
					keyboardType="visible-password"
					placeholder="Digite a sua senha"
					onChangeText={(text) =>
						setUser((prev) => ({ ...prev, password: text }))
					}
					value={user.password}
				/>
			</View>

			<Button title="Login" onPress={() => onSubmit()} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
