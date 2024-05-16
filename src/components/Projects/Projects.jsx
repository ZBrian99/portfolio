import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { projects } from '../../data/projects';

const ProjectsContainer = styled(motion.section)`
	width: 100%;
	max-width: 120rem;
  margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const ProjectsTitle = styled.h3`
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
		/* background-color: #ff0000; */

		width: 52rem;
		height: 43rem;
	}
`;

const ProjectCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
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
	text-align: center;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	background-image: url(${projects[2].image});
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
	}
`;

const ProjectTitle = styled.h3`
	font-size: 1.5em;
`;

const ProjectDescription = styled.p`
	font-size: 1em;
`;

const ProjectImage = styled.img`
	width: 3.5rem;
	height: 3.5rem;
`;

const ProjectImageZ = styled.img`
	width: 64%;
	height: 90%;
	position: absolute;
	transform: translateZ(3rem);

	top: 17%;
	left: 17%;
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
const container = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};
export const Projects = () => {
	return (
		<ProjectsContainer variants={container} initial='hidden' whileInView='show' viewport={{ once: true }}>
			<ProjectsTitle>Proyectos</ProjectsTitle>
			<ProjectWrapper>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard transitionSpeed={2000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						{/* <ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' /> */}
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
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
				</TiltContainer>
				
				
				{/* <TiltContainer variants={item}>
					<TiltCard scale={1.1} transitionSpeed={1000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						<ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' />
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
						</ProjectDescriptionZ>
					</TiltCard>
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard scale={1.1} transitionSpeed={1000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						<ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' />
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
						</ProjectDescriptionZ>
					</TiltCard>
				</TiltContainer>
				<TiltContainer variants={item}>
					<TiltCard scale={1.1} transitionSpeed={1000} tiltReverse={true}>
						<ProjectCard></ProjectCard>
						<ProjectImageZ src='src/assets/images/galaxy.png' alt='Web' />
						<ProjectTitleZ>Lorem, ipsum dolor.</ProjectTitleZ>
						<ProjectDescriptionZ>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
						</ProjectDescriptionZ>
					</TiltCard>
				</TiltContainer> */}

				{/* <TiltContainer>
					<TiltCard scale={1.1} transitionSpeed={1000} tiltReverse={true}>
						<ProjectCard variants={item}>
							<ProjectImage src='src/assets/images/galaxy.png' alt='Web' />
							<ProjectTitle>Lorem, ipsum dolor.</ProjectTitle>
							<ProjectDescription>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste
								consequatur incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit
								facilis ut. Vitae amet molestiae totam eum!
							</ProjectDescription>
						</ProjectCard>
					</TiltCard>
				</TiltContainer>
				<TiltContainer>
					<TiltCard scale={1.1} transitionSpeed={1000} tiltReverse={true}>
						<ProjectCard variants={item}>
							<ProjectImage src='src/assets/images/galaxy.png' alt='Web' />
							<ProjectTitle>Lorem, ipsum dolor.</ProjectTitle>
							<ProjectDescription>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste
								consequatur incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit
								facilis ut. Vitae amet molestiae totam eum!
							</ProjectDescription>
						</ProjectCard>
					</TiltCard>
				</TiltContainer> */}
			</ProjectWrapper>
		</ProjectsContainer>
	);
};
