import styled from '@emotion/styled';
import { GlowButtonFullColor } from '../General/GlowButtonFullColor';
import { GlowButtonAlt } from '../General/GlowButtonAlt';
import { HeroPhoto } from './HeroPhoto';

const HeroContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	width: 100%;
	gap: 1rem;
	max-width: 80rem;
	padding: 0 2rem;
	position: relative;
	min-height: 100svh;

	@media screen and (min-width: 50rem) {
		flex-direction: row;
		justify-content: flex-start;
		text-align: left;
	}
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

const HeroInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: left;
	align-items: flex-start;
	font-size: 0.7em;
	gap: 0.5rem;
	font-weight: bold;
	@media screen and (min-width: 50rem) {
		flex: 1;
		align-items: flex-start;
		font-size: 0.9em;
	}
	@media screen and (min-width: 60rem) {
		font-size: 1em;
	}
`;

const HeroWelcome = styled.p`
	font-size: 2em;
`;

const HeroTitle = styled.h1`
	font-size: 4.5em;
`;

const HeroSubtitle = styled.h2`
	font-size: 3em;
`;
const HeroExtra = styled.p`
	font-size: 1.6em;
`;

const HeroButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 1rem;
	gap: 1rem;
	font-size: 1rem;
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
		<HeroContainer id='home'>
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
					<GlowButtonFullColor href='#contact'>🚀 Contacto </GlowButtonFullColor>
					<GlowButtonAlt href='#projects'>📂 Proyectos </GlowButtonAlt>
				</HeroButtonsContainer>
			</HeroInfoContainer>
			<HeroPhoto />
		</HeroContainer>
	);
};
