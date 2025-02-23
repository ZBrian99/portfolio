import styled from '@emotion/styled';
import { GlowButtonFullColor } from '../General/GlowButtonFullColor';
import { GlowButtonAlt } from '../General/GlowButtonAlt';
import { HeroPhoto } from './HeroPhoto';

const HeroContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	gap: 1.5rem;
	width: 100%;
	max-width: 80rem;
	padding: 1rem 2rem 0;
	position: relative;
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
    @media screen and (min-width: 24rem) {
    font-size: 2.7em;
	}
`;

const HeroTitle = styled.h1`
  font-size: 3em;
	@media screen and (min-width: 24rem) {
    font-size: 4em;
	}
	@media screen and (min-width: 50rem) {
		white-space: nowrap;
	}
`;

const HeroSubtitle = styled.h2`
	font-size: 2em;
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
`;

const HighlightText = styled.span`
	color: #ffd000;
	${({ nowrap }) => nowrap && `white-space: nowrap;`}
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

// const HeroDownChevron = styled.a`
// 	display: none;
// 	text-decoration: none;
// 	position: absolute;
// 	bottom: 1%;
// 	width: 2em;
// 	height: 2em;
// 	left: calc(50% - 1rem);
// 	display: block;
// 	cursor: pointer;
// 	animation: bounce 2s infinite;
// 	@keyframes bounce {
// 		0%,
// 		20%,
// 		50%,
// 		80%,
// 		100% {
// 			transform: translateY(0);
// 		}
// 		40% {
// 			transform: translateY(-0.5rem);
// 		}
// 		60% {
// 			transform: translateY(-0.2rem);
// 		}
// 	}
// 	@media screen and (min-width: 50rem) {
// 		display: block;
// 	}
// `;

// const HeroDownChevronIcon = styled.img`
// 	width: 100%;
// 	height: 100%;
// `;

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
