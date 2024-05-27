import { GlobalStyles } from './styles/GlobalStyles ';
import { HomePage } from './pages/Home/HomePage';
import { NavbarTest } from './components/Navbar/NavbarTest';
import { Footer } from './components/Footer/Footer';
import { NebulaBackground } from './components/Background/NebulaBackground';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<NebulaBackground />
			<NavbarTest />
			<HomePage />
			<Footer />
		</>
	);
};
