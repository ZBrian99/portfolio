import styled from '@emotion/styled';

const Card = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);

	border-radius: 0.5rem;

	@media screen and (min-width: 60rem) {
		flex: 1;
	}
`;

const CardTitle = styled.h3`
	font-size: 1.5em;
`;
const CardInfo = styled.p`
	color: #d1d1d1;
	margin-bottom: 0.5rem;
`;

export const ServiceCard = ({ service }) => {
	return (
		<Card>
			<CardTitle>{service.title} </CardTitle>
			<CardInfo>{service.description}</CardInfo>
		</Card>
	);
};
