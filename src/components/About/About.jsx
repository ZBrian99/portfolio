import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// const AboutContainer = styled(motion.section)`
// 	/* background-color: #000; */
// 	border-radius: 1rem;
// 	padding: 2.5rem 1rem;
// 	padding-top: 7.5rem;
// 	color: white;
// 	display: flex;
// 	flex-wrap: wrap;
// 	/* justify-content: center; */
// 	gap: 1rem;
// 	width: 100%;
// 	max-width: 80rem;
// 	margin: auto;
// `;

const AboutCard = styled.div`
	/* padding: 2rem; */
	/* border-radius: 1rem; */
	display: flex;
	gap: 1rem;
	width: 100%;
`;

const AboutInfo = styled.div`
	display: flex;
	/* flex-direction: column; */
	flex-wrap: wrap;
	position: relative;
	gap: 1rem;
	/* border-radius: 1rem; */
	/* padding: 2rem 1rem; */
	/* padding-top: 6rem; */
	/* order: 1; */
	/* flex: 3; */
	/* @media screen and (min-width: 60rem) {
		padding: 2rem;
	}  */
	/* background: radial-gradient(at right bottom, #111, #333); */

	/* background: #c33764; */
	/* background: linear-gradient(to left top, #1d2671, #c33764); */
	/* border: 0.2rem solid #c33764; */
	/* background: #ff00cc;
	background: linear-gradient(to right, #333399, #ff00cc); */

	////////////////////////////
	////////////////////////////
	////////////////////////////

	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)); */

	////////////////////////////
	////////////////////////////
	////////////////////////////
	/* &::before {
		content: '';
		position: absolute;
		top: ${({ y }) => y}px;
		left: ${({ x }) => x}px;
		background: radial-gradient(#fff, transparent, transparent);
		background: radial-gradient(#5bcefa, transparent, transparent);
		width: 40rem;
		height: 40rem;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: 0.5s, top 0s, left 0s;
	}
	&:hover::before {
		opacity: 1;
	}

	 &::after {
		content: '';
		position: absolute;
		inset: 0.2rem;
		border-radius: 1rem;
		background-color: rgba(50, 50, 50, 1.5);
		background: radial-gradient(at right bottom, #000, #222);
		backdrop-filter: blur(16px) saturate(180%);
		background-color: #111;
		background: linear-gradient(135deg, rgba(17, 25, 40, 1.55), rgba(17, 25, 40, 1.75));
	}  */
`;

const AboutContainer = styled.div`
	width: 100%;
	width: 100%;
	display: flex;
	/* flex-direction: column; */
	flex-wrap: wrap;
	gap: 1rem;
	/* overflow: hidden; */

	border-radius: 1rem;
	padding: 3rem 1rem;
	position: relative;
	padding-top: 6rem;
	@media screen and (min-width: 60rem) {
		padding: 3rem;
		padding-right: 18rem;
	}
	@media screen and (min-width: 70rem) {
		padding: 3rem;
		padding-right: 15rem;
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

const AboutImage = styled.img`
	width: auto;
	height: 100%;

	object-fit: cover;
	object-position: center;

	z-index: 15;

	width: 10rem;
	height: 10rem;
	position: absolute;
	top: 0%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.15);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	backdrop-filter: blur(1rem);

	@media screen and (min-width: 60rem) {
		top: 100%;
		left: 100%;
		transform: translate(-100%, -100%);
		width: auto;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 0;
		opacity: 0.5;
		backdrop-filter: none;
		filter: grayscale(50%);
	}
`;

const AboutDescription = styled.p`
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
		<AboutContainer>
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
			<AboutImage src='src/assets/images/photo2.png' />
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
