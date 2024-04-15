import React from 'react';
import styled from '@emotion/styled';
import Sun from './Sun';
import PlanetComponent from './Planet';
import skillsData from '../../data/skills.json';
import { Star } from './Star';

const SkillSection = styled.div`
	width: 100%;
	height: 120vh;
	overflow: hidden;

	position: relative;
	/* border-top: 1px dashed rgba(255, 255, 255, 0.3); */
	@media screen and (min-width: 48rem) {
		height: 120vh;
		border-top: 1px dashed rgba(255, 255, 255, 0.3);
		border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
	}
	/* background-color: #ff99005f; */
`;

const StartContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
  
	/* background-color: #00eeff5f; */
	@media screen and (min-width: 48rem) {
    margin-top: 10vh;
	}
	/* display: grid;

	grid-template-columns: repeat(2, 1fr);

	gap: 5rem;
	@media (min-width: 48rem) {
		grid-template-columns: repeat(4, 1fr);
	} */
`;

const PlanetContainer = styled.div`
	width: 100%;
	height: 120vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	top: -50%;
	margin-top: calc(${({ size }) => `${size}vh`} + 10vh);
	@media screen and (min-width: 48rem) {
		height: 120vh;
		top: 0;
		margin-top: 0;
		left: -50%;
		margin-left: calc(${({ size }) => `${size}vw`} / 2 + 5vh);
	}
`;

const Skills = () => {
	return (
		<SkillSection>
			<StartContainer>
				{skillsData.secondaySkills.map((skill, index) => (
					<Star key={index} {...skill} sun={skillsData.main.size} />
				))}
			</StartContainer>
			<PlanetContainer size={skillsData.main.size}>
				<Sun {...skillsData.main} />
				{skillsData.skills.map((skill, index) => (
					<PlanetComponent key={index} {...skill} />
				))}
			</PlanetContainer>
		</SkillSection>
	);
};

export default Skills;
