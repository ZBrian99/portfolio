import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const CardContainer = styled(motion.div)`
	position: fixed;
	width: 90%;
	height: 90%;
	left: 5%;
	top: 5%;
	border-radius: 0.5rem;
	overflow: hidden;
	background-color: #1a1a1a;
	box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

const ImageContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: 40%;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
		width: 60%;
		height: 100%;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const CardInfo = styled.div`
	width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1rem;
	@media screen and (min-width: 60rem) {
		width: 40%;
	}
`;

const CardTitle = styled.h2`
	margin: 0;
	font-size: 2em;
	color: #fff;
`;

const CardDescription = styled.p`
	font-size: 1.2em;
	margin: 1rem 0;
	color: #ccc;
`;

const CardDate = styled.p`
	font-size: 1em;
	color: #aaa;
`;

const CardLinks = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const CardLink = styled.a`
	color: #40b822;
	text-decoration: none;
	&:hover {
		opacity: 0.9;
	}
`;

const TechnologiesList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

const TechnologyItem = styled.div`
	color: #ccc;
`;

const StatusText = styled.p`
	font-style: italic;
	color: #ccc;
`;

export const ProjectCard = ({ project, initial, animate, transition }) => {
	const { name, description, date, link, repository, images, image, technologies, status } = project;

	return (
		<CardContainer initial={initial} animate={animate} transition={transition}>
			{images && images.length > 0 && (
				<ImageContainer>
					<Image src={images[0]} alt={name} />
				</ImageContainer>
			)}
			{image && (
				<ImageContainer>
					<Image src={image} alt={name} />
				</ImageContainer>
			)}
			<CardInfo>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardDate>{date}</CardDate>
				<CardLinks>
					<CardLink href={link} target='_blank' rel='noopener noreferrer'>
						Visit Site
					</CardLink>
					<CardLink href={repository} target='_blank' rel='noopener noreferrer'>
						View Repository
					</CardLink>
				</CardLinks>

				{technologies && (
					<TechnologiesList>
						{technologies.map((tech, index) => (
							<TechnologyItem key={index}>{tech}</TechnologyItem>
						))}
					</TechnologiesList>
				)}
				{status && <StatusText>Status: {status}</StatusText>}
			</CardInfo>
		</CardContainer>
	);
};
