import GlobalStyles from './styles/GlobalStyles ';
import { Test } from './components/Test';
import { Skills } from './components/Skills/Skills';
import { SistemaSolar } from './TestOrb';

export const App = () => {
	return (
		<>
			<GlobalStyles />
			{/* <Skills /> */}
			<SistemaSolar />
		</>
	);
};
