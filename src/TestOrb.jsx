import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from '@emotion/styled';
import skillsData from './data/skills.json';
const PlanetContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-image: url('src/assets/images/background.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
`;

const Sun = styled(motion.div)`
	/* width: 15vw; */
	/* height: 15vw; */
	width: ${({ sunSize }) => sunSize};
	height: ${({ sunSize }) => sunSize};
	/* background-color: #ffd000; */
	/* border-radius: 50%; */
	position: absolute;
	top: 100%;
	left: 0%;

	/* margin: -7.5vw 0 0 -7.5vw; */
	margin: calc(-${({ sunSize }) => sunSize} / 2) 0 0 calc(-${({ sunSize }) => sunSize} / 2);

	background-image: url('src/assets/icons/react.svg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const PlanetOrbit = styled(motion.div)`
	/* width: 30vw;
	height: 30vw; */
	width: ${({ orbitSize }) => orbitSize};
	height: ${({ orbitSize }) => orbitSize};
	background-color: transparent;
	/* border: 1px dashed white; */
	border-radius: 50%;
	position: absolute;
	top: 100%;
	left: 0%;
	/* margin: calc(-30vw / 2) 0 0 calc(-30vw / 2); */
	margin: calc(-${({ orbitSize }) => orbitSize} / 2) 0 0 calc(-${({ orbitSize }) => orbitSize} / 2);
`;

const PlanetRotation = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	/* background-color: #ff000044; */
`;

const Planet = styled(motion.div)`
	/* width: 30vw;
	height: 30vw; */
	width: ${({ planetSize }) => planetSize};
	height: ${({ planetSize }) => planetSize};
	border-radius: 50%;
	/* overflow: hidden; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: #c7db1184;
	/* margin: calc(-30vw / 2) auto; */
	margin: calc(-${({ planetSize }) => planetSize} / 2) auto;
`;
const PlanetIcon = styled.img`
	width: 80%;
	height: 80%;
	object-fit: cover;
`;

const MoonOrbit = styled(motion.div)`
	/* Alinea la órbita de la luna con el centro del planeta */
	width: ${({ orbitSize }) => orbitSize};
	height: ${({ orbitSize }) => orbitSize};
	background-color: transparent;
	background-color: #0d491f5a;
	/* margin-top: calc(50% - ${({ orbitSize }) => orbitSize} / 2); */
	/* margin-left: calc(50% - ${({ orbitSize }) => orbitSize} / 2); */

	border-radius: 50%;
	position: absolute;
	margin: calc(-${({ orbitSize }) => orbitSize} / 2) auto;
`;
const Line = styled.div`
	position: fixed;
	width: 300%; /* Doble del ancho de la ventana */
	height: 5px; /* Grosor de la línea */
	background-color: red;
	bottom: 0; /* Fijar a la parte inferior */
	left: 0; /* Fijar a la parte izquierda */
	transform-origin: center left;
	transform: rotate(-${(props) => props.angle}deg);
	z-index: 10;
`;

const getScreenAngle = () => {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const angleRadians = Math.atan2(screenHeight, screenWidth);
	const angleDegrees = angleRadians * (180 / Math.PI);
	return angleDegrees;
};

export const SistemaSolar = () => {
	const planetsData = [
		{ orbitSize: '40vw', planetSize: '4vw' },
		{ orbitSize: '53vw', planetSize: '6vw' },
		{ orbitSize: '70vw', planetSize: '10vw' },
		{ orbitSize: '95vw', planetSize: '13vw' },
		{ orbitSize: '115vw', planetSize: '8vw' },
		{ orbitSize: '133vw', planetSize: '9vw' },
		{ orbitSize: '150vw', planetSize: '5vw' },
		{ orbitSize: '170vw', planetSize: '12vw' },
		{ orbitSize: '190vw', planetSize: '10vw' },
	];
	const [angle, setAngle] = useState(80);
	useEffect(() => {
		setAngle(getScreenAngle());
		const handleResize = () => {
			setAngle(getScreenAngle());
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	console.log(angle);

	return (
		<>
			{/* <Line angle={+ angle} /> */}
			{/* <Line angle={-10 + angle} /> */}
			<PlanetContainer>
				<Sun
					animate={{
						rotate: -360,
					}}
					transition={{
						duration: 60,
						ease: 'linear',
						repeat: Infinity,
					}}
					sunSize={'30vw'}
				/>
				{skillsData.skills.map((planet, index) => (
					<PlanetOrbit key={index} orbitSize={planet.orbitSize}>
						<PlanetRotation
							animate={{
								rotate: [80, 90 - angle],
							}}
							transition={{
								duration: index +1,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<Planet
								animate={{
									rotate: [80 * -1, (90 - angle) * -1],
								}}
								transition={{
									duration: index +1,
									ease: 'easeInOut',
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								planetSize={planet.planetSize}
								// planetSize={planet.planetSize}
							>
								<PlanetIcon src={planet.src} alt={planet.name} />
								{planet.moons?.map((moon, moonIndex) => (
									<MoonOrbit key={`moon-${index}-${moonIndex}`} orbitSize={moon.orbitSize}>
										<PlanetRotation
											animate={{
												rotate: [360, 0],
											}}
											transition={{
												duration: moonIndex +1,
												ease: 'linear',
												repeat: Infinity,
											}}
										>
											<Planet
												animate={{
													rotate: [-360, 0],
												}}
												transition={{
													duration: moonIndex +1,
													ease: 'linear',
													repeat: Infinity,
												}}
												planetSize={moon.planetSize}
											>
												<PlanetIcon src={moon.src} alt={`Moon of ${planet.name}`} />
											</Planet>
										</PlanetRotation>
									</MoonOrbit>
								))}
							</Planet>
						</PlanetRotation>
					</PlanetOrbit>
				))}
			</PlanetContainer>
		</>
	);
};
