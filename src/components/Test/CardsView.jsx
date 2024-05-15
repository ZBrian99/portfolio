import styled from '@emotion/styled';
import { TestCardGlare } from './TestCardGlare';
import { TestCardPerspective } from './TestCardPerspective';
import { TestCardPerspectiveGlare } from './TestCardPerspectiveGlare';

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

export const CardsView = () => {
	return (
		<CardContainer>
			<TestCardGlare />
			<TestCardPerspective />
			<TestCardPerspectiveGlare />
		</CardContainer>
	);
};
