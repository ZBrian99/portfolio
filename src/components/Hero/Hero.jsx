import styled from '@emotion/styled';
import { GlowButtonFullColor } from '../General/GlowButtonFullColor';
import { GlowButtonAlt } from '../General/GlowButtonAlt';
import { HeroPhoto } from './HeroPhoto';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const fadeInRight = `
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const HeroContainer = styled.section`
  ${fadeInUp}
  ${fadeInRight}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	padding: 1rem 2rem 0;
	width: 100%;
	max-width: 80rem;
	/* position: relative; */
	min-height: 100svh;
	text-align: left;
	@media screen and (min-width: 50rem) {
		padding-top: 4rem;
		flex-direction: row;
		justify-content: flex-start;
		/* text-align: left; */
	}
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

const HeroInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 0.6em;
	gap: 0.5rem;
	font-weight: bold;
	@media screen and (min-width: 34rem) {
		/* font-size: 0.7em; */
		font-size: 0.8em;
	}
	@media screen and (min-width: 50rem) {
		flex: 1;
		align-items: flex-start;
		font-size: 0.75em;
	}
	@media screen and (min-width: 60rem) {
		font-size: 0.9em;
	}
	@media screen and (min-width: 65rem) {
		font-size: 1em;
	}
`;

const HeroWelcome = styled.p`
	font-size: 2.2em;
	animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  @media screen and (min-width: 24rem) {
    font-size: 2.7em;
	}
`;

const HeroTitle = styled.h1`
  font-size: 3em;
	animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
	opacity: 0;
	@media screen and (min-width: 24rem) {
    font-size: 4em;
	}
	@media screen and (min-width: 50rem) {
		white-space: nowrap;
	}
`;

const HeroSubtitle = styled.h2`
	font-size: 2em;
	animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
	opacity: 0;
	@media screen and (min-width: 24rem) {
    white-space: nowrap;
		font-size: 2.6em;
	}
	@media screen and (min-width: 25.5rem) {
		font-size: 2.6em;
	}
	@media screen and (min-width: 50rem) {
		font-size: 2.9em;
	}
	@media screen and (min-width: 52rem) {
		font-size: 3em;
	}
`;
const HeroExtra = styled.p`
  font-size: 1.6em;
	animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
	opacity: 0;
	@media screen and (min-width: 24rem) {
    font-size: 1.9em;
	}
	@media screen and (min-width: 34rem) {
    font-size: 1.6em;
	}
  @media screen and (min-width: 41rem) {
    font-size: 2em;
	}
	@media screen and (min-width: 50rem) {
		font-size: 1.6em;
	}
`;

const HeroButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
	gap: 1rem;
	font-size: 1rem;
	animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
	opacity: 0;
`;

const HighlightText = styled.span`
	color: #ffd000;
	${({ nowrap }) => nowrap && `white-space: nowrap;`}
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;


export const Hero = () => {
	return (
		<HeroContainer id='home'>
			<HeroInfoContainer>
				<HeroWelcome>Hola 👋</HeroWelcome>
				<HeroTitle>
					Soy <HighlightText>Brian </HighlightText>Zelada
				</HeroTitle>
				<HeroSubtitle>
					<HighlightText>Desarrollador Full Stack</HighlightText> 💻
				</HeroSubtitle>
				<HeroExtra>
					Transformo ideas en <HighlightText>soluciones web a medida</HighlightText>
				</HeroExtra>
				<HeroButtonsContainer>
					<GlowButtonFullColor href='#contact'>🚀 Contacto </GlowButtonFullColor>
					<GlowButtonAlt href='#projects'>📂 Proyectos </GlowButtonAlt>
				</HeroButtonsContainer>
			</HeroInfoContainer>
			<HeroPhoto />
		</HeroContainer>
	);
};
