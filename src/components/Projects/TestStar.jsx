import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StarContainer = styled.div`
	position: relative;
	width: ${({ size }) => (size ? `${size}rem` : '3rem')};
	height: ${({ size }) => (size ? `${size}rem` : '3rem')};
`;

const Star = styled(motion.svg)`
	width: 100%;
	height: 100%;
	filter: blur(1px);
`;

const StarShadow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	box-shadow: ${({ size, color }) => `0 0 ${25 * (size || 3)}px ${7 * (size || 3)}px ${color}`};
`;

export const TestStar = ({ size = '3', color = '#fff', animateProps = {}, transitionProps = {} }) => {
	return (
		<StarContainer size={size}>
			<StarShadow size={size} color={color} />
			<Star
				fill={color}
				viewBox='0 0 800 800'
				initial={{ scale: 1, rotate: 0 }}
				animate={{
					scale: [0.7, 1, 0.7],
					opacity: [0.7, 1, 0.7],
					rotate: [0, -360],
					...animateProps,
				}}
				transition={{
					duration: 5,
					ease: 'linear',
					repeat: Infinity,
					...transitionProps,
				}}
			>
				<path
					id='star_1'
					d='M400 66.6667L356.617 240.2C348.15 274.062 343.92 290.993 335.103 304.77C327.305 316.956 316.956 327.305 304.77 335.103C290.993 343.92 274.062 348.15 240.2 356.617L66.6667 400L240.2 443.383C274.062 451.85 290.993 456.08 304.77 464.897C316.956 472.693 327.305 483.043 335.103 495.23C343.92 509.007 348.15 525.94 356.617 559.8L400 733.333L443.383 559.8C451.85 525.94 456.08 509.007 464.897 495.23C472.693 483.043 483.043 472.693 495.23 464.897C509.007 456.08 525.94 451.85 559.8 443.383L733.333 400L559.8 356.617C525.94 348.15 509.007 343.92 495.23 335.103C483.043 327.305 472.693 316.956 464.897 304.77C456.08 290.993 451.85 274.062 443.383 240.2L400 66.6667Z'
				/>
				<path
					id='star_2'
					d='M612.396 188.132L474.351 270.959C447.414 287.12 433.947 295.203 419.568 298.36C406.85 301.152 393.678 301.152 380.96 298.36C366.581 295.203 353.115 287.12 326.177 270.959L188.132 188.132L270.959 326.177C287.12 353.115 295.203 366.581 298.36 380.96C301.153 393.677 301.153 406.85 298.36 419.568C295.204 433.946 287.119 447.415 270.959 474.351L188.132 612.396L326.177 529.569C353.113 513.409 366.582 505.325 380.96 502.168C393.677 499.374 406.851 499.374 419.568 502.168C433.946 505.325 447.415 513.409 474.351 529.569L612.396 612.396L529.569 474.351C513.409 447.415 505.325 433.946 502.168 419.568C499.375 406.85 499.375 393.677 502.168 380.96C505.325 366.581 513.408 353.115 529.569 326.177L612.396 188.132Z'
				/>
			</Star>
		</StarContainer>
	);
};
