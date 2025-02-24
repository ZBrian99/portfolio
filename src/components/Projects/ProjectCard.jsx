import styled from '@emotion/styled';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectTypeColors } from './projectsConstants';
import { GlowButtonFullColor } from '../General/GlowButtonFullColor';
import { GlowButtonAlt } from '../General/GlowButtonAlt';

const Card = styled.article`
	position: relative;
	width: 100%;
	min-height: 26rem;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-radius: 1rem;
	box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease-in-out;
	display: flex;
	flex-direction: column;

	&:hover {
		box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
		background: rgba(255, 255, 255, 0.1);
		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)); */
		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.08)); */
		border: 1px solid rgba(255, 255, 255, 0.1);
		@media (min-width: 48rem) {
			transform: translateY(-0.5rem);
		}
	}

	@media (min-width: 48rem) {
		flex-direction: ${({ isEven }) => (isEven ? 'row' : 'column')};
	}
`;

const ProjectTypeTag = styled.span`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	font-size: 0.9em;
	background: rgba(0, 0, 0, 0.7);
	background: ${({ type }) => ProjectTypeColors[type]?.background || 'rgba(0, 0, 0, 0.7)'};
	color: ${({ type }) => ProjectTypeColors[type]?.color || 'white'};
	font-weight: 600;
	border: 1px solid ${({ type }) => ProjectTypeColors[type]?.border || 'white'};
	text-transform: capitalize;
	backdrop-filter: blur(0.5rem);
	box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
	z-index: 2;
`;

const ContentContainer = styled.div`
	flex: 1;
	padding: 1.5rem;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: ${({ isEven }) =>
		isEven ? 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)' : 'transparent'};
`;

const ProjectTitle = styled.h3`
	font-size: 1.6em;
	color: #ffffff;
`;

const Description = styled.p`
	color: #ececec;
	font-size: 0.875em;
	line-height: 1.4;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	@media screen and (max-width: 64rem) {
		flex-wrap: wrap;
	}
	gap: 1rem;
	margin-top: auto;
`;

const ButtonIcon = styled.img`
	width: 1.2rem;
	height: 1.2rem;
	margin-left: 0.5rem;
	object-fit: contain;
`;

export const ProjectCard = ({ project }) => {
	return (
		<Card>
			<ProjectTypeTag type={project.type}>{project.type}</ProjectTypeTag>
			<ProjectCarousel images={project.images} />
			<ContentContainer>
				<ProjectTitle>{project.name}</ProjectTitle>
				<ProjectTechnologies technologies={project.technologies} />
				<Description>{project.description}</Description>
				<ButtonsContainer>
					{/* <Button href={project.repository} target="_blank" rel="noopener noreferrer">
            <img src="/icons/github-icon.svg" alt="GitHub" />
            Código
          </Button>
          <Button primary href={project.link} target="_blank" rel="noopener noreferrer">
            Demo
            <img src="/icons/external-link_5.svg" alt="Demo" />
          </Button> */}
					{/* {project.repository && ( */}
						<GlowButtonAlt stretch href={project.repository} disabled={!project.repository} target='_blank' rel='noopener noreferrer'>
							GitHub <ButtonIcon src='/icons/github-icon.svg' alt='GitHub' />
						</GlowButtonAlt>
					{/* // )} */}
					<GlowButtonFullColor stretch href={project.link} target='_blank' rel='noopener noreferrer'>
						Web <ButtonIcon src='/icons/external-link_5.svg' alt='Demo' />
					</GlowButtonFullColor>
				</ButtonsContainer>
			</ContentContainer>
		</Card>
	);
};
