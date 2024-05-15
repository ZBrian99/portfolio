import { useState, useEffect, useRef, Children } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const CardContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
	overflow: hidden;
`;

const CardStyled = styled.div`
	width: 20rem;
	height: 30rem;
	/* background-color: #555; */
	transform-style: preserve-3d;
	perspective: 1000px;
	/* background-color: rgba(255, 255, 255, 0.25); */
	/* background: linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0b2f51); */
	color: white;

	border-radius: 1rem;
	/* border: 1px solid rgba(255, 255, 255, 0.25); */
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.1);

	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);

	/* transform-style: 'preserve-3d'; */
	/* &::before {
		content: '';
		position: absolute;
		top: ${({ y }) => y}px;
		left: ${({ x }) => x}px;
		background: radial-gradient(#888, transparent, transparent);
		background: radial-gradient(#e72ea0, transparent, transparent);
		background: radial-gradient(#f3ec78, #af4261, #577399, #2b4f81,  transparent, transparent);
		background: radial-gradient(#2eb3e7, transparent, transparent);
    
		width: 40rem;
		height: 40rem;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: 0.5s, top 0s, left 0s;
		z-index: -2;
	} */
	/* &:hover::before {
		opacity: 1;
	} */
	/* 
	&::after {
		content: '';
		position: absolute;
		inset: 0.1rem;
		border-radius: 1rem;
		 background-color: #3333337f; 
		background-color: rgba(102, 102, 102, 0.922);
		z-index: -1;
	} */
`;

const Highlight = styled.span`
	background: linear-gradient(#97ff36, #bd1111);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;


const generateTextShadow = (color) =>
	`0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 50px ${color}`;

// Primera variante con sombra de texto
const TitleVariant1 = styled.h1`
	background: linear-gradient(to right, #ff00ff, #00ffff);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	text-shadow: ${({ theme }) => generateTextShadow(theme.colors.nebulaPurple)};
`;

// Segunda variante con animación de brillo
const TitleVariant2 = styled.h1`
	background: linear-gradient(to bottom right, #ff8800, #0033ff);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	animation: shine 1s infinite;
	@keyframes shine {
		50% {
			background-position: 200% center;
		}
	}
`;

// Tercera variante con efecto de borde
const TitleVariant3 = styled.h1`
	background: linear-gradient(to bottom, #00ff00, #ff00ff);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.nebulaGreen};
`;

const handleMouseMove = (e, cardRef, setHoverEffect) => {
	const rect = cardRef.current.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	setHoverEffect({ x, y });
};
export const TestCardPerspective = () => {
	const [hoverEffect, setHoverEffect] = useState({ x: 0, y: 0 });
	const cardRef = useRef(null);

	useEffect(() => {
		const handleMouseMoveBound = (e) => handleMouseMove(e, cardRef, setHoverEffect);
		cardRef.current.addEventListener('mousemove', handleMouseMoveBound);
		return () => {
			cardRef.current.removeEventListener('mousemove', handleMouseMoveBound);
		};
	}, []);
	return (
		<CardContainer>
			<div
				style={{
					width: '25rem',
					height: '35rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Tilt
					tiltReverse={true}
					scale={1.1}
					transitionSpeed={1000}
					style={{
						position: 'absolute',
						width: '35rem',
						height: '45rem',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						transformStyle: 'preserve-3d',
					}}
				>
					<CardStyled ref={cardRef} x={hoverEffect.x} y={hoverEffect.y}></CardStyled>

					<div
						style={{
							position: 'absolute',
							fontSize: '2rem',
							fontWeight: 'bold',
							color: 'white',
							marginBottom: '1rem',
							top: '50%',
							left: '50%',
							transform: 'translateZ(5rem)',
						}}
					>
						React
					</div>
					<div
						style={{
							position: 'absolute',
							fontSize: '1.5rem',
							color: 'white',
							marginBottom: '1rem',
							top: '50%',
							left: '50%',
							transform: 'translateZ(5rem)',
						}}
					>
						<Highlight>Parallax</Highlight> Tilt
					</div>
					<div
						style={{
							position: 'absolute',
							fontSize: '1rem',
							color: 'white',
							marginBottom: '1rem',
							top: '50%',
							left: '50%',
							transform: 'translateZ(5rem)',
						}}
					>
						👀
					</div>
				</Tilt>
			</div>
		</CardContainer>
	);
};
