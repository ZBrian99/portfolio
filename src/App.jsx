import { GlobalStyles } from './styles/GlobalStyles ';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Background } from './components/Background/Background';
import { HomePage } from './pages/Home/HomePage';
import { NavbarTest } from './components/Navbar/NavbarTest';
import { Footer } from './components/Footer/Footer';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background />
			<NavbarTest />
			<Hero />
			<HomePage />
			<Footer />
		</>
	);
};
