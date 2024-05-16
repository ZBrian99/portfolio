import styled from '@emotion/styled';

const ServicesContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	padding: 2rem;
	/* background-color: #333; */
	/* background: radial-gradient(at right bottom, #111, #333); */
	/* box-shadow: 0 0 0.1rem 0.1rem #555 inset; */
	border-radius: 1rem;
	padding: 2rem 1rem;
	flex-wrap: wrap;
	width: 100%;
	order: 3;

	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)); */

	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

const ServicesTitle = styled.h3`
	/* text-align: center; */
	font-size: 2em;
	margin-bottom: 0.5rem;

	width: 100%;
`;

const ServiceCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
	border-radius: 1rem;
	background-color: #111;
	width: 100%;
	min-height: 20rem;
	text-align: center;
	/* background-color: #222; */
	/* background: radial-gradient(at right bottom, #111, #333); */
	/* box-shadow: 0 0 0.1rem 0.1rem #555 inset; */

	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)); */

	@media screen and (min-width: 55rem) {
		max-width: 20rem;
	}
`;

const ServiceInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ServiceTitle = styled.h3`
	margin-bottom: 0.5rem;
	font-size: 1.5em;
`;

const ServiceDescription = styled.p`
	font-size: 1em;
`;

const ServiceImage = styled.img`
	width: 3.5rem;
	height: 3.5rem;
`;

export const Services = () => {
	return (
		<ServicesContainer>
			<ServicesTitle>Servicios</ServicesTitle>
			<ServiceCard>
				<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
				<ServiceInfo>
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
						incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut. Vitae
						amet molestiae totam eum!
					</ServiceDescription>
				</ServiceInfo>
			</ServiceCard>
			<ServiceCard>
				<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
				<ServiceInfo>
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
						incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut. Vitae
						amet molestiae totam eum
					</ServiceDescription>
				</ServiceInfo>
			</ServiceCard>
			<ServiceCard>
				<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
				<ServiceInfo>
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis accusamus, quae fugiat, fugit
						alias odit ipsa quia obcaecati perferendis molestiae beatae et soluta sed commodi.
					</ServiceDescription>
				</ServiceInfo>
			</ServiceCard>
		</ServicesContainer>
	);
};
