import styled from '@emotion/styled';
import { ServiceCard } from './ServiceCard';
import { services } from '../../data/services';
const ServicesContainer = styled.section`
	width: 100%;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	@media screen and (min-width: 45rem) {
		padding: 0 3rem;
	}
	@media screen and (min-width: 50rem) {
		padding: 0 2rem;
	}
`;

const ServicesTitle = styled.h3`
	text-align: center;
	font-size: 3em;

	color: #ffd000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const ProjectWrapper = styled.div`
	/* display: flex; */
	/* flex-wrap: wrap; */
	/* justify-content: space-between; */
	display: grid;
	width: 100%;
	position: relative;
	gap: 3rem;

	@media screen and (min-width: 40rem) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: 60rem) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesTitle>Soluciones</ServicesTitle>
			<ProjectWrapper>
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</ProjectWrapper>
		</ServicesContainer>
	);
};
