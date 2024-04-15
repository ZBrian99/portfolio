import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PlanetRotationStyled = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const PlanetRotation = ({ children, rotate, speed, moon }) => {
	const rotationTransition = {
		duration: speed,
		ease: moon ? 'linear' : 'easeInOut',
		repeat: Infinity,
		repeatType: moon ? 'loop' : 'reverse',
	};

	return (
		<PlanetRotationStyled
			animate={{
				rotate: rotate,
			}}
			transition={rotationTransition}
		>
			{children}
		</PlanetRotationStyled>
	);
};

