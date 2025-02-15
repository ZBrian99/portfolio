import styled from '@emotion/styled';
import { About } from '../../components/About/About';
import { Contact } from '../../components/Contact/Contact';
import { Projects } from '../../components/Projects/Projects';
import { Hero } from '../../components/Hero/Hero';
// import { Services } from '../../components/Services/Services';

const HomeWrapper = styled.main`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	max-width: 80rem;
	margin: auto;
	gap: 10rem;


`;

export const HomePage = () => {
	return (
		<HomeWrapper>
			<Hero />
			{/* <Services /> */}
			<Projects />
			<About />
			<Contact />
		</HomeWrapper>
	);
};
