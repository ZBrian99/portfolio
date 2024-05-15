import { GlobalStyles } from './styles/GlobalStyles ';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Background } from './components/Background/Background';
import { TestCardPerspective } from './components/Test/TestCardPerspective';
import { TestCardGlare } from './components/Test/TestCardGlare';
import { TestCardPerspectiveGlare } from './components/Test/TestCardPerspectiveGlare';
import { CardsView } from './components/Test/CardsView';
import { GlassCard } from './components/Test/GlassCard';
export const App = () => {
	return (
		<>
			<GlobalStyles />

			<Background/>
			{/* <Navbar /> */}
			<CardsView />
      {/* <GlassCard/> */}
			{/* <Hero /> */}
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Project /> */}
			{/* <Contact/> */}
		</>
	);
};
