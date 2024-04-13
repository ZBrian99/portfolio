import { useState } from 'react';
import { css, keyframes } from '@emotion/css';
import styled from '@emotion/styled';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(65deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const PlanetContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: hotpink;
	position: relative;
`;

const Sun = styled.div`
	width: 5rem;
	height: 5rem;
	background-color: #ffd000;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const PlanetOrbit = styled.div`
	width: 10rem;
	height: 10rem;
	background-color: transparent;
	border: 1px dashed white;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -5rem 0 0 -5rem;
	animation: ${rotateAnimation} 5s linear infinite;
`;

const Planet = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: lightblue;
	border-radius: 50%;
	margin: -0.5rem auto 0;
`;

const SistemaSolar = () => {
	return (
		<PlanetContainer>
			<Sun />
			<PlanetOrbit>
				<Planet />
			</PlanetOrbit>
		</PlanetContainer>
	);
};

export default SistemaSolar;
