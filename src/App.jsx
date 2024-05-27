import { GlobalStyles } from './styles/GlobalStyles ';
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { NebulaBackground } from './components/Background/NebulaBackground';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<NebulaBackground />
			<Navbar />
			<HomePage />
			<Footer />
		</>
	);
};
