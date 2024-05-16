import { useState, useEffect, useRef, Children } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ParalaxText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 2rem;
	font-weight: bold;
	color: white;
	text-align: center;
	position: absolute;
	transform: translateZ(5rem);
`;

const TitleVariant1 = styled.span`
	background: linear-gradient(to right, blue, red);
	-webkit-text-fill-color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	font-size: 2em;
	position: absolute;
	transform: translateZ(6rem) translateX(-50%);
	top: 50%;
	left: 50%;
`;

const TitleVariant2 = styled.span`
	background: linear-gradient(
		to right,
		#ff00cc,
		#333399
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	font-size: 2em;
	position: absolute;
	transform: translateZ(6rem) translateX(-50%);
	top: 45%;
	left: 50%;
`;

const TitleVariant3 = styled.span`
	background: radial-gradient(circle at center center, #12c2e9 0%, #c471ed 50%, #f64f59 100%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	font-size: 2em;
	position: absolute;
	transform: translateZ(7rem) translateX(-50%);
	top: 40%;
	left: 50%;
	/* text-shadow: inset 2px 2px 4px rgba(0, 0, 0, 1); */
	/* text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5),
		0 0 15px rgba(255, 255, 255, 0.5);
	text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5),
		0 0 30px rgba(255, 255, 255, 0.5); */
`;
const TitleVariant4 = styled.span`
	color: #cde592;
	background-image: -webkit-linear-gradient(45deg, #cde592 5%, #fb5444 94%, #08dfa0 8%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	font-size: 2em;
	position: absolute;
	transform: translateZ(5rem) translateX(-50%);
	top: 35%;
	left: 50%;
`;
const TitleVariant5 = styled.span`
	background: linear-gradient(240.86deg, #ff8329 0%, #ff007a 66.41%);
	-webkit-text-fill-color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	font-size: 2em;
	position: absolute;
	transform: translateZ(10rem) translateX(-50%);
	top: 30%;
	left: 50%;
`;
const TitleVariant6 = styled.span`
	background-image: linear-gradient(60deg, #fffb00, #ff6124);
	-webkit-text-fill-color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);

	font-size: 2em;
	position: absolute;
	transform: translateZ(9rem) translateX(-50%);
	top: 30%;
	left: 50%;
`;
const TitleVariant7 = styled.span`
	background-image: linear-gradient(60deg, #8500ff, #ff8100);
	background-clip: text;
	-webkit-text-fill-color: transparent;

	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);

	font-size: 2em;
	position: absolute;
	transform: translateZ(7rem) translateX(-50%);
	top: 25%;
	left: 50%;
`;

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
	/* transform-style: preserve-3d; */
	/* perspective: 1000px; */
	/* background-color: rgba(255, 255, 255, 0.25); */
	/* background: linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0b2f51); */
	color: white;
	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.2);

	background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	/* box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37); */

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
					// tiltReverse={true}
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

					{/* <ParalaxText> */}
					<TitleVariant1>Parallax Tilt 1</TitleVariant1>
					<TitleVariant2> Parallax Tilt 2</TitleVariant2>
					<TitleVariant3> Parallax Tilt 3</TitleVariant3>
					<div
						style={{
							position: 'absolute',
							transform: 'translateZ(15rem) translateX(-50%) scale(2)',
							top: '60%',
							left: '50%',
						}}
					>
						👀
					</div>
					<TitleVariant4> Parallax Tilt 4 </TitleVariant4>
					<TitleVariant6> Parallax Tilt6 </TitleVariant6>
					<TitleVariant7> Parallax Tilt 7</TitleVariant7>

					{/* </ParalaxText> */}
				</Tilt>
			</div>
		</CardContainer>
	);
};
