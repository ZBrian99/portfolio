import React from 'react';
import styled from '@emotion/styled';
import { Sun } from './Sun';
import skillsData from '../../data/skills.json';
import { Star } from './Star';
import { Planet } from './Planet';

const SkillsSection = styled.div`
	width: 100%;
	height: 115lvh;
	overflow: hidden;
	background-image: url('src/assets/images/background.png');
	position: relative;
	@media screen and (min-width: 60rem) {
		height: 115lvh;
		/* border-top: 1px dashed rgba(255, 255, 255, 0.3); */
		/* border-bottom: 1px dashed rgba(255, 255, 255, 0.3); */
	}
`;

const StartContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;

	@media screen and (min-width: 60rem) {
		margin-top: 10vh;
	}
`;

const PlanetContainer = styled.div`
	width: 100%;
	height: 120vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	top: -50%;
	/* margin-top: 5vh; */
	margin-top: calc(${({ size }) => `${size}vh`} + 5vh);

	@media screen and (min-width: 60rem) {
		height: 120vh;
		top: 0;
		margin-top: 0;
		left: -50%;
		margin-left: calc(${({ size }) => `${size}vw`} / 2 + 5vh);
	}
`;

const SkillsDescription = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	background-color: #000;
	padding: 2rem;
`;
const ImageContainer = styled.div`
	width: 2rem;
	height: 2rem;
	${({ type }) => type === 'future' && ' filter: grayscale(100%);'}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const Skills = () => {
	const allSkills = [
		{ ...skillsData.main, type: 'main' },
		...skillsData.skills.map((skill) => ({ ...skill, type: 'skill' })),
		...skillsData.skills.flatMap((skill) => (skill.moons || []).map((moon) => ({ ...moon, type: 'moon' }))),
		...skillsData.secondaySkills.map((skill) => ({ ...skill, type: 'secondary' })),
		...skillsData.futureSkills.map((skill) => ({ ...skill, type: 'future' })),
	];
	return (
		<>
			<SkillsSection>
				<StartContainer>
					{/* {skillsData.secondaySkills.map((skill, index) => (
					<Star key={index} {...skill} sun={skillsData.main.size} />
				))} */}
				</StartContainer>
				<PlanetContainer size={skillsData.main.size}>
					<Sun {...skillsData.main} />
					{skillsData.skills.map((skill, index) => (
						<Planet key={index} {...skill} orbit={true} />
					))}
				</PlanetContainer>
			</SkillsSection>
			<SkillsDescription>
				{allSkills &&
					allSkills.map((skill, index) => (
						<ImageContainer key={index} type={skill.type}>
							<Image src={skill.src} alt={skill.name} />
						</ImageContainer>
					))}
			</SkillsDescription>
		</>
	);
};
