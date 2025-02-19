import styled from '@emotion/styled';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

const ProjectsContainer = styled.section`
	width: 100%;
	max-width: 120rem;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	/* @media (min-width: 48rem) {
		padding: 0 3rem;
	} */
`;

const ProjectsTitle = styled.h3`
	text-align: center;
	font-size: 3em;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const ProjectWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
	width: 100%;

    @media (min-width: 48rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 70rem) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<ProjectsTitle>Proyectos</ProjectsTitle>
			<ProjectWrapper>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} index={index} />
				))}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
