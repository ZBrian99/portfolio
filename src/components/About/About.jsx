import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GlowButtonAlt } from '../GlowButtonAlt';
import { Skills } from '../Skills/Skills';
import { HeroSocialButton } from '../Hero/HeroSocialButton';
import { ContactForm } from '../Contact/ContactForm';
import { ProfileImage } from './ProfileImage';
import { HeroPhoto } from '../Hero/HeroPhoto';

const AboutContainer = styled.section`
	/* max-width: 68rem; */
	/* margin-top: 30rem; */
	display: flex;
	/* flex-wrap: wrap; */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 3rem;
	@media screen and (min-width: 30rem) {
		/* padding: 0 1rem; */
	}
	@media screen and (min-width: 50rem) {
		/* padding: 0; */
	}
	/* overflow: hidden; */
`;

const AboutWrapper = styled(motion.div)`
	/* background-color: rgba(255, 255, 255, 0.05); */
	/* background-color: rgba(255, 255, 255, 0.05); */
	/* overflow: hidden; */
	height: min-content;
	display: flex;
	flex-direction: column;
	/* background-color: cadetblue; */

	/* flex-direction: column; */
	/* overflow: hidden; */
	/* position: relative; */
	/* border-radius: 1rem; */
	/* padding: 6rem 2rem 3rem; */
	/* padding-bottom: 17rem; */

	/* overflow: hidden; */

	/* @media screen and (min-width: 70rem) {
		padding-right: 17rem;
	} */

	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	position: relative;
	padding: 0 2rem;
	/* padding: 10rem 2rem 2rem; */
	/* padding: 10rem 3rem 3rem; */
	@media screen and (min-width: 30rem) {
		/* padding: 2rem; */
		border-radius: 1rem;
	}
	@media screen and (min-width: 45rem) {
		padding: 0 3rem;
	}
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.1); */

	/* background-color: rgba(255, 255, 255, 0.05); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)); */

	@media screen and (min-width: 50rem) {
		padding: 0 2rem;
		/* background-color: rgba(255, 255, 255, 0.1); */
		gap: 3rem;
		/* background: transparent; */
		flex-direction: row;
		/* flex-direction: row-reverse; */
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
		filter: grayscale(50%);
		/* max-width: 18rem; */
		background-color: #80008061;
		/* flex: 1; */
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
	/* align-items: center; */
	/* margin: 0 auto; */
	gap: 1rem;
	flex: 1;

	max-width: 65ch;
	/* padding-top: 6rem; */
	/* width: 70%; */
	/* @media screen and (min-width: 60rem) { */
	/* width: 100%; */
	/* padding: 0; */
	/* } */

	/* background-color: rgba(255, 255, 255, 0.05); */
	/* padding: 3rem; */
	border-radius: 1rem;
`;

const AboutTitle = styled(motion.h3)`
	text-align: center;
	font-size: 3em;
	/* margin-bottom: 10rem; */

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);

	@media screen and (min-width: 60rem) {
		/* margin-bottom: 3rem; */
	}
`;

const AboutDescription = styled(motion.p)`
	font-size: 1em;
	/* width: 100%; */
	color: #ccc;
`;

const AboutSide = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 3rem;
	/* justify-content: space-between; */
	/* gap: 1rem; */
	/* background-color: #15800060; */
	/* flex: 0.4; */
`;
const TextHighlight = styled.span`
	font-weight: bold;
	/* color: #f1f1f1; */
	color: white;
	/* color: #ff8800; */
	/* color: #ffd000; */
	/* background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #cc00ff, #ff8800); */
`;
const wrapper = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			// staggerChildren: 0.3,
		},
	},
};
const title = {
	hidden: { opacity: 0, x: -100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

const image = {
	hidden: { opacity: 0, x: 100 },
	show: {
		opacity: 1,
		x: 0,

		transition: {
			duration: 1,
		},
	},
};

export const About = () => {
	return (
		<AboutContainer>
			<AboutTitle
			// variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}
			>
				Sobre mí
			</AboutTitle>
			<AboutWrapper
			// variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}
			>
				<AboutImageContainer>
					{/* <AboutImage src='src/assets/images/about_20.jpg' /> */}
					<AboutImage src='src/assets/images/about_4.jpg' />
					{/* <ProfileImage /> */}
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
					<a
						href='https://drive.google.com/file/d/1cnpVAz6phvFaQCKsCJ2iowrBxdvftCYb/view?usp=sharing'
						target='_blank'
						rel='noreferrer'
					>
						<GlowButtonAlt>📄 Curriculum</GlowButtonAlt>
					</a>
				</AboutInfo>
				{/* <AboutSide>
					<HeroPhoto />

				</AboutSide> */}
				{/* <ContactForm /> */}
			</AboutWrapper>
		</AboutContainer>
	);
};
