import styled from '@emotion/styled';
import { PlanetOrbit } from './PlanetOrbit';
import { PlanetRotation } from './PlanetRotation';
import { motion } from 'framer-motion';

const PlanetStyled = styled(motion.div)`
	width: ${({ size }) => `${size}%`};
	height: ${({ size }) => `${size}%`};
	margin: ${({ size }) => `-${size / 2}% auto`};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const Planet = ({ size, src, name, moons, speed, orbit, orbitSize }) => {
	return (
		<PlanetOrbit size={orbitSize} orbit={orbit}>
			<PlanetRotation speed={speed}>
				<PlanetStyled
					size={size}
					animate={{ rotate: 360 }}
					transition={{
						duration: speed,
						ease: 'linear',
						repeat: Infinity,
					}}
				>
					<PlanetIcon src={src} alt={name} />
					{moons &&
						moons.map((moon, index) => (
							<PlanetOrbit size={moon.orbitSize} key={index}>
								<PlanetRotation speed={moon.speed}>
									<PlanetStyled
										size={moon.size}
										animate={{
											rotate: 360,
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
