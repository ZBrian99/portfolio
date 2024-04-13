import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from '@emotion/styled';

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
	border: 1px dashed white;
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
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: #1180db; */
	/* margin: calc(-30vw / 2) auto; */
	margin: calc(-${({ planetSize }) => planetSize} / 2) auto;
`;
const PlanetIcon = styled.img`
	width: 80%;
	height: 80%;
	object-fit: cover;
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
		{ orbitSize: '40vw', planetSize: '4vw', rotateTime: 15, startAngle: 5, endAngle: 8 },
		{ orbitSize: '53vw', planetSize: '6vw', rotateTime: 10, startAngle: 5, endAngle: 8 },
		{ orbitSize: '70vw', planetSize: '10vw', rotateTime: 17, startAngle: 5, endAngle: 8 },
		{ orbitSize: '95vw', planetSize: '13vw', rotateTime: 18, startAngle: 5, endAngle: 8 },
		{ orbitSize: '115vw', planetSize: '8vw', rotateTime: 16, startAngle: 5, endAngle: 8 },
		{ orbitSize: '133vw', planetSize: '9vw', rotateTime: 19, startAngle: 5, endAngle: 8 },
		{ orbitSize: '150vw', planetSize: '5vw', rotateTime: 14, startAngle: 5, endAngle: 8 },
		{ orbitSize: '170vw', planetSize: '12vw', rotateTime: 11, startAngle: 5, endAngle: 8 },
		{ orbitSize: '190vw', planetSize: '10vw', rotateTime: 17, startAngle: 5, endAngle: 8 },
	];
	const [angle, setAngle] = useState(90);
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
			<Line angle={10 + angle} />
			<Line angle={-20 + angle} />
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
				{planetsData.map((planet, index) => (
					<PlanetOrbit key={index} orbitSize={planet.orbitSize}>
						<PlanetRotation
							animate={{
								rotate: [100 - angle, 90 - angle],
								// rotate: [planet.endAngle + angle, planet.startAngle + angle],
							}}
							transition={{
								duration: planet.rotateTime,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<Planet
								animate={{
									// rotate: [0, 0],
									rotate: [(100 - angle) * -1, (90 - angle) * -1],
								}}
								transition={{
									duration: planet.rotateTime,
									ease: 'easeInOut',
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								planetSize={planet.planetSize}
							>
								<PlanetIcon src='src/assets/icons/sass.webp' alt='' />
							</Planet>
						</PlanetRotation>
					</PlanetOrbit>
				))}
			</PlanetContainer>
		</>
	);
};
