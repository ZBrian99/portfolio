import { AboutMe, Hero, Navbar, Technologies } from './components';
import { DataProvider } from './context';

export const App = () => {
	return (
		<DataProvider>
			<div className='Container'>
				<Navbar />
				<Hero />
				<AboutMe />
				<Technologies />
			</div>
		</DataProvider>
	);
};
