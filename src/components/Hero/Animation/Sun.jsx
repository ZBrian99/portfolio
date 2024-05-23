// Sun.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SunContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ size }) => `${size}%`};
	height: ${({ size }) => `${size}%`};
	border-radius: 50%;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
	overflow: hidden;
`;

const SunIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const Sun = ({ size = 15 }) => {
	return (
		<SunContainer
			size={size}
			animate={{
				rotate: [0, -360],
			}}
			transition={{
				duration: 60,
				ease: 'linear',
				repeat: Infinity,
			}}
		>
			<SunIcon src='src/assets/icons/react.svg' alt='react' />
			{/* <SunIcon src='src/assets/images/photo.webp' alt='react' /> */}
		</SunContainer>
	);
};
