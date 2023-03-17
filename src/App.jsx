import { Header } from './components/Header';
import { Icon } from './components/Prueba1';
import { DataProvider } from './context';

export const App = () => {
	return (
		<DataProvider>
			<Icon width='500px' height='500px' />
		</DataProvider>
	);
};
