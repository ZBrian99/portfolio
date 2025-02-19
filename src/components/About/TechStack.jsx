import styled from '@emotion/styled';
import { technologyStyles, technologyIcons } from '../Projects/projectsConstants';
import skills from '../../data/skills';

const StackContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const CategorySection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const CategoryTitle = styled.h3`
	font-size: 1.2em;
	color: #f1f1f1;
	opacity: 0.9;
	font-weight: 500;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechGrid = styled.div`
	display: grid;
	gap: 0.5rem;
	grid-template-columns: repeat(4, 1fr);
	@media (min-width: 21rem) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media (min-width: 25rem) {
		grid-template-columns: repeat(6, 1fr);
	}
	@media (min-width: 32rem) {
		grid-template-columns: repeat(8, 1fr);
	}
	@media (min-width: 38rem) {
		grid-template-columns: repeat(10, 1fr);
	}
	@media (min-width: 45rem) {
		grid-template-columns: repeat(12, 1fr);
	}
	@media (min-width: 58rem) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (min-width: 60rem) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media (min-width: 75rem) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

const TechItem = styled.div`
	position: relative;
	width: 100%;
  overflow: hidden;
	aspect-ratio: 1;
	display: flex;
	color: #f3f8ff;
	align-items: center;
	justify-content: center;
	border-radius: 0.8rem;
	background: ${({ color }) => color?.background || 'rgba(255, 255, 255, 0.1)'};
	opacity: 0.85;
	transition: all 0.3s ease-in-out;
	cursor: default;

	&:hover {
		opacity: 1;
		box-shadow: 0 0 0.8rem ${({ color }) => color?.background || 'rgba(255, 255, 255, 0.1)'};
		/* background: ${({ color }) => {
			color?.background || 'rgba(255, 255, 255, 0.1)';
		}}; */
		transform: translateY(-0.25rem);

		&::before,
		&::after {
			opacity: 1;
			visibility: visible;
		}
	}

	&::before {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 130%;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.4rem 0.8rem;
		border-radius: 0.4rem;
		background: #000000;
		color: white;
		font-size: 0.8em;
		white-space: pre;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 10;
		box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 110%;
		left: 50%;
		transform: translate(-50%, calc(50% - 0.25rem));
		border: 0.5rem solid transparent;
		border-top: 0.5rem solid #000000;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 10;
	}
`;

const TechIcon = styled.img`
	width: 60%;
	height: 60%;
	object-fit: contain;
`;

export const TechStack = () => {
	return (
		<StackContainer>
			{skills.map((category) => (
				<CategorySection key={category.name}>
					<CategoryTitle>{category.name}</CategoryTitle>
					<TechGrid>
						{category.techs.map((tech) => (
							<TechItem 
								key={tech.name} 
								color={technologyStyles[tech.name]} 
								data-tooltip={tech.name}
							>
								<TechIcon src={tech.icon} alt={tech.name} />
							</TechItem>
						))}
					</TechGrid>
				</CategorySection>
			))}
		</StackContainer>
	);
};
