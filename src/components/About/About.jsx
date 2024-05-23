import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GlowButtonAlt } from '../GlowButtonAlt';
import { Skills } from '../Skills/Skills';

const AboutContainer = styled.section`
	/* max-width: 68rem; */
	padding: 0 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 3rem;
	/* overflow: hidden; */
`;

const AboutWrapper = styled(motion.div)`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
		padding: 3rem;
	}
	/* flex-direction: column; */
	gap: 5rem;
	/* overflow: hidden; */

	border-radius: 1rem;

	/* padding: 6rem 2rem 3rem; */
	/* padding-bottom: 17rem; */

	/* overflow: hidden; */

	/* @media screen and (min-width: 60rem) {
		padding: 3rem 2rem;
		padding-right: 21rem;
		width: 90%;
	} */
	/* @media screen and (min-width: 70rem) {
		padding-right: 17rem;
	} */

	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
`;

const AboutInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 6rem;
  width: 70%;
	@media screen and (min-width: 60rem) {
    width: 100%;
		padding: 0;
	}

	/* border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
`;

const AboutCV = styled.div`
	/* max-width: fit-content; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-right: auto;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
`;

const AboutTitle = styled(motion.h3)`
	width: 100%;
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const AboutDescription = styled(motion.p)`
	font-size: 1em;
	width: 100%;
	max-width: 60ch;
`;

const CircularImageContainer = styled.div`
	display: none;

	width: 10rem;
	height: 10rem;
	position: absolute;
	top: -5rem;
	left: 50%;
	transform: translateX(-50%);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	filter: grayscale(30%);
	backdrop-filter: blur(1rem);
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const AboutImageContainer = styled.div`
	width: 10rem;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0)); */
	/* background-color: red; */
	&::before {
		content: '';
		position: absolute;
		inset: -20%;

		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
		border-radius: 50%;
		z-index: -1;

		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	}
	border-radius: 50%;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
`;

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	/* backdrop-filter: blur(1rem); */
	/* backdrop-filter: blur(1rem); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
	/* background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)); */
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
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
			{/* <AboutTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}> */}
			{/* Sobre mí */}
			{/* </AboutTitle> */}
			<AboutWrapper variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}>
				{/* <CircularImageContainer>
					<Image src='src/assets/images/photo.webp' alt='Circular' />
				</CircularImageContainer> */}
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
				<AboutCV>
					<AboutImageContainer>
						<HeroImage
							src='src/assets/images/photo.webp'
							variants={image}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
						/>
					</AboutImageContainer>
				</AboutCV>
			</AboutWrapper>
		</AboutContainer>
	);
};
