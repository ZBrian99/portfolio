import styled from '@emotion/styled';
import { projects } from '../../data/projects';
import { ProjectSimpleCard } from './ProjectSimpleCard';

const ProjectsContainer = styled.section`
	width: 100%;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	@media screen and (min-width: 45rem) {
		padding: 0 3rem;
	}
	@media screen and (min-width: 50rem) {
		padding: 0 2rem;
	}
`;

const ProjectsTitle = styled.h3`
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
`;

export const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<ProjectsTitle>Proyectos</ProjectsTitle>
			<ProjectWrapper>
				{projects.map((project, index) => (
					<ProjectSimpleCard key={index} project={project} />
				))}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
