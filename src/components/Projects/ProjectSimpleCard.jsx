import styled from '@emotion/styled';
import { GlowButtonAlt } from '../General/GlowButtonAlt';

const Card = styled.article`
	text-decoration: none;
	color: inherit;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.1);
	background: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	/* background-color: #0a0a0a; */
	border: 1px solid rgba(255, 255, 255, 0.05);

	@media screen and (min-width: 50rem) {
		max-width: calc(50% - 1.5rem);
		margin: 0 auto;
	}
	transform-style: preserve-3d;
	transition: transform 0.3s ease-out;
	&:hover {
		transform: perspective(1000px) rotateY(10deg) rotateX(5deg);
		&:nth-of-type(even) {
			transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
		}
	}
`;

const CardImageContainer = styled.div`
	border-radius: 1rem;
	transform: translateZ(3rem);

	width: 100%;
`;

const ProjectImage = styled.img`
	border-radius: 1rem;
	width: 100%;
	height: auto;
	aspect-ratio: 16 / 9;
	opacity: 0.9;
	user-select: none;
	transition: transform 0.3s ease-out;
`;

const Content = styled.div`
	width: 100%;
	flex: 1;
	text-align: center;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	padding: 0 2rem 2rem;
	z-index: 1;
`;

const Title = styled.h3`
	font-size: 1.8em;
	/* text-overflow: ellipsis; */
	/* overflow: hidden; */
	/* white-space: nowrap; */
	color: #ffffff;
`;

const Description = styled.p`
	font-size: 1em;
	color: #d1d1d1;
	margin-bottom: 0.5rem;
`;

const CardFooter = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1.5rem;
	margin-top: auto;
`;

const ProjectTechnologies = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	gap: 0.5rem;
	flex-wrap: wrap;
`;

const ProjectLinks = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	gap: 1rem;
	flex-wrap: wrap;
`;
const Link = styled.a`
	transition: transform 0.1s ease, background-color 0.1s ease;

	flex: 1;
	max-width: 10rem;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	text-decoration: none;
	color: inherit;
	display: flex;
	padding: 0.75rem;
	gap: 0.5rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	&:active {
		transform: scale(0.95);
	}
`;

const LinkIcon = styled.img`
	/* width: 100%; */
	/* height: 100%; */
	width: 1.5em;
	height: 1.5em;
`;



const Skill = styled.div`
	position: relative;
	width: 1.8em;
	height: 1.8em;
	opacity: 0.7;
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
	background-color: #111;
	&::before {
		content: '';
		z-index: 10000;
		bottom: 2%;
		left: 50%;
		transform: translate(-50%, 100%);
		border: 0.5rem solid #111;
		border-color: #111 transparent transparent transparent;
	}
`;


const getTechnologyIcon = (technology) => {
	switch (technology) {
		case 'React':
			return '/icons/react.svg';
		case 'Redux':
			return '/icons/redux.svg';
		case 'Node':
			return '/icons/nodejs.svg';
		case 'Sass':
			return '/icons/sass.svg';
		case 'Styled Components':
			return '/icons/styled-components.svg';
		case 'Framer Motion':
			return '/icons/framer-motion.svg';
		case 'HTML':
			return '/icons/html.svg';
		case 'CSS':
			return '/icons/css.svg';
		case 'JavaScript':
			return '/icons/js.svg';
		case 'React Router':
			return '/icons/router.svg';
		default:
			return '';
	}
};

export const ProjectSimpleCard = ({ project }) => {
	return (
		<Card>
			<CardImageContainer>
				<ProjectImage className='Img' src={project.image} alt={project.name} />
			</CardImageContainer>
			<Content className='Info'>
				<Title>{project.name}</Title>
				<Description>{project.description}</Description>
				<CardFooter>
					<ProjectTechnologies>
						{project.technologies.map((technology, index) => (
							<Skill key={index}>
								<SkillTooltip className='SkillTooltip'>{technology}</SkillTooltip>
								<SkillImage src={getTechnologyIcon(technology)} alt={technology} />
							</Skill>
						))}
					</ProjectTechnologies>
					<ProjectLinks>
						<Link href={project.repository} target='_blank' rel='noopener noreferrer'>
							GitHub
							<LinkIcon src='/icons/github-icon.svg' alt='Github' />
						</Link>
						<Link href={project.link} target='_blank' rel='noopener noreferrer'>
							Web
							<LinkIcon src='/icons/external-link_5.svg' alt='Web' />
						</Link>
					</ProjectLinks>
				</CardFooter>
			</Content>
		</Card>
	);
};
