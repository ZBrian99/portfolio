import { Navbar } from './components';
import { Header } from './components/Header';
import { DataProvider } from './context';

export const App = () => {
	return (
		<DataProvider>
			<Navbar />
		</DataProvider>
	);
};
