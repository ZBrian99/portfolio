import { useState, useEffect, useRef, Children } from 'react';
import styled from '@emotion/styled';

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
	background-color: rgba(255, 255, 255, 0.1);
  

	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);

	transform-style: preserve-3d;
	perspective: 1000px;
	/* background-color: rgba(255, 255, 255, 0.25); */
	/* background: linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0b2f51); */
	color: white;
	border-radius: 1rem;
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&::before {
		content: '';
		position: absolute;
		top: ${({ y }) => y}px;
		left: ${({ x }) => x}px;
		background: radial-gradient(#888, transparent, transparent);
		background: radial-gradient(#e72ea0, transparent, transparent);
		background: radial-gradient(#f3ec78, #af4261, #577399, #2b4f81, transparent, transparent);
		background: radial-gradient(rgba(255, 255, 255, 0.1), transparent, transparent);

		width: 40rem;
		height: 40rem;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: 0.5s, top 0s, left 0s;
		z-index: -2;
	}
	&:hover::before {
		opacity: 1;
	}
	/* 
	&::after {
		content: '';
		position: absolute;
		inset: 0.2rem;
		border-radius: 1rem;
		background-color: #3333337f;
		background-color: rgba(255, 255, 255, 0.1);
		z-index: -1;
	} */
`;

const handleMouseMove = (e, cardRef, setHoverEffect) => {
	const rect = cardRef.current.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	setHoverEffect({ x, y });
};
export const TestCardGlare = () => {
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
			<CardStyled ref={cardRef} x={hoverEffect.x} y={hoverEffect.y}>
				<div
					style={{
						fontSize: '2rem',
						fontWeight: 'bold',
						color: 'white',
						marginBottom: '1rem',
					}}
				>
					React
				</div>
				<div
					style={{
						fontSize: '1.5rem',
						color: 'white',
						marginBottom: '1rem',
					}}
				>
					Parallax Tilt
				</div>
				<div
					style={{
						fontSize: '1rem',
						color: 'white',
						marginBottom: '1rem',
					}}
				>
					👀
				</div>
			</CardStyled>
		</CardContainer>
	);
};
