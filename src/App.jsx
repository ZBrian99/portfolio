import { GlobalStyles } from './styles/GlobalStyles ';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Background } from './components/Background/Background';
import { HomePage } from './pages/Home/HomePage';
import { NavbarTest } from './components/Navbar/NavbarTest';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background />
			{/* <Navbar /> */}
			<NavbarTest />
			<Hero />
			<HomePage />
		</>
	);
};
