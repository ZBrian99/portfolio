import React from 'react';
import styled from '@emotion/styled';
import {Sun} from './Sun';
import skillsData from '../../data/skills.json';
import { Star } from './Star';
import {Planet} from './Planet';

const SkillsSection = styled.div`
	width: 100%;
	height: 120vh;
	overflow: hidden;

	position: relative;
	@media screen and (min-width: 60rem) {
		height: 120vh;
		border-top: 1px dashed rgba(255, 255, 255, 0.3);
		border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
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
	margin-top: calc(${({ size }) => `${size}vh`} + 10vh);
	@media screen and (min-width: 60rem) {
		height: 120vh;
		top: 0;
		margin-top: 0;
		left: -50%;
		margin-left: calc(${({ size }) => `${size}vw`} / 2 + 5vh);
	}
`;

export const Skills = () => {
	return (
		<SkillsSection>
			<StartContainer>
				{skillsData.secondaySkills.map((skill, index) => (
					<Star key={index} {...skill} sun={skillsData.main.size} />
				))}
			</StartContainer>
			<PlanetContainer size={skillsData.main.size}>
				<Sun {...skillsData.main} />
				{skillsData.skills.map((skill, index) => (
					<Planet key={index} {...skill} />
				))}
			</PlanetContainer>
		</SkillsSection>
	);
};

