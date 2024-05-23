import React from 'react';
import styled from '@emotion/styled';
import { Sun } from './Sun';
import { Planet } from './Planet';

const SolarSystemContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const SolarSystem = () => {
	return (
		<SolarSystemContainer>
			<Sun size={20} />
			<Planet size={20} src='src/assets/icons/js.svg' name='react' speed={10} orbitSize={35} />
			<Planet size={15} src='src/assets/icons/css.svg' name='react' speed={20} orbitSize={62.5} />
			<Planet size={7} src='src/assets/icons/html.svg' name='react' speed={30} orbitSize={90} />
		</SolarSystemContainer>
	);
};
