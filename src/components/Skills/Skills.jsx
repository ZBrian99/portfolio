import styled from "@emotion/styled";

const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 1rem;
	/* background-color: #333; */
	/* background: radial-gradient(at right bottom, #111, #333); */
	/* box-shadow: 0 0 0.1rem 0.1rem #555 inset; */
	border-radius: 1rem;
	padding: 2rem 1rem;
	height: content;
	order: 2;
	width: 100%;

	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)); */

	/* @media screen and (min-width: 60rem) {
		flex: 1;
	} */
`;

const SkillsTitle = styled.h3`
	font-size: 2em;
	/* text-align: center; */
	width: 100%;
	margin-bottom: 0.5rem;
`;

const SkillsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	gap: 1rem;
`;

const Skill = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;
	background-color: #333;
	background: radial-gradient(at right bottom, #111, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	&:hover {
		cursor: pointer;
		& > .SkillTooltip {
			opacity: 1;
		}
	}
`;

const SkillImage = styled.img`
	width: 100%;
	height: 100%;
`;

const SkillTooltip = styled.span`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -3rem);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.9em;
	transition: opacity 0.2s ease;
	pointer-events: none;
	opacity: 0;
	z-index: 100;
	background-color: #333;
	background: radial-gradient(at right bottom, #111, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
`;

export const Skills = () => {
	return (
		<SkillsContainer>
			<SkillsTitle>Habilidades</SkillsTitle>
			<SkillsWrapper>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
				<Skill>
					<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
					<SkillImage src='src/assets/icons/react.svg' alt='React' />
				</Skill>
			</SkillsWrapper>
		</SkillsContainer>
	);
};
