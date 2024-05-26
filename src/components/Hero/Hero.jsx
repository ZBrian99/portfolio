import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HeroSocialButton } from './HeroSocialButton';
import { GlowButtonFullColor } from '../GlowButtonFullColor';
import { GlowButtonAlt } from '../GlowButtonAlt';
import { HeroPhoto } from './HeroPhoto';

const HeroContainer = styled(motion.section)`
	/* background-color: #8b993e76; */

	display: flex;
	align-items: center;
	justify-content: flex-end;
	/* justify-content: space-evenly; */
	justify-content: center;
	flex-direction: column-reverse;
	text-align: center;
	margin: 0 auto;
	width: 100%;
	/* margin-top: 4rem; */
	gap: 1rem;
	/* margin-top: 8rem; */
	max-width: 80rem;
	padding: 0 2rem;
	/* padding: 4rem 2rem 0; */
	position: relative;
	min-height: 100svh;
	margin-bottom: 10rem;
	/* min-height: calc(100svh - 4rem); */
	@media screen and (min-width: 50rem) {
		margin-top: 0rem;
		flex-direction: row;
		justify-content: flex-start;
		text-align: left;
	}
	@media screen and (min-width: 60rem) {
		/* margin-top: 4rem; */
		flex-direction: row;
	}
	@media screen and (min-width: 80rem) {
	}
`;

const HeroInfoContainer = styled.div`
	/* background-color: #3e789976; */
	/* flex: 0.8; */
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	/* text-align: center; */
	text-align: left;
	align-items: flex-start;
	font-size: 0.7em;
	z-index: 10;
	letter-spacing: 1px;
	gap: 0.5rem;

	font-weight: 800;

	@media screen and (min-width: 50rem) {
		align-items: flex-start;
		font-size: 0.9em;
	}
	@media screen and (min-width: 60rem) {
		font-size: 1em;
	}
`;

const HeroWelcome = styled(motion.p)`
	font-size: 2em;
`;

const HeroTitle = styled(motion.h1)`
	font-weight: inherit;
	font-size: 4.5em;
`;

const HeroSubtitle = styled(motion.h2)`
	font-weight: inherit;
	font-size: 3em;
`;
const HeroExtra = styled(motion.p)`
	font-size: 1.6em;
`;

const HeroButtonsContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 1rem;
	gap: 1rem;
	font-size: 1.1rem;
`;

const HeroSocialContainer = styled(motion.div)`
	margin-top: 1rem;
	font-size: 1.2rem;

	display: flex;
	gap: 1rem;
`;

const HighlightText = styled.span`
	color: #ffd000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);

`;

export const Hero = () => {
	return (
		<HeroContainer>
			<HeroInfoContainer>
				<HeroWelcome>Hola! Soy</HeroWelcome>

				<HeroTitle>
					<HighlightText>Brian</HighlightText> Zelada
				</HeroTitle>

				<HeroSubtitle>
					<HighlightText> Desarrollador web</HighlightText>
				</HeroSubtitle>
				<HeroExtra>
					Transformo <HighlightText>ideas</HighlightText> en sitios web
					<HighlightText> atractivos</HighlightText> y<HighlightText> funcionales</HighlightText>
				</HeroExtra>

				<HeroButtonsContainer>
					<GlowButtonFullColor>🚀 Contacto </GlowButtonFullColor>
					<GlowButtonAlt>📂 Proyectos </GlowButtonAlt>
				</HeroButtonsContainer>

				{/* <HeroSocialContainer>
					<HeroSocialButton
						url='https://github.com/ZBrian99'
						src='src/assets/icons/linkedin-icon.svg'
						name='linkedin'
					/>
					<HeroSocialButton
						url='https://github.com/ZBrian99'
						src='src/assets/icons/github-icon.svg'
						name='github'
					/>
				</HeroSocialContainer> */}
			</HeroInfoContainer>
			<HeroPhoto />
		</HeroContainer>
	);
};
