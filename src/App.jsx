import { GlobalStyles } from './styles/GlobalStyles ';
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<HomePage />
			<Footer />
		</>
	);
};
