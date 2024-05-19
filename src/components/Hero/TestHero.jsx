import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HeroButton } from './HeroButton';
import { HeroSocialButton } from './HeroSocialButton';
import { HeroAnimation } from './HeroAnimation';
import { GlowButton } from './GlowButton';
import { GlowButtonTextAlt } from './GlowButtonTextAlt';
import { BaseGlowButton } from './BaseGlowButton';
import { GlowButtonFullColor } from './GlowButtonFullColor';
import { GlowButtonAlt } from './GlowButtonAlt';

const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	width: 100%;
	height: 100svh;
	z-index: 1;
	gap: 1rem;
	padding-top: 4rem;
	@media screen and (max-width: 60rem) {
		flex-wrap: wrap;
	}
`;

const HeroImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 40%;
	height: 100%;
	position: relative;
	padding: 1rem;

	@media screen and (max-width: 60rem) {
		display: none;
	}
`;

const HeroImage = styled.img`
	width: 100%;
	height: auto;
	opacity: 0.5;
	filter: grayscale(30%);
`;

const HeroImageDescription = styled.p`
	font-size: 1em;
	text-align: center;
	color: #ffffff;
	font-weight: 600;
	top: 75%;
	width: 90%;
	position: absolute;
	backdrop-filter: blur(1rem);
	margin: auto;
	&:before {
		content: '';
		margin: auto;

		z-index: -1;
		position: absolute;
		inset: 0;
	}
`;

const HeroInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 2rem;
	padding: 3rem 0;

	font-weight: 600;
	z-index: 10;
	width: 100%;
	height: 100%;
`;

const HeroWelcome = styled.span`
	font-size: 2em;
`;

const HeroTitle = styled.h1`
	width: 100%;
	text-align: center;
	font-size: 2.5em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.h2`
	font-size: 1.5em;
`;

const HeroBrand = styled.img`
	width: 10rem;
	height: 10rem;
`;

const HeroContactContainer = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	place-content: center;
	gap: 1rem;
`;

const HeroSocialContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const HeroDecoration = styled.div`
	z-index: 9;
`;

const HighlightText = styled.span`
	color: #5bcefa;
`;

export const TestHero = () => {
	return (
		<HeroContainer>
			<HeroImageContainer>
				<HeroImage src='src/assets/images/me.webp' />
				<HeroImageDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum?
				</HeroImageDescription>
			</HeroImageContainer>
			<HeroInfoContainer>
				<HeroTitle>
					<HighlightText>Lorem, ipsum dolor.</HighlightText>
				</HeroTitle>

				<HeroBrand src='src/assets/icons/redux.svg' />

				<HeroContactContainer>
					<GlowButtonTextAlt>🚀 Contacto </GlowButtonTextAlt>
					<GlowButtonAlt>📂 Proyectos </GlowButtonAlt>

					{/* <GlowButtonAlt>🚀 Contacto </GlowButtonAlt> */}
				</HeroContactContainer>

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
				</HeroSocialContainer>
			</HeroInfoContainer>

			<HeroImageContainer>
				<HeroImage src='src/assets/images/me.webp' />
				<HeroImageDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum?
				</HeroImageDescription>
			</HeroImageContainer>
		</HeroContainer>
	);
};
