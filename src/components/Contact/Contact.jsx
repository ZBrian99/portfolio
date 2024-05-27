import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FormTest } from './FormTest';

const FormContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 3rem;
	position: relative;
	@media screen and (min-width: 30rem) {
		padding: 0 2rem;
	}
`;

const FormTitle = styled.h3`
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const contactVariant = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

export const Contact = () => {
	return (
		<FormContainer variants={contactVariant} initial='hidden' whileInView='show' viewport={{ once: true }}>
			<FormTitle>Contáctame</FormTitle>
			<FormTest />
		</FormContainer>
	);
};
