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
	/* background-size: cover; */
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
	background-color: #1180db;
	/* margin: calc(-30vw / 2) auto; */
	margin: calc(-${({ planetSize }) => planetSize} / 2) auto;
`;
const PlanetIcon = styled.img`
	width: 80%;
	height: 80%;
	object-fit: cover;
`;
export const SistemaSolar = () => {
	const planetsData = [
		{ orbitSize: '30vw', planetSize: '3vw', rotateTime: 5, startAngle: 45, endAngle: 65 },
		{ orbitSize: '50vw', planetSize: '9vw', rotateTime: 10, startAngle: 45, endAngle: 65 },
		{ orbitSize: '70vw', planetSize: '13vw', rotateTime: 7, startAngle: 45, endAngle: 65 },
		{ orbitSize: '90vw', planetSize: '20vw', rotateTime: 8, startAngle: 45, endAngle: 65 },
		{ orbitSize: '110vw', planetSize: '8vw', rotateTime: 6, startAngle: 45, endAngle: 65 },
		{ orbitSize: '130vw', planetSize: '15vw', rotateTime: 9, startAngle: 45, endAngle: 65 },
		{ orbitSize: '150vw', planetSize: '5vw', rotateTime: 4, startAngle: 45, endAngle: 65 },
		{ orbitSize: '170vw', planetSize: '12vw', rotateTime: 11, startAngle: 45, endAngle: 65 },
		{ orbitSize: '190vw', planetSize: '18vw', rotateTime: 7, startAngle: 45, endAngle: 65 },
	];

	const [direction, setDirection] = useState(true);
	const controls = useAnimation();

	useEffect(() => {
		const startAnimation = async () => {
			await controls.start({
				rotate: direction ? 65 : 45,
				transition: {
					duration: 5,
					ease: 'easeInOut',
				},
			});
			setDirection(!direction);
		};
		startAnimation();
	}, [controls, direction]);

	return (
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
						initial={{ rotate: 0 }}
						animate={{
							rotate: [planet.endAngle, planet.startAngle],
						}}
						transition={{
							duration: planet.rotateTime,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Planet planetSize={planet.planetSize}>
							<PlanetIcon src='src/assets/icons/css.svg' alt='' />
						</Planet>
					</PlanetRotation>
				</PlanetOrbit>
			))}
		</PlanetContainer>
	);
};
