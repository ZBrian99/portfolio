import { GlobalStyles } from './styles/GlobalStyles ';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Projects/Project';
import { TestStar } from './components/Projects/TestStar';
export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Skills />
			{/* <TestSVG /> */}
			{/* <Constellation /> */}
			<Project />
      {/* <TestStar /> */}
   
     

		</>
	);
};
