import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.section)`
	width: 100%;
	max-width: 68rem;
	margin: 0 auto;
	display: flex;
	/* flex-direction: column; */
	flex-wrap: wrap;
	gap: 1rem;
	/* overflow: hidden; */

	border-radius: 1rem;
	padding: 3rem 2rem;
	position: relative;
	padding-top: 6rem;
	@media screen and (min-width: 60rem) {
		padding: 3rem 2rem;
		padding-right: 21rem;
		overflow: hidden;
		width: 90%;
	}
	@media screen and (min-width: 70rem) {
		padding-right: 17rem;
	}

	border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
`;

const AboutTitle = styled.h3`
	z-index: 5;
	font-size: 2em;
	/* text-align: center; */
	width: 100%;
	margin-bottom: 0.5rem;
`;

const AboutImageContainer = styled.div`
	width: 10rem;
	height: 10rem;
	position: absolute;
	top: 0%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.15);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	backdrop-filter: blur(1rem);
	overflow: hidden;

	@media screen and (min-width: 60rem) {
		top: 100%;
		left: 100%;
		transform: translate(-100%, -100%);
		width: auto;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 0;
		backdrop-filter: none;
	}
`;

const AboutImage = styled.img`
	width: auto;
	height: 100%;
	@media screen and (min-width: 60rem) {
		filter: grayscale(30%);
		opacity: 0.9;
	}
	object-fit: cover;
	object-position: center;
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

const handleMouseMove = (e, cardRef, setHoverEffect) => {
	const rect = cardRef.current.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	setHoverEffect({ x, y });
};
const container = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
		},
	},
};

export const About = () => {
	// const [hoverEffect, setHoverEffect] = useState({ x: 0, y: 0 });
	// const cardRef = useRef(null);

	// useEffect(() => {
	// 	const handleMouseMoveBound = (e) => handleMouseMove(e, cardRef, setHoverEffect);
	// 	cardRef.current.addEventListener('mousemove', handleMouseMoveBound);
	// 	return () => {
	// 		cardRef.current.removeEventListener('mousemove', handleMouseMoveBound);
	// 	};
	// }, []);
	return (
		<AboutContainer variants={container} initial='hidden' whileInView='show' viewport={{ once: true }}>
			{/* <AboutCard> */}
			{/* <AboutInfo ref={cardRef} x={hoverEffect.x} y={hoverEffect.y}> */}
			{/* <AboutTitle>Sobre mí</AboutTitle> */}
			<AboutDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat veritatis natus, eum facere sit
				numquam perspiciatis, exercitationem maiores voluptatum ut distinctio quo et minus fugiat fugit dicta
				sunt quaerat.
			</AboutDescription>
			<AboutDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis dignissimos cumque
				voluptates qui eius possimus animi. Soluta, odio quibusdam molestias ducimus labore aperiam alias
				nisi, neque error, fugiat cumque.
			</AboutDescription>
			<AboutDescription>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iure aliquid dignissimos, quod
				asperiores perspiciatis itaque officiis animi ut saepe ab fuga odio, consectetur, impedit beatae?
				Molestias ipsum consequatur nihil.
			</AboutDescription>
			{/* <ContactButton>
					<ButtonImage src='src/assets/icons/react.svg' alt='Contacto' />
					Contacto
				</ContactButton> */}
			<AboutImageContainer>
				<AboutImage src='src/assets/images/photo2.png' />
			</AboutImageContainer>
			{/* <ContactButton>
						<ButtonImage src='src/assets/icons/react.svg' alt='Currículum' />
						Currículum
					</ContactButton> */}
			{/* </AboutInfo> */}
			{/* </AboutCard> */}

			{/* <ContactContainer> */}

			{/* </ContactContainer> */}
		</AboutContainer>
	);
};
