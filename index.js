import { registerRootComponent } from 'expo';

import App from './App';
import { ContextProvider } from './context/Context';

function Root() {
	return (
		<ContextProvider>
			<App />
		</ContextProvider>
	);
}

registerRootComponent(Root);
