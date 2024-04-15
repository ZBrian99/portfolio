import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {PlanetOrbit} from './PlanetOrbit';
import {PlanetRotation} from './PlanetRotation';
import { motion } from 'framer-motion';
import {useWindowSize} from '../../hooks/useWindowSize';

const PlanetStyled = styled(motion.div)`
	width: ${({ size }) => `${size}vw`};
	height: ${({ size }) => `${size}vw`};
	margin: calc(-${({ size }) => `${size}vw`} / 2) auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	@media screen and (max-width: 60rem) {
		width: ${({ size }) => `${size}vh`};
		height: ${({ size }) => `${size}vh`};
		margin: calc(-${({ size }) => `${size}vh`} / 2) auto;
	}
`;

const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const Planet = ({ size, src, name, moons, speed, angle, orbitSize }) => {
	const isMobile = useWindowSize();

	return (
		<PlanetOrbit size={orbitSize}>
			<PlanetRotation rotate={isMobile ? [180 - angle, 180 + angle] : [90 - angle, 90 + angle]} speed={speed}>
				<PlanetStyled
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
							<PlanetOrbit size={moon.orbitSize} key={index}>
								<PlanetRotation rotate={[0, -360]} speed={moon.speed} moon>
									<PlanetStyled
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
									</PlanetStyled>
								</PlanetRotation>
							</PlanetOrbit>
						))}
				</PlanetStyled>
			</PlanetRotation>
		</PlanetOrbit>
	);
};

