import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { projects } from '../../data/projects';
import { useEffect, useRef, useState } from 'react';

const ProjectsContainer = styled.section`
	width: 100%;
	max-width: 120rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const ProjectsTitle = styled(motion.h3)`
	width: 100%;
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const ProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* background-color: #efff0b7a; */
	width: 100%;

	/* overflow: hidden; */

	/* gap: 3rem; */
`;

const TiltContainer = styled(motion.div)`
	text-decoration: none;
	color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	/* background-color: blue; */
	width: 100%;
	height: calc(120vw * 9 / 16);
	margin-bottom: 3rem;
	/* @media screen and (min-width: 40rem) {
		width: 34rem;
		height: 24rem;
	} */
	@media screen and (min-width: 40rem) {
		width: 39rem;
		height: 24rem;
	}
`;

const TiltCard = styled(Tilt)`
	/* width: 100%;
	width: 30rem;
	height: 30rem;

  */
	/* text-align: center; */

	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
	/* background-color: #ff260085; */

	text-align: center;
	/* width: 129%; */
	/* height: 30rem; */
	width: 135%;
	height: calc(195vw * 9 / 16);

	@media screen and (min-width: 40rem) {
		width: 53rem;
		height: 39rem;
	}
`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	width: 65%;
	height: calc(100vw * 9 / 16);
	/* height: 15rem; */
	position: relative;
	overflow: hidden;

	@media screen and (min-width: 40rem) {
		width: 35rem;
		height: 20rem;
	}

	text-align: center;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	background-color: rgba(255, 255, 255, 0.1);
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

	/* background-image: url('src/assets/images/galaxy.png'); */
	/* background-size: 100%; */
	/* background-position-y: 100%; */
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
		/* @media screen and (min-width: 50rem) {
			width: 35rem;
			height: 25rem;
		} */
		background: rgba(0, 0, 0, 0.3);
		border-radius: 1rem;
		width: 100%;
		height: 100%;
	}
`;

const ProjectImage = styled(motion.img)`
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 1rem;
	z-index: -1;
	user-select: none;

	/* background-image: url(${projects[0].image}); */
	/* background-size: 100%; */
	/* background-position-y: 100%; */
`;
const ProjectCardPerspective = styled.div`
	width: 55%;
	height: calc(80vw * 9 / 16);
	/* width: 65%;
	height: calc(100vw * 9 / 16); */
	position: absolute;
	/* background-color: #8000809b; */
	transform: translateZ(5rem);
	padding: 0 1rem;
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
	/* justify-content: center; */
	/* align-items: flex-start; */
	/* flex-direction: column; */
	text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.6), 0 0 1.25rem rgba(0, 0, 0, 0.4);
	@media screen and (min-width: 40rem) {
		width: 30rem;
		height: 16rem;
		/* width: 35rem;
		height: 20rem; */
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
	/* top: 32%; */
	/* left: 50%; */
	/* width: 80vw; */
	/* position: absolute; */
	/* transform: translateX(-50%) translateZ(3rem); */
	font-size: 2em;

	/* @media screen and (min-width: 50rem) {
    top: 40%;
	} */
`;

const ProjectDescription = styled.p`
	/* top: 41%; */
	/* left: 50%; */
	/* width: 55%; */
	/* position: absolute; */
	/* transform: translateX(-50%) translateZ(3rem); */
	font-size: 1em;
	/* text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.6), 0 0 1.25rem rgba(0, 0, 0, 0.4); */

	/* @media screen and (min-width: 50rem) {
    top: 48%;
	} */
`;

const PorjectBottom = styled.div`
	width: 100%;
	bottom: 0;
	display: flex;
	align-self: flex-end;
	justify-content: space-between;
	align-items: flex-end;
	gap: 3rem;

	/* display: none; */
`;

const ProjectTechnologies = styled.div`
	/* top: 69%; */
	/* left: 27%; */
	/* width: 60%; */
	/* background-color: #ffa60088; */

	/* position: absolute; */
	/* transform: translate(-50%, -50%) translateZ(3rem); */
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	/* @media screen and (min-width: 50rem) {
    top: 65%;
	} */
`;

const ProjectLinks = styled.div`
	/* top: 69%; */
	/* left: 75%; */
	/* width: 60%; */
	/* background-color: #71f37c89; */

	/* position: absolute; */
	/* transform: translate(-50%, -50%) translateZ(3rem); */
	display: flex;
	justify-content: center;
	gap: 1rem;
	/* @media screen and (min-width: 50rem) {
	} */
`;

const Technology = styled.div`
	width: 1.5em;
	height: 1.5em;
`;
const TechnologyImage = styled.img`
	width: 100%;
	height: auto;
`;

const WebLink = styled.a`
	width: 2.2em;
	height: 2.2em;
	border-radius: 50%;
`;
const GithubLink = styled.a`
	width: 2.2em;
	height: 2.2em;
	background-color: #0d1117;
	border-radius: 50%;
`;
const LinkImage = styled.img`
	width: 100%;
	height: auto;
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

const item = {
	hidden: {
		opacity: 0,
		// scale: 0,

		y: 100,
	},
	show: {
		opacity: 1,
		// scale: 1,
		y: 0,

		transition: {
			duration: 1,
		},
	},
};

const image = {
	start: {
		y: '0%',
		top: '0%',
	},
	scroll: {
		y: '-100%',
		top: '100%',

		transition: {
			duration: 8,
			repeat: Infinity,
			repeatDelay: 2,
		},
	},
};
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

	const handleImageClick = (index) => {
		setActiveCard(index);
	};
	return (
		<ProjectsContainer ref={projectContainerRef}>
			<ProjectsTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}>
				Proyectos
			</ProjectsTitle>
			<ProjectWrapper>
				{projects.map((project, index) => (
					<TiltContainer
						key={index}
						variants={item}
						initial='hidden'
						whileHover='scroll'
						whileInView='show'
						animate={activeCard === index ? 'scroll' : 'start'}
						viewport={{ once: true }}
						onTouchStart={() => handleImageClick(index)}
					>
						<TiltCard transitionSpeed={2000} tiltReverse={true}>
							<ProjectCard>
								<ProjectImage
									src={project.image}
									alt={project.name}
									variants={image}
									transition={{
										duration: 0.5,
									}}
								/>
							</ProjectCard>
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
										<GithubLink href={project.repository}>
											<LinkImage src='src/assets/icons/github-icon.svg' alt='Github' />
										</GithubLink>
										<WebLink href={project.link}>
											<LinkImage src='src/assets/icons/globe.svg' alt='Web' />
										</WebLink>
									</ProjectLinks>
								</PorjectBottom>
							</ProjectCardPerspective>
						</TiltCard>
					</TiltContainer>
				))}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
