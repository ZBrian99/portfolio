import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { projects } from '../../data/projects';
import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectCardTest } from './ProjectCardTest';

const ProjectsContainer = styled.section`
	width: 100%;
	/* max-width: 120rem; */
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const ProjectsTitle = styled(motion.h3)`
	text-align: center;
	font-size: 3em;

	color: #ffd000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const ProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	position: relative;
	gap: 3rem;
	/* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* @media screen and (min-width: 70rem){
    
    grid-template-columns: repeat(2, 1fr);
  }
	max-width: 84rem; */

	/* background-color: purple; */
`;

const title = {
	hidden: { opacity: 0, x: -100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

export const Projects = () => {
	const [activeCard, setActiveCard] = useState(null);

	const projectContainerRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (projectContainerRef.current && !projectContainerRef.current.contains(event.target)) {
				setActiveCard(null);
			}
		};

		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	return (
		<ProjectsContainer ref={projectContainerRef}>
      <ProjectsTitle
        // variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}
      >
				Proyectos
			</ProjectsTitle>
			<ProjectWrapper>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						index={index}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
					/>
				))}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
