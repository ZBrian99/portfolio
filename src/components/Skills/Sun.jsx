// Sun.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SunContainer = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};

	@media screen and (max-width: 60rem) {
		width: ${({ size }) => `${size}vh`};
		height: ${({ size }) => `${size}vh`};
	}

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const SunIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;
export const Sun = ({ size, src, name, speed }) => {
	return (
		<SunContainer
			size={size}
			animate={{
				rotate: [0, -360],
			}}
			transition={{
				duration: speed,
				ease: 'linear',
				repeat: Infinity,
			}}
		>
			<SunIcon src={src} alt={name} />
		</SunContainer>
	);
};

