import {
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function Footer() {
	return (
		<View
			style={{
				marginTop: 20,
				backgroundColor: 'transparent',
				paddingHorizontal: 4,
				paddingVertical: 6,
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
				justifyContent: 'space-between',
				gap: 4,
			}}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					gap: 4,
					color: 'white',
					fontSize: 18,
				}}>
				<Youtube width={24} height={24} color="black" />
				<Twitter width={24} height={24} color="black" />
				<Facebook width={24} height={24} color="black" />
				<Instagram width={24} height={24} color="black" />
				<Linkedin width={24} height={24} color="black" />
			</View>

			<View
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'row',
					gap: 2,
				}}>
				<Text style={{ fontSize: 14 }}>Políticas e privacidade</Text>
				<Text style={{ fontSize: 14 }}>Termos de uso</Text>
				<Text style={{ fontSize: 14 }}>Gerenciar cookies</Text>
				<Text style={{ fontSize: 14 }}>Informações</Text>
				<Text style={{ fontSize: 14 }}>Ajuda</Text>
			</View>
		</View>
	);
}
