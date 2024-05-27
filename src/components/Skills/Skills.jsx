import styled from '@emotion/styled';
import { skills } from '../../data/skills';

const SkillsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const Skill = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;

	border-radius: 1rem;
	opacity: 0.7;

	padding: 0.7rem;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.1);

	&:hover {
		opacity: 1;
		& > .SkillTooltip {
			opacity: 1;
		}
	}
`;

const SkillImage = styled.img`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const SkillTooltip = styled.span`
	position: absolute;
	left: 50%;
	top: 0%;
	transform: translate(-50%, -140%);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.9em;
	white-space: nowrap;
	transition: opacity 0.2s ease;
	pointer-events: none;
	opacity: 0;
	border-radius: 0.5rem;
	background-color: #222;

	&::before {
		content: '';
		position: absolute;
		bottom: 2%;
		left: 50%;
		transform: translate(-50%, 100%);
		border: 0.5rem solid #222;
		border-color: #222 transparent transparent transparent;
	}
`;

export const Skills = () => {
	return (
		<SkillsWrapper>
			{skills.map((skill, index) => (
				<Skill key={index}>
					<SkillTooltip className='SkillTooltip'>{skill.name}</SkillTooltip>
					<SkillImage src={skill.src} alt={skill.name} />
				</Skill>
			))}
		</SkillsWrapper>
	);
};
