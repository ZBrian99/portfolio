import React, { useState } from 'react';
import styled from '@emotion/styled';
import skillsData from '../../data/skills.json';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 1.5rem;
	background-image: url('src/assets/images/background.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
`;

const Title = styled.h1`
	/* Estilos para el título */
`;

const Container = styled.div`
	/* Estilos para el contenedor */
	height: 100%;
	width: 100%;
	position: relative;
	background-color: red;
`;

const ReactSkill = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ReactLogo = styled.img`
	width: 100px; /* Tamaño del logo de React */
	height: 100px; /* Tamaño del logo de React */
`;

const SkillsContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Skill = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SkillOrbit = styled.div`
	position: absolute;
	border: 1px dashed white; /* Estilo de la línea de la órbita */
	border-radius: 50%; /* Hace que la línea de la órbita sea circular */
	transform: translate(-50%, -50%);
`;

const SkillLogo = styled.img`
	width: 50px; /* Ajusta el tamaño según tu necesidad */
	height: 50px; /* Ajusta el tamaño según tu necesidad */
	animation: orbitAnimation ${(props) => props.duration}s linear infinite; /* Animación de órbita */
	@keyframes orbitAnimation {
		from {
			transform: rotate(0deg) translateX(${(props) => props.radius}px) rotate(0deg); /* Posición inicial de la órbita */
		}
		to {
			transform: rotate(360deg) translateX(${(props) => props.radius}px) rotate(-360deg); /* Posición final de la órbita */
		}
	}
`;

export const Skills = () => {
	const { main, skills, futureSkills } = skillsData;
	const [angles, setAngles] = useState(Array(skills.length + futureSkills.length).fill(Math.PI / 6));
	const orbitRadius = 150; /* Radio de la órbita */

	const handleAngleChange = (index, increment) => {
		setAngles((prevAngles) => {
			const newAngles = [...prevAngles];
			newAngles[index] += increment;
			return newAngles;
		});
	};

	return (
		<Section>
			<Title>Skills</Title>
			<Container>
				<ReactSkill>
					<ReactLogo src={main.src} alt={main.name} />
				</ReactSkill>
				<SkillsContainer>
					{skills.map((skill, index) => (
						<Skill
							key={index}
							style={{
								left: `${orbitRadius * Math.cos(angles[index])}px`,
								top: `${orbitRadius * Math.sin(angles[index])}px`,
							}}
						>
							<SkillOrbit style={{ width: orbitRadius * 2, height: orbitRadius * 2 }} />
							<SkillLogo src={skill.src} alt={skill.name} duration={(index + 1) * 3} radius={orbitRadius} />
							<span>{skill.name}</span>
							<button onClick={() => handleAngleChange(index, -Math.PI / 12)}>Disminuir Ángulo</button>
							<button onClick={() => handleAngleChange(index, Math.PI / 12)}>Aumentar Ángulo</button>
						</Skill>
					))}
					{futureSkills.map((futureSkill, index) => (
						<Skill
							key={index + skills.length}
							style={{
								left: `${orbitRadius * Math.cos(angles[skills.length + index])}px`,
								top: `${orbitRadius * Math.sin(angles[skills.length + index])}px`,
							}}
						>
							<SkillOrbit style={{ width: orbitRadius * 2, height: orbitRadius * 2 }} />
							<SkillLogo
								src={futureSkill.src}
								alt={futureSkill.name}
								duration={(skills.length + index + 1) * 3}
								radius={orbitRadius}
							/>
							<span>{futureSkill.name}</span>
							<button onClick={() => handleAngleChange(skills.length + index, -Math.PI / 12)}>
								Disminuir Ángulo
							</button>
							<button onClick={() => handleAngleChange(skills.length + index, Math.PI / 12)}>
								Aumentar Ángulo
							</button>
						</Skill>
					))}
				</SkillsContainer>
			</Container>
		</Section>
	);
};
