import styled from '@emotion/styled';
import { About } from '../../components/About/About';
import { Services } from '../../components/Services/Services';
import { Skills } from '../../components/Skills/Skills';
import { Contact } from '../../components/Contact/Contact';
import { Projects } from '../../components/Projects/Projects';

const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	max-width: 80rem;
	/* background-color: #faebd730; */
	margin: auto;
	/* overflow: hidden; */
  gap: 10rem;
	/* gap: 15rem; */
	/* padding-top: 10rem; */
	/* @media screen and (min-width: 60rem) { */
	/* padding: 1rem 5rem; */
	/* padding-top: 10rem; */
	/* } */
`;

export const HomePage = () => {
	return (
		<HomeWrapper>
			{/* <Skills /> */}
			{/* <Services /> */}
			{/* <Projects /> */}
			
			{/* <div
				style={{
					backgroundColor: '#d48217a7',
					width: '100%',
					height: '100vh',
					margin: '0 2rem',
          transform: 'translateY(-60%)',
          zIndex: -1,
          maxWidth: '84rem',
				}}
			></div> */}
			<Projects />
			<About />

			<Contact />

		</HomeWrapper>
	);
};
