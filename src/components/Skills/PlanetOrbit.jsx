// PlanetOrbit.js
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PlanetOrbitStyled = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};
	background-color: transparent;
	/* border: 1px dashed rgba(255, 255, 255, 0.3); */
  border: ${({ orbit }) => (orbit ? '1px dashed rgba(255, 255, 255, 0.3)' : 'none')};
	border-radius: 50%;
	position: absolute;

	@media screen and (max-width: 60rem) {
		width: ${({ size }) => `${size}vh`};
		height: ${({ size }) => `${size}vh`};
	}
`;

export const PlanetOrbit = ({ size,orbit=true, children }) => {
	return (
		<PlanetOrbitStyled size={size} orbit={orbit}>
			{children}
		</PlanetOrbitStyled>
	);
};

