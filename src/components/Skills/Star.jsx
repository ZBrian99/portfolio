import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Planet = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};
	/* margin: calc(-${({ size }) => `${size}vw`} / 2) auto; */

	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	border-radius: 50%;
	overflow: hidden;
	background-color: #ffffff;
	padding: 0.3rem;
	opacity: 0.8;
	/* top: ${({ y }) => `${y}%`}; */
	/* left: ${({ x }) => `${x}%`}; */
`;
const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const Star = ({ src, name, size, speed, sun, x, y }) => {
	return (
		<Planet size={size} x={x} y={y}>
			<PlanetIcon src={src} alt={name} />
		</Planet>
	);
};
