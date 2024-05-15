import styled from '@emotion/styled';
import { StarsBackground } from './StarsBackground';
import { WavesBackground } from './WavesBackground';
import { NebulaBackground } from './NebulaBackground';
const BackgroundContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	
`;
export const Background = () => {
	return (
		// <BackgroundContainer>
			// <StarsBackground />
    // {/* <WavesBackground /> */}
    <NebulaBackground/>
		// </BackgroundContainer>
	);
};
