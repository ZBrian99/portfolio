import { GlobalStyles } from './styles/GlobalStyles ';
import { Skills } from './components/Skills/Skills';
import { Proyects } from './components/Projects/Proyects';
import { Constellation } from './components/Projects/Constellation';
import { TestSVG } from './components/Projects/TestSVG';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			{/* <Skills /> */}
			<TestSVG />
			{/* <Constellation /> */}
			{/* <Proyects /> */}
		</>
	);
};
