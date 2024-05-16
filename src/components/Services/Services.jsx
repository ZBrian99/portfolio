import styled from '@emotion/styled';

const ServicesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const ServicesTitle = styled.h3`
	width: 100%;
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const ServiceWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;
`;

const ServiceCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
	border-radius: 1rem;
	width: 100%;
	max-width: 20rem;
	min-height: 20rem;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
`;

const ServiceTitle = styled.h3`
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
			<ServiceWrapper>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
						incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut. Vitae
						amet molestiae totam eum!
					</ServiceDescription>
				</ServiceCard>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
						incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut. Vitae
						amet molestiae totam eum
					</ServiceDescription>
				</ServiceCard>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
					<ServiceDescription>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis accusamus, quae fugiat, fugit
						alias odit ipsa quia obcaecati perferendis molestiae beatae et soluta sed commodi.
					</ServiceDescription>
				</ServiceCard>
			</ServiceWrapper>
		</ServicesContainer>
	);
};
