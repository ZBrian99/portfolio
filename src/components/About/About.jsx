import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { delay, motion, stagger } from 'framer-motion';

const AboutContainer = styled.section`
	width: 100%;
	/* max-width: 68rem; */
	max-width: 80rem;
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
	/* flex-direction: column; */
	flex-wrap: wrap;
	gap: 1rem;
	/* overflow: hidden; */

	border-radius: 1rem;
	padding: 3rem 2rem;
	position: relative;
	/* padding-top: 6rem; */
	padding-bottom: 17rem;
	overflow: hidden;

	@media screen and (min-width: 60rem) {
		padding: 3rem 2rem;
		padding-right: 21rem;
		/* width: 90%; */
	}
	@media screen and (min-width: 70rem) {
		padding-right: 17rem;
	}

	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
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
const AboutImageContainer = styled.div`
	/* width: 10rem; */
	/* height: 10rem; */
	position: absolute;
	/* top: 0%; */
	/* left: 50%; */
	/* transform: translate(-50%, -50%); */
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* border-radius: 50%; */
	/* background: rgba(255, 255, 255, 0.15); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
	/* background: linear-gradient(135deg, #4e4553, #3c353d); */
	/* backdrop-filter: blur(1rem); */
	/* overflow: hidden; */
	width: 100%;

	/* height: auto; */
	/* max-height: 23rem; */
	bottom: 0%;
	left: 100%;
	transform: translate(-100%, 0);
	background: transparent;
	border: none;
	border-radius: 0;
	backdrop-filter: none;
	/* background-color: blue; */
	@media screen and (min-width: 60rem) {
		top: 100%;
		left: 100%;
		transform: translate(-100%, -100%);
		width: min-content;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 0;
		backdrop-filter: none;
	}
`;

const AboutImage = styled(motion.img)`
	display: block;
	max-width: 100%;
	width: auto;
	height: 100%;
	margin-left: auto;
	filter: grayscale(50%);
	opacity: 0.9;
	@media screen and (min-width: 60rem) {
		max-width: none;
		height: 100%;
	}
`;

const AboutDescription = styled(motion.p)`
	z-index: 5;
	font-size: 1em;
`;

const ContactButton = styled.button`
	z-index: 5;
	border: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2rem;
	border-radius: 1rem;
	gap: 0.5rem;
	margin-top: 0.5rem;
	background-color: #222;
	background: radial-gradient(at right bottom, #111, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	&:hover {
		cursor: pointer;
		box-shadow: 0 0 0.1rem 0.1rem #5bcefa inset;
	}
`;

const ButtonImage = styled.img`
	width: 2rem;
	height: 2rem;
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
			<AboutTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}>
				Sobre mí
			</AboutTitle>
			<AboutWrapper variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}>
				<AboutImageContainer>
					<AboutImage
						src='src/assets/images/photo2.webp'
						variants={image}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					/>
				</AboutImageContainer>
				<AboutDescription>
					1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat veritatis natus, eum facere
					sit numquam perspiciatis, exercitationem maiores voluptatum ut distinctio quo et minus fugiat fugit
					dicta sunt quaerat.
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
				{/* <ContactButton>
					<ButtonImage src='src/assets/icons/react.svg' alt='Contacto' />
					Contacto
				</ContactButton> */}

				{/* <ContactButton>
						<ButtonImage src='src/assets/icons/react.svg' alt='Currículum' />
						Currículum
					</ContactButton> */}
				{/* </AboutInfo> */}
				{/* </AboutCard> */}

				{/* <ContactContainer> */}

				{/* </ContactContainer> */}
			</AboutWrapper>
		</AboutContainer>
	);
};
