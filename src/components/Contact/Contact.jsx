import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

const ContactContainer = styled(motion.section)`
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

const ContactWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;

	@media (min-width: 45rem) {
		align-items: stretch;

		padding: 0 1rem;
		gap: 3rem;

		flex-direction: row;
		justify-content: space-between;
		justify-content: space-evenly;
	}
	@media (min-width: 50rem) {
		padding: 0rem;
	}
`;

const ContactTitle = styled.h3`
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
		<ContactContainer variants={contactVariant} initial='hidden' whileInView='show' viewport={{ once: true }}>
			<ContactTitle>Contáctame</ContactTitle>
			<ContactWrapper>
				<ContactInfo />
				<ContactForm />
			</ContactWrapper>
		</ContactContainer>
	);
};
