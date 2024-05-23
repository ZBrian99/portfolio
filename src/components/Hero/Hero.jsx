import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HeroSocialButton } from './HeroSocialButton';
import { GlowButtonFullColor } from '../GlowButtonFullColor';
import { GlowButtonAlt } from '../GlowButtonAlt';
import { HeroPhoto } from './HeroPhoto';

const HeroContainer = styled(motion.section)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	margin-top: 4rem;
	max-width: 100rem;
	padding: 0rem 2rem;
	gap: 1rem;
	position: relative;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
	@media screen and (min-width: 80rem) {
	}
`;

const HeroInfoContainer = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100svh - 4rem);
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-align: left;
	align-items: flex-start;
	font-size: 0.7rem;

	@media screen and (min-width: 32rem) {
		font-size: 1rem;
	}
	@media screen and (min-width: 60rem) {
		font-size: 1rem;
		width: 50%;
	}
	z-index: 10;
	letter-spacing: 1px;
	gap: 0.5rem;
`;

const HeroWelcome = styled(motion.p)`
	font-size: 2em;
	font-weight: bold;
`;

const HeroTitle = styled(motion.h1)`
	font-size: 4.5em;
`;

const HeroSubtitle = styled(motion.h2)`
	font-size: 3em;
`;
const HeroExtra = styled(motion.h2)`
	font-size: 1.5em;
`;

const HeroButtonsContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
	gap: 1rem;
	/* font-size: 1rem; */
	font-size: 1.1rem;
`;

const HeroSocialContainer = styled(motion.div)`
	margin-top: 1rem;
	font-size: 1.2rem;

	display: flex;
	gap: 1rem;
`;

const HighlightText = styled.span`
	font-weight: 800;

	color: #ffd000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
`;

export const Hero = () => {
	const wrapper = {
		show: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const title = {
		// hidden: { opacity: 0, x: -100 },
		// show: {
		// 	opacity: 1,
		// 	x: 0,
		// 	transition: {
		// 		type: 'spring',
		// 	},
		// },
		hidden: {
			// opacity: 0,
			scale: 0,
		},
		show: {
			// opacity: 1,
			scale: 1,

			transition: {
				durarion: 1,
				type: 'spring',
			},
		},
	};
	const item = {
		hidden: {
			// opacity: 0,
			scale: 0,
		},
		show: {
			// opacity: 1,
			scale: 1,

			transition: {
				durarion: 1,
				type: 'spring',
			},
		},
	};
	return (
		<HeroContainer
		// variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}
		>
			<HeroInfoContainer>
				<HeroWelcome

				// variants={title}
				>
					Hola, soy
				</HeroWelcome>

				<HeroTitle

				// variants={title}
				>
					<HighlightText>Brian</HighlightText> Zelada
				</HeroTitle>

				<HeroSubtitle

				// variants={title}
				>
					<HighlightText> Desarrollador web</HighlightText>
				</HeroSubtitle>
				<HeroExtra

				// variants={title}
				>
					Transformo <HighlightText>ideas</HighlightText> en sitios web
					<HighlightText> atractivos</HighlightText> y<HighlightText> funcionales</HighlightText>
				</HeroExtra>

				<HeroButtonsContainer>
					<GlowButtonFullColor>🚀 Contacto </GlowButtonFullColor>
					<GlowButtonAlt>📂 Proyectos </GlowButtonAlt>
				</HeroButtonsContainer>

				<HeroSocialContainer>
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
					{/* <HeroSocialButton
						url='https://github.com/ZBrian99'
						src='src/assets/icons/cv_8.svg'
						name='github'
					/> */}
				</HeroSocialContainer>
			</HeroInfoContainer>
			<HeroPhoto />
		</HeroContainer>
	);
};
