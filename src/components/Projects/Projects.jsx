import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { projects } from '../../data/projects';
import { useState } from 'react';

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
	overflow: hidden;

	/* gap: 3rem; */
`;

const TiltContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	/* background-color: blue; */
	width: 100%;
	height: 24rem;
	margin-bottom: 3rem;
	@media screen and (min-width: 40rem) {
		width: 34rem;
		height: 24rem;
		/* width: 30rem; */
		/* height: 20rem; */
	}
	@media screen and (min-width: 50rem) {
		width: 39rem;
		height: 29rem;
		/* width: 39rem; */
		/* height: 25rem; */
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
	/* background-color: #fbff0085; */

	text-align: center;
	width: 129%;
	height: 36rem;

	@media screen and (min-width: 40rem) {
		/* background-color: #33ff0085; */
		width: 44rem;
		height: 36rem;
	}
	@media screen and (min-width: 50rem) {
		/* background-color: #ff000053; */

		width: 52rem;
		height: 43rem;
	}
`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	width: 71%;
	height: 20rem;
	position: relative;
	overflow: hidden;
	@media screen and (min-width: 40rem) {
		width: 30rem;
		height: 20rem;
	}
	@media screen and (min-width: 50rem) {
		width: 35rem;
		height: 25rem;
	}
	text-align: center;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	background-color: rgba(255, 255, 255, 0.1);
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

	background-image: url('src/assets/images/galaxy.png');
	background-size: 100%;
	background-position-y: 100%;
	&::before {
		content: '';
		position: absolute;
		width: 71%;
		height: 20rem;
		@media screen and (min-width: 40rem) {
			width: 30rem;
			height: 20rem;
		}
		@media screen and (min-width: 50rem) {
			width: 35rem;
			height: 25rem;
		}
		background: rgba(0, 0, 0, 0.3);
		border-radius: 1rem;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
`;

const ProjectImageZ = styled(motion.img)`
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	border-radius: 1rem;
	/* background-color: #ff0000; */
	/* background-image: url(${projects[0].image}); */
	/* background-size: 100%; */
	/* background-position-y: 100%; */
`;

const ProjectTitleZ = styled.h3`
	font-size: 2em;
	position: absolute;
	width: 70%;
	transform: translateX(-50%) translateZ(3rem);

	top: 32%;
	left: 50%;

	@media screen and (min-width: 50rem) {
		top: 35%;
	}
`;

const ProjectDescriptionZ = styled.p`
	font-size: 1em;
	position: absolute;
	width: 55%;
	transform: translateX(-50%) translateZ(3rem);

	top: 41%;
	left: 50%;

	@media screen and (min-width: 50rem) {
		top: 43%;
	}
`;

const ProjectTechnologies = styled.div`
	transform: translate(-50%, -50%) translateZ(3rem);
	position: absolute;
	left: 50%;
	display: flex;
	justify-content: center;
	width: 60%;
	gap: 0.5rem;

	top: 62%;
	@media screen and (min-width: 50rem) {
		top: 65%;
	}
`;
const Technology = styled.div`
	width: 2rem;
	height: 2rem;
`;
const TechnologyImage = styled.img`
	width: 100%;
	height: auto;
`;

const ProjectLinks = styled.div`
	transform: translate(-50%, -50%) translateZ(3rem);
	position: absolute;
	left: 50%;
	top: 70%;
	display: flex;
	justify-content: center;
	width: 60%;
	gap: 0.5rem;
	@media screen and (min-width: 50rem) {
		top: 72%;
	}
`;
const WebLink = styled.a`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
`;
const GithubLink = styled.a`
	width: 2rem;
	height: 2rem;
	background-color: #0d1117;
	border-radius: 50%;
`;
const LinkImage = styled.img`
	width: 100%;
	height: auto;
`;

const title = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
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
			// repeatType: 'mirror',
			repeatDelay: 2,
		},
	},
};

export const Projects = () => {
const [clicked, setClicked] = useState(false);

	return (
		<ProjectsContainer>
			<ProjectsTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}>
				Proyectos
			</ProjectsTitle>
			<ProjectWrapper>
				{projects.map((project, index) => (
					<TiltContainer
						variants={item}
						key={index}
						whileHover='scroll'
						// onHoverStart={() => setClicked(true)}
            // onHoverEnd={() => setClicked(false)}
            // onTouchStart={() => setClicked(true)}
            // onTouchEnd={() => setClicked(false)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						<TiltCard transitionSpeed={2000} tiltReverse={true}>
							<ProjectCard>
								<ProjectImageZ
									src={project.image}
									alt={project.name}
									// animate={clicked ? 'scroll' : 'start'}
									variants={image}
									transition={{ duration: 0.5, ease: 'easeOut' }}
								/>
							</ProjectCard>
							<ProjectTitleZ>{project.name}</ProjectTitleZ>
							<ProjectDescriptionZ>{project.description}</ProjectDescriptionZ>
							<ProjectTechnologies>
								{project.technologies.map((technology, index) => (
									<Technology key={index}>
										<TechnologyImage src={`src/assets/icons/${technology}.svg`} alt={technology} />
									</Technology>
								))}
							</ProjectTechnologies>
							{/* <Technology>
									<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
								</Technology>
								<Technology>
									<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
								</Technology>
								<Technology>
									<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
								</Technology>
								<Technology>
									<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
								</Technology>
							</ProjectTechnologies> */}
							<ProjectLinks>
								<WebLink href={project.link}>
									<LinkImage src='src/assets/icons/globe.svg' alt='Web' />
								</WebLink>
								<GithubLink href={project.repository}>
									<LinkImage src='src/assets/icons/github-icon.svg' alt='Github' />
								</GithubLink>
							</ProjectLinks>
						</TiltCard>
					</TiltContainer>
				))}

				{/* <TiltContainer whileHover='scroll' initial='hidden' whileInView='show' viewport={{ once: true }}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard>
							<ProjectImageZ
								src='src/assets/images/lol.webp'
								alt='Web'
								variants={image}
								transition={{ duration: 0 }}
							/>
						</ProjectCard>
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor consectetur, adipisicing elit. Debitis, est! Maiores iste incidunt delectus
							consectetur, nemo in Vitae amet molestiae eum!
						</ProjectDescriptionZ>
						<ProjectTechnologies>
							<Technology>
								<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
							</Technology>
							<Technology>
								<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
							</Technology>
							<Technology>
								<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
							</Technology>
							<Technology>
								<TechnologyImage src='src/assets/icons/globe.svg' alt='Web' />
							</Technology>
						</ProjectTechnologies>
						<ProjectLinks>
							<WebLink href='#'>
								<LinkImage src='src/assets/icons/globe.svg' alt='Web' />
							</WebLink>
							<GithubLink href='#'>
								<LinkImage src='src/assets/icons/github-icon.svg' alt='Github' />
							</GithubLink>
						</ProjectLinks>
					</TiltCard>
				</TiltContainer> */}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
