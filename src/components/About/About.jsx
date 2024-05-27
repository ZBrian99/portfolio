import styled from '@emotion/styled';
import { GlowButtonAlt } from '../General/GlowButtonAlt';
import { Skills } from '../Skills/Skills';

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 3rem;
`;

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 0 2rem;

	@media screen and (min-width: 45rem) {
		padding: 0 3rem;
	}

	@media screen and (min-width: 50rem) {
		padding: 0 2rem;
		gap: 3rem;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

const AboutImageContainer = styled.div`
	display: none;
	@media screen and (min-width: 50rem) {
		display: flex;
		border-radius: 1rem;
		overflow: hidden;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		filter: grayscale(30%);
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
		flex: 0.5;
	}
`;

const AboutImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const AboutInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	flex: 1;
	max-width: 65ch;
	border-radius: 1rem;
`;

const AboutTitle = styled.h3`
	text-align: center;
	font-size: 3em;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const AboutDescription = styled.p`
	font-size: 1em;
	color: #f1f1f1;
`;

const TextHighlight = styled.span`
	font-weight: bold;
	color: #fff;
`;

export const About = () => {
	return (
		<AboutContainer id='about'>
			<AboutTitle>Sobre mí</AboutTitle>
			<AboutWrapper>
				<AboutImageContainer>
					<AboutImage src='/images/about_4.webp' />
				</AboutImageContainer>
				<AboutInfo>
					<AboutDescription>
						Comencé modificando pequeñas aplicaciones, A lo largo de los años he aprendido múltiples
						tecnologías, para finalmente especializarme en React.
						<TextHighlight> hoy en día desarrollo aplicaciones completas.</TextHighlight>
					</AboutDescription>

					<AboutDescription>
						Mi enfoque está en el diseño UI/UX,{' '}
						<TextHighlight>
							garantizando que mis aplicaciones se adapten y funcionen en cualquier dispositivo
						</TextHighlight>{' '}
						, brindando una experiencia de usuario coherente y fluida sin dejar de lado el diseño y la
						funcionalidad.
					</AboutDescription>

					<AboutDescription>
						Además de mis habilidades técnicas, soy una persona que ha superado multiples obstaculos en mi
						vida,
						<TextHighlight>
							{' '}
							Esto me ha enseñado a controlar mis emociones, ser persistente y nunca rendirme.
						</TextHighlight>{' '}
						Mi capacidad de automotivación y gran adaptabilidad me permite superar cualquier obstáculo que se
						me presente.{' '}
						<TextHighlight>
							Actualmente estoy en el mejor momento de mi vida y listo para enfrentar cualquier desafío.
						</TextHighlight>
					</AboutDescription>

					<Skills />
					<GlowButtonAlt
						href='https://drive.google.com/file/d/1cnpVAz6phvFaQCKsCJ2iowrBxdvftCYb/view?usp=sharing'
						target='_blank'
						rel='noreferrer'
					>
						📄 Curriculum
					</GlowButtonAlt>
				</AboutInfo>
			</AboutWrapper>
		</AboutContainer>
	);
};
