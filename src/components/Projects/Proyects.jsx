import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ProyectsSection = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('src/assets/images/galaxy.png');
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
`;

const ProyectGalaxy = styled(motion.div)`
	width: ${({ size }) => size}vw;
	height: ${({ size }) => size}vw;
	top: calc(${({ y }) => y}% - ${({ size }) => size / 2}vw);
	left: calc(${({ x }) => x}% - ${({ size }) => size / 2}vw);
	background-color: ${({ color }) => color};
	border-radius: 50%;
	z-index: 5;
	position: absolute;
`;

const Line = styled(motion.path)`
	stroke: ${({ color }) => color};
	stroke-width: 1;
	fill: none;
`;

export const Proyects = () => {
	const [galaxies] = useState([
		{ x: 28, y: 13, size: 5, color: '#FFB6C1' },
		{ x: 80, y: 17, size: 10, color: '#87CEFA' },
		{ x: 32, y: 45, size: 3, color: '#98FB98' },
		{ x: 78, y: 71, size: 8, color: '#FFD700' },
		{ x: 19, y: 82, size: 6, color: '#ffa784' },
	]);

	// Calcular el tamaño máximo de x e y y el tamaño máximo de las galaxias para el viewBox
	const maxX = Math.max(...galaxies.map((galaxy) => galaxy.x + galaxy.size));
	const maxY = Math.max(...galaxies.map((galaxy) => galaxy.y + galaxy.size));

	return (
		<ProyectsSection>
			{galaxies.map((galaxy, index) => (
				<ProyectGalaxy key={`galaxy-${index}`} {...galaxy} />
			))}
			<svg
				width='100%'
				height='100%'
				style={{ position: 'absolute', top: 0, left: 0 }}
				viewBox={`0 0 ${maxX} ${maxY}`} // Establecer el viewBox con los valores máximos de x e y
			>
				<Line
					d={`M${galaxies
						.map((galaxy) => `${galaxy.x + galaxy.size / 2},${galaxy.y + galaxy.size / 2}`)
						.join(' L')}`}
					color='#FFFFFF'
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
				/>
			</svg>
		</ProyectsSection>
	);
};
