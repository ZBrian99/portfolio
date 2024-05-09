import { GlobalStyles } from './styles/GlobalStyles ';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
export const App = () => {
	return (
		<>
			<GlobalStyles />

			{/* <Skills /> */}
			{/* <Project /> */}

			{/* <Contact/> */}
			<Navbar />
		</>
	);
};
