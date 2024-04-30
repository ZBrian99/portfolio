import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StarContainer = styled(motion.div)`
	width: ${({ size }) => (size ? `${size}rem` : '3rem')};
	height: ${({ size }) => (size ? `${size}rem` : '3rem')};
	margin-top: ${({ size }) => (size ? `-${size / 2}rem` : '-1.5rem')};
	margin-left: ${({ size }) => (size ? `-${size / 2}rem` : '-1.5rem')};
	position: fixed;
`;

const Star = styled(motion.svg)`
	width: 100%;
	height: 100%;
	filter: blur(1px);
	/* filter: blur(${({ animate }) => `${animate.scale}px`}); */
`;

const StarShadow = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	box-shadow: ${({ size, color }) => `0 0 ${15 * (size || 3)}px ${5 * (size || 3)}px ${color}`};
`;

export const ProjectStar = ({
	size = '3',
	color = '#fff',
	initial = {},
	animate = {},
	transition = {},
}) => {
  console.log("render")
	return (
		<StarContainer size={size} initial={initial} animate={animate} transition={transition}>
			<StarShadow size={size} color={color} />
			<Star
				width='800'
				height='800'
				viewBox='0 0 800 800'
				xmlns='http://www.w3.org/2000/svg'
				fill={color}
				size={size}
				animate={{
					rotate: [0, -360],
				}}
				transition={{
					rotate: {
						duration: 5,
						ease: 'linear',
						repeat: Infinity,
					},
				}}
			>
				<path
					id='star_1'
					d='M400 0L347.94 208.24C337.78 248.874 332.704 269.191 322.124 285.724C312.766 300.347 300.347 312.766 285.724 322.124C269.191 332.704 248.874 337.78 208.24 347.94L0 400L208.24 452.06C248.874 462.22 269.191 467.296 285.724 477.876C300.347 487.232 312.766 499.652 322.124 514.276C332.704 530.808 337.78 551.128 347.94 591.76L400 800L452.06 591.76C462.22 551.128 467.296 530.808 477.876 514.276C487.232 499.652 499.652 487.232 514.276 477.876C530.808 467.296 551.128 462.22 591.76 452.06L800 400L591.76 347.94C551.128 337.78 530.808 332.704 514.276 322.124C499.652 312.766 487.232 300.347 477.876 285.724C467.296 269.191 462.22 248.874 452.06 208.24L400 0Z'
				/>
				<path
					id='star_2'
					d='M647.462 152.487L486.41 249.119C454.983 267.974 439.271 277.404 422.496 281.087C407.658 284.344 392.291 284.344 377.453 281.087C360.678 277.404 344.967 267.974 313.54 249.119L152.487 152.487L249.119 313.54C267.974 344.967 277.404 360.678 281.086 377.453C284.346 392.29 284.345 407.658 281.087 422.496C277.404 439.271 267.972 454.984 249.119 486.41L152.487 647.462L313.54 550.831C344.966 531.977 360.679 522.545 377.453 518.863C392.29 515.603 407.659 515.603 422.496 518.863C439.271 522.545 454.984 531.977 486.41 550.831L647.462 647.462L550.831 486.41C531.977 454.984 522.545 439.271 518.863 422.496C515.605 407.658 515.604 392.29 518.863 377.453C522.546 360.678 531.976 344.967 550.831 313.54L647.462 152.487Z'
				/>
			</Star>
		</StarContainer>
	);
};
