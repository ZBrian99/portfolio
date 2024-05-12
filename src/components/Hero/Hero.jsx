import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HeroButton } from './HeroButton';
import { HeroSocialButton } from './HeroSocialButton';
import { HeroAnimation } from './HeroAnimation';

const HeroContainer = styled.section`
	/* background-image: url('src/assets/images/background.png'); */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	width: 100%;
	height: 100svh;
	z-index: 1;
  gap: 10rem;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 0;
	}
`;
const HeroInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 1rem;
	padding: 3rem;
	@media screen and (min-width: 60rem) {
		align-items: flex-start;
		text-align: left;
	}
	font-weight: 600;
	z-index: 10;
`;

const HeroWelcome = styled.span`
	font-size: 2em;
`;

const HeroTitle = styled.h1`
	font-size: 2.5em;
`;

const HeroSubtitle = styled.h2`
	font-size: 1.5em;
`;

const HeroExtra = styled.p`
	font-size: 1.2em;
`;

const HeroContactContainer = styled.div`
	display: flex;
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

export const Hero = () => {
	return (
		<HeroContainer
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<HeroInfoContainer>
				<HeroWelcome>Hola, soy</HeroWelcome>
				<HeroTitle>
					<HighlightText>Brian Zelada</HighlightText>
				</HeroTitle>
				<HeroSubtitle>
					<HighlightText>Desarrollador web </HighlightText>especializado en
					<HighlightText> React</HighlightText>
				</HeroSubtitle>
				<HeroExtra>
					En resumen creo <HighlightText>paginas web</HighlightText> con diseños
					<HighlightText> unicos y funcionales</HighlightText>
				</HeroExtra>
				<HeroContactContainer>
					<HeroButton>Contactame</HeroButton>
					<HeroButton>Curriculum</HeroButton>
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
			<HeroAnimation />
		</HeroContainer>
	);
};
