import { GlobalStyles } from './styles/GlobalStyles ';
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Background } from './components/Background/Background';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background />
			<Navbar />
			<HomePage />
			<Footer />
		</>
	);
};
