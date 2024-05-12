import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AnimationContainer = styled.div`
	@media screen and (max-width: 960px) {
		display: none;
	}
	width: 20%;
	height: 100%;
	position: relative;
	display: flex;
	/* justify-content: center; */
	align-items: center;
`;

const Spaceship = styled(motion.img)`
	width: 100%;
`;

const Trail = styled(motion.div)`
	position: absolute;
	width: 50%;
	height: 50%;
	top: 0;
	left: 25%;
	background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  filter: blur(1rem);
`;

export const HeroAnimation = () => {
	return (
		<AnimationContainer>
			<Trail
				animate={{ scale: 1.01, rotate: [-1, 1] }}
				transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
			/>
			<Spaceship
				src='src/assets/images/ship.svg'
				animate={{ scale: 1.01, rotate: [-1, 1] }}
				transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
			/>
		</AnimationContainer>
	);
};
