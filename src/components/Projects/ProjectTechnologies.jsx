import styled from '@emotion/styled';
import { technologyStyles, technologyIcons } from './projectsConstants';
import { useState, useEffect } from 'react';

const TechnologiesContainer = styled.div`
	display: grid;
	gap: 0.5rem;
	width: 100%;
	grid-template-columns: repeat(5, 1fr);
	@media (min-width: 20rem) {
		grid-template-columns: repeat(6, 1fr);
	}
	@media (min-width: 28rem) {
		grid-template-columns: repeat(8, 1fr);
	}
	@media (min-width: 34rem) {
		grid-template-columns: repeat(10, 1fr);
	}
	@media (min-width: 40rem) {
		grid-template-columns: repeat(12, 1fr);
	}
	@media (min-width: 48rem) {
		grid-template-columns: repeat(7, 1fr);
	}
	@media (min-width: 54rem) {
		grid-template-columns: repeat(8, 1fr);
	}
	@media (min-width: 64rem) {
		grid-template-columns: repeat(9, 1fr);
	}
	@media (min-width: 70rem) {
		grid-template-columns: repeat(6, 1fr);
	}
	@media (min-width: 75rem) {
		grid-template-columns: repeat(7, 1fr);
	}
`;

const TechIcon = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1;
	display: flex;
	color: #f3f8ff;
	align-items: center;
	justify-content: center;
	border-radius: 0.8rem;
	background: ${({ color }) => color?.background || 'rgba(255, 255, 255, 0.1)'};
	opacity: 0.85;
	transition: all 0.3s ease-in-out;
	cursor: default;

	&:hover {
		opacity: 1;
		box-shadow: 0 0 0.8rem ${({ color }) => color?.background || 'rgba(255, 255, 255, 0.1)'};
		/* background: ${({ color }) => {
			color?.background || 'rgba(255, 255, 255, 0.1)';
		}}; */
		&::before,
		&::after {
			opacity: 1;
			visibility: visible;
		}
		transform: translateY(-0.25rem);
	}

	&::before {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 120%;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.4rem 0.8rem;
		border-radius: 0.4rem;
		background: #000000;
		color: white;
		font-size: 0.8em;
		white-space: pre;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 10;
		box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translate(-50%, 35%);
		border: 0.5rem solid transparent;
		border-top: 0.5rem solid #000000;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 10;
	}

	img {
		width: 60%;
		height: 60%;
		object-fit: contain;
	}
`;

const MoreTechIcon = styled(TechIcon)`
	background: rgba(255, 255, 255, 0.1);
	color: white;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.4;
	z-index: 4;
	&:hover {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0.8rem rgba(255, 255, 255, 0.2);
	}
`;

export const ProjectTechnologies = ({ technologies }) => {
	const getVisibleLimit = () => {
		if (window.innerWidth >= 1200) return 7;
		if (window.innerWidth >= 1120) return 6;
		if (window.innerWidth >= 1024) return 9;
		if (window.innerWidth >= 864) return 8;
		if (window.innerWidth >= 768) return 7;
		if (window.innerWidth >= 640) return 12;
		if (window.innerWidth >= 544) return 10;
		if (window.innerWidth >= 448) return 8;
		if (window.innerWidth >= 320) return 6;
		return 5;
	};

	const [visibleLimit, setVisibleLimit] = useState(getVisibleLimit());

	useEffect(() => {
		const handleResize = () => {
			setVisibleLimit(getVisibleLimit());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const visibleTechs = technologies.slice(0, technologies.length > visibleLimit ? visibleLimit - 1 : visibleLimit);
	const remainingTechs = technologies.length > visibleLimit ? technologies.slice(visibleLimit - 1) : [];

	return (
		<TechnologiesContainer>
			{visibleTechs.map((tech, index) => (
				<TechIcon key={index} color={technologyStyles[tech]} technology={tech} data-tooltip={tech}>
					<img src={technologyIcons[tech]} alt={tech} />
				</TechIcon>
			))}

			{remainingTechs.length > 0 && (
				<MoreTechIcon data-tooltip={remainingTechs.join('\n')}>+{remainingTechs.length}</MoreTechIcon>
			)}
		</TechnologiesContainer>
	);
};
