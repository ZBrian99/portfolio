import { GlobalStyles } from './styles/GlobalStyles ';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Background } from './components/Background/Background';
export const App = () => {
	return (
		<>
			<GlobalStyles />

      <Background/>

			{/* <Navbar /> */}

			{/* <Hero /> */}
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Project /> */}
			{/* <Contact/> */}
		</>
	);
};
