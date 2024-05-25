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
	@media screen and (min-width: 30rem) {
		padding: 0 2rem;
	}
	/* overflow: hidden; */
`;

const AboutWrapper = styled(motion.div)`
	/* background-color: rgba(255, 255, 255, 0.05); */
	/* background-color: rgba(255, 255, 255, 0.05); */
  /* overflow: hidden; */

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

  padding: 10rem 2rem 2rem;
  padding: 10rem 3rem 3rem;
  @media screen and (min-width: 30rem) {
    
    border-radius: 1rem;

  }
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.05); */
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	
	@media screen and (min-width: 60rem) {
		padding: 3rem;
		gap: 3rem;
		/* background: transparent; */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

const AboutImageContainer = styled.div`
	display: flex;
  width: 100%;
  max-width: 18rem;
  /* background-color: #80008061; */
  `;

const AboutInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	/* margin: 0 auto; */
	gap: 1rem;
  flex: 1;
	/* padding-top: 6rem; */
	/* width: 70%; */
	/* @media screen and (min-width: 60rem) { */
	/* width: 100%; */
	/* padding: 0; */
	/* } */

	background-color: rgba(255, 255, 255, 0.05);
	padding: 3rem;
	border-radius: 1rem;
`;

const AboutContact = styled.div`
	display: flex;

	gap: 1rem;
`;

const AboutTitle = styled(motion.h3)`
	width: 100%;
	text-align: center;
	font-size: 3em;
	margin-bottom: 10rem;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);

  @media screen and (min-width: 60rem){
    margin-bottom: 3rem;
  }
`;

const AboutDescription = styled(motion.p)`
	font-size: 1em;
	/* width: 100%; */
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
					<ProfileImage />
				</AboutImageContainer>
				<AboutInfo>
					<AboutDescription>
						1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat veritatis natus, eum
						facere sit numquam perspiciatis, exercitationem maiores voluptatum ut distinctio quo et minus
						fugiat fugit
					</AboutDescription>
					<AboutDescription>
						2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis dignissimos cumque
						voluptates qui eius possimus animi. Soluta, odio quibusdam molestias ducimus labore aperiam alias
						nisi, neque error, fugiat cumque.
					</AboutDescription>
					<AboutDescription>
						3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis dignissimos cumque
						voluptates qui eius possimus animi. Soluta, odio quibusdam molestias ducimus labore aperiam alias
						nisi, neque error, fugiat cumque.
					</AboutDescription>
					<Skills />
					<GlowButtonAlt>📄 Curriculum </GlowButtonAlt>
				</AboutInfo>
				{/* <AboutSide>
					<HeroPhoto />

				</AboutSide> */}
				{/* <ContactForm /> */}
			</AboutWrapper>
		</AboutContainer>
	);
};
