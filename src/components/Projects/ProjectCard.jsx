import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const TiltContainer = styled(motion.div)`
	text-decoration: none;
	color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	/* background-color: #0000ff88; */
	width: 100%;
	height: calc(120vw * 9 / 16);
	margin-bottom: 3rem;

	@media screen and (min-width: 40rem) {
		width: 39rem;
		height: 24rem;
	}
`;

const TiltCard = styled(Tilt)`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
	/* background-color: #ff260085; */

	text-align: center;
	width: 135%;
	height: calc(195vw * 9 / 16);

	@media screen and (min-width: 40rem) {
		width: 53rem;
		height: 39rem;
	}
`;

const ProjectCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	width: 65%;
	height: calc(100vw * 9 / 16);
	position: relative;
	overflow: hidden;

	@media screen and (min-width: 40rem) {
		width: 35rem;
		height: 20rem;
	}

	text-align: center;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

	border: 1px solid rgba(255, 255, 255, 0.1);

	&::before {
		content: '';
		position: absolute;
		width: 65%;
		height: calc(100vw * 9 / 16);
		@media screen and (min-width: 40rem) {
			width: 35rem;
			height: 20rem;
		}

		background: rgba(0, 0, 0, 0.3);
		border-radius: 1rem;
		width: 100%;
		height: 100%;
	}
`;

const ProjectImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	z-index: -1;
	user-select: none;
`;
const ProjectPreview = styled(motion.img)`
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 1rem;
	z-index: -2;
	user-select: none;
	opacity: 0;
`;
const ProjectCardPerspective = styled.div`
	width: 55%;
	height: calc(80vw * 9 / 16);
	position: absolute;
	transform: translateZ(5rem);
	display: flex;
	flex-wrap: wrap;
	text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.6), 0 0 1.25rem rgba(0, 0, 0, 0.4);
	@media screen and (min-width: 40rem) {
		width: 30rem;
		height: 16rem;
	}
	font-size: 0.8rem;
	@media screen and (min-width: 30rem) {
		font-size: 1rem;
	}
`;

const ProjectInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-content: flex-end;
	align-items: center;
	gap: 0.5rem;
`;

const ProjectTitle = styled.h3`
	font-size: 2em;
`;

const ProjectDescription = styled.p`
	font-size: 1em;
`;

const PorjectBottom = styled.div`
	width: 100%;
	bottom: 0;
	display: flex;
	align-self: flex-end;
	justify-content: space-between;
	align-items: flex-end;
`;

const ProjectTechnologies = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	opacity: 0.9;
`;

const ProjectLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const Technology = styled.div`
	width: 1.5em;
	height: 1.5em;
`;
const TechnologyImage = styled.img`
	width: 100%;
	height: auto;
`;

const WebLink = styled(motion.a)`
	width: 2.5em;
	height: 2.5em;

	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
`;
const GithubLink = styled(motion.a)`
	width: 2.5em;
	height: 2.5em;

	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
`;
const LinkImage = styled.img`
	width: 100%;
	height: 100%;
`;
const getTechnologyIcon = (technology) => {
	switch (technology) {
		case 'React':
			return 'src/assets/icons/react.svg';
		case 'Redux':
			return 'src/assets/icons/redux.svg';
		case 'Node':
			return 'src/assets/icons/nodejs.svg';
		case 'Sass':
			return 'src/assets/icons/sass.svg';
		case 'Styled Components':
			return 'src/assets/icons/styled-components.svg';
		case 'Framer Motion':
			return 'src/assets/icons/framer-motion.svg';
		case 'HTML':
			return 'src/assets/icons/html.svg';
		case 'CSS':
			return 'src/assets/icons/css.svg';
		case 'JavaScript':
			return 'src/assets/icons/js.svg';

		default:
			return '';
	}
};
export const ProjectCard = ({ project, index, activeCard, setActiveCard }) => {
	const item = {
		hidden: {
			opacity: 0,

			y: 100,
		},
		show: {
			opacity: 1,
			y: 0,

			transition: {
				duration: 1,
			},
		},
	};

	const image = {
		start: {
			opacity: 1,
		},
		scroll: {
			opacity: 0,
		},
	};
	const preview = {
		start: {
			y: '0%',
			top: '0%',
			opacity: 0,
		},
		scroll: {
			y: '-100%',
			top: '100%',
			opacity: 1,

			transition: {
				duration: project.speed,
				repeat: Infinity,
				repeatDelay: 2,

				opacity: {
					duration: 0.5,
				},
			},
		},
	};

	return (
		<TiltContainer
			variants={item}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			onHoverStart={() => setActiveCard(index)}
			onHoverEnd={() => setActiveCard(null)}
			onTouchStart={() => setActiveCard(index)}
			animate={activeCard === index ? 'scroll' : 'start'}
		>
			<TiltCard
				transitionSpeed={5000}
				// tiltReverse={true}
			>
				<ProjectCardStyled>
					<ProjectImage
						src={project.image}
						alt={project.name}
						variants={image}
						transition={{
							duration: 0.5,
						}}
					/>

					<ProjectPreview
						src={project.preview}
						alt={project.name}
						variants={preview}
						transition={{
							opacity: {
								duration: 0.5,
							},
							delay: 0.5,
						}}
					/>
				</ProjectCardStyled>
				<ProjectCardPerspective>
					<ProjectInfo>
						<ProjectTitle>{project.name}</ProjectTitle>
						<ProjectDescription>{project.description}</ProjectDescription>
					</ProjectInfo>
					<PorjectBottom>
						<ProjectTechnologies>
							{project.technologies.map((technology, index) => (
								<Technology key={index}>
									<TechnologyImage src={getTechnologyIcon(technology)} alt={technology} />
								</Technology>
							))}
						</ProjectTechnologies>

						<ProjectLinks>
							<GithubLink
								whileHover={{ scale: 1.2 }}
								href={project.repository}
								target='_blank'
								rel='noopener noreferrer'
							>
								<LinkImage src='src/assets/icons/github-icon.svg' alt='Github' />
							</GithubLink>
							<WebLink
								whileHover={{ scale: 1.2 }}
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<LinkImage src='src/assets/icons/external-link_2.svg' alt='Web' />
							</WebLink>
						</ProjectLinks>
					</PorjectBottom>
				</ProjectCardPerspective>
			</TiltCard>
		</TiltContainer>
	);
};
