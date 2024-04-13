import { useState, useEffect } from 'react';
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

const Sun = styled.div`
	width: 15vw;
	height: 15vw;
	background-color: #ffd000;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -7.5vw 0 0 -7.5vw;
`;

const PlanetOrbit = styled(motion.div)`
	width: 30vw;
	height: 30vw;
	background-color: transparent;
	border: 1px dashed white;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -15vw 0 0 -15vw;
`;
const PlanetRotation = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Planet = styled.div`
	width: 7vw;
	height: 7vw;
	border-radius: 50%;
	background-color: #add8e6;
	margin: -3.5vw auto;
`;

export const SistemaSolar = () => {
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
			<Sun />
			<PlanetOrbit>
				<PlanetRotation animate={controls}>
					<Planet />
				</PlanetRotation>
			</PlanetOrbit>
		</PlanetContainer>
	);
};
