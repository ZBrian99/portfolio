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
	margin: auto;
	gap: 15rem;
	overflow: hidden;
	padding-top: 10rem;
	@media screen and (min-width: 60rem) {
		/* padding: 1rem 5rem; */
		padding-top: 10rem;
	}
`;

export const HomePage = () => {
	return (
		<HomeWrapper>
			<About />
			{/* <Skills /> */}
			<Services />
			<Projects />
			<Contact />
		</HomeWrapper>
	);
};
