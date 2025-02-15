import styled from '@emotion/styled';
import { ProjectTag } from './ProjectTag';

const Card = styled.article`
	text-decoration: none;
	color: inherit;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	border-radius: 1rem;
	max-width: 25rem;
	box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.1);
	background: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	/* background-color: #0a0a0a; */
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin: 0 auto;

	@media screen and (min-width: 40rem) {
		max-width: calc(50% - 1.5rem);
	}
	@media screen and (min-width: 60rem) {
		/* max-width: calc(33% - 1.8rem); */
		max-width: auto;
		flex: 1;
	}
	transform-style: preserve-3d;
	transition: transform 0.3s ease-out;
	&:hover > div > img {
		/* transform: perspective(1000px) rotateY(10deg) rotateX(5deg); */
		transform: perspective(1000px) rotateY(10deg) rotateX(5deg) scale(1.1) translateY(-.5rem);
		/* &:nth-of-type(even) {
		} */
	}
`;

const CardImageContainer = styled.div`
	border-radius: 1rem;
	transform: translateZ(5rem);

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
	overflow: hidden;
	/* text-align: center; */
	gap: 0.5rem;
	display: flex;
	flex-direction: column;
	padding: 0 1rem 1rem;
	z-index: 1;
`;

const Title = styled.h3`
	font-size: 1.5em;
	/* text-overflow: ellipsis; */
	/* overflow: hidden; */
	/* white-space: nowrap; */
	color: #ffffff;
`;

const Description = styled.p`
	font-size: 0.9em;
	color: #d1d1d1;
	/* margin-bottom: 0.5rem; */
`;

const CardFooter = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-between; */
	/* gap: 1.5rem; */
	margin-top: auto;
`;

const ProjectTechnologies = styled.div`
	display: flex;
	/* align-items: flex-end; */
	/* justify-content: center; */
	width: 100%;
	gap: 0.5rem;
	flex-wrap: wrap;
`;

const ProjectLinks = styled.div`
	display: flex;
	/* align-items: flex-end; */
	/* justify-content: center; */
	justify-content: space-between;
	justify-content: flex-end;
	font-size: 0.9em;
	margin-top: 0.5rem;
	width: 100%;
	gap: 1rem;
	flex-wrap: wrap;
`;
const Link = styled.a`
	transition: transform 0.1s ease, background-color 0.1s ease;

	flex: 1;
	/* max-width: 10rem; */
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	text-decoration: none;
	color: inherit;
	display: flex;
	padding: 0.5rem 1rem;
	gap: 0.5rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	&:active {
		transform: scale(0.95);
	}
	@media screen and (min-width: 21rem) {
		flex: none;
	}
`;

const LinkIcon = styled.img`
	/* width: 100%; */
	/* height: 100%; */
	width: 1.5em;
	height: 1.5em;
`;


export const ProjectSimpleCard = ({ project }) => {
	return (
		<Card>
			<CardImageContainer>
				<ProjectImage className='Img' src={project.image} alt={project.name} />
			</CardImageContainer>
			<Content className='Info'>
				<Title>{project.name}</Title>

				<ProjectTechnologies>
					{project.technologies.map((technology, index) => (
						<ProjectTag key={index} technology={technology} />
					))}
				</ProjectTechnologies>
				<Description>{project.description}</Description>
				<CardFooter>
					<ProjectLinks>
						<Link href={project.repository} target='_blank' rel='noopener noreferrer'>
							GitHub
							<LinkIcon src='/icons/github-icon.svg' alt='Github' />
						</Link>
						<Link href={project.link} target='_blank' rel='noopener noreferrer'>
							Demo
							<LinkIcon src='/icons/external-link_5.svg' alt='Web' />
						</Link>
					</ProjectLinks>
				</CardFooter>
			</Content>
		</Card>
	);
};
