import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #111;
`;

const Star = styled(motion.div)`
	position: absolute;
	background-color: #fff;
	border-radius: 50%;
`;

const getRandomNumber = (min, max) => {
	return Math.random() * (max - min) + min;
};

export const Background = () => {
	const [stars, setStars] = useState([]);

	useEffect(() => {
		const newStars = Array.from({ length: 300 }, (_, index) => {
			const animated = Math.random() > 0.5;

			return {
				key: index,
				size: getRandomNumber(1, 3),
				animated: animated,
				duration: animated ? getRandomNumber(5, 10) : 0,
				position: {
					x: getRandomNumber(0, 100),
					y: getRandomNumber(0, 100),
				},
			};
		});
		setStars(newStars);
	}, []);

	return (
		<BackgroundContainer>
			{stars.map((star) => (
				<Star
					key={star.key}
					initial={{
						left: `${star.position.x}%`,
						top: `${star.position.y}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
					}}
					animate={star.animated && { opacity: [0, 1, 0] }}
					transition={
						star.animated && {
							duration: star.duration,
							repeat: Infinity,
							ease: 'easeInOut',
						}
					}
				/>
			))}
		</BackgroundContainer>
	);
};
