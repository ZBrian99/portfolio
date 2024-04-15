import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Planet = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};

	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	filter: ${({ learned }) => (learned ? 'none' : 'grayscale(100%)')};

	top: calc(${({ y }) => `${y}%`} - ${({ size }) => `${size / 2}vh`});
	left: calc(${({ x }) => `${x}%`} - ${({ size }) => `${size / 2}vw`});

	@media screen and (min-width: 48rem) {
		top: calc(${({ x }) => `${x}vh`} - ${({ size }) => `${size / 2}vw`});
		left: calc(${({ y }) => `${y}%`} - ${({ size }) => `${size / 2}vw`});
	}
`;
const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const Star = ({ src, name, size, speed, x, y, learned }) => {
	return (
		<Planet size={size} x={x} y={y} learned={learned}>
			<PlanetIcon src={src} size={size} alt={name} />
		</Planet>
	);
};
