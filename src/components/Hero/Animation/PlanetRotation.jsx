import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PlanetRotationStyled = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const PlanetRotation = ({ children, speed }) => {
	return (
		<PlanetRotationStyled
			animate={{
				rotate: -360,
			}}
			transition={{
				duration: speed,
				ease: 'linear',
				repeat: Infinity,
			}}
		>
			{children}
		</PlanetRotationStyled>
	);
};
