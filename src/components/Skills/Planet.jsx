// Planet.js
import React, { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PlanetOrbit = styled(motion.div)`
	width: ${({ orbitSize }) => `${orbitSize}vw`};
	height: ${({ orbitSize }) => `${orbitSize}vw`};

	@media screen and (max-width: 48rem) {
		width: ${({ orbitSize }) => `${orbitSize}vh`};
		height: ${({ orbitSize }) => `${orbitSize}vh`};
	}

	background-color: transparent;
	border: 1px dashed rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	position: absolute;
`;

const PlanetRotation = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Planet = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};
	margin: calc(-${({ size }) => `${size}vw`} / 2) auto;

	@media screen and (max-width: 48rem) {
		width: ${({ size }) => `${size}vh`};
		height: ${({ size }) => `${size}vh`};
		margin: calc(-${({ size }) => `${size}vh`} / 2) auto;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;
const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
	/* object-fit: cover;
	border-radius: 50%; */
`;

const PlanetComponent = ({ size, orbitSize, src, name, moons, speed, angle }) => {
	const [isMobile, setIsMobile] = useState(false);

	useLayoutEffect(() => {
		const handleResize = () => {
			const isMobile = window.matchMedia('(max-width: 767px)').matches;
			setIsMobile(isMobile);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<PlanetOrbit orbitSize={orbitSize}>
			<PlanetRotation
				animate={{ rotate: isMobile ? [180 - angle, 180 + angle] : [90 - angle, 90 + angle] }}
				transition={{
					duration: speed,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			>
				<Planet
					size={size}
					animate={{ rotate: isMobile ? [-180 + angle, -180 - angle] : [-90 + angle, -90 - angle] }}
					transition={{
						duration: speed,
						ease: 'easeInOut',
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				>
					<PlanetIcon src={src} alt={name} />
					{moons &&
						moons.map((moon, index) => (
							<PlanetOrbit orbitSize={moon.orbitSize} key={index}>
								<PlanetRotation
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										duration: moon.speed,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Planet
										size={moon.size}
										animate={{
											rotate: [0, 360],
										}}
										transition={{
											duration: moon.speed,
											ease: 'linear',
											repeat: Infinity,
										}}
									>
										<PlanetIcon src={moon.src} alt={moon.name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
						))}
				</Planet>
			</PlanetRotation>
		</PlanetOrbit>
	);
};

export default PlanetComponent;
