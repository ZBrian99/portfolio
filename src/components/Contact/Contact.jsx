import styled from '@emotion/styled';
import { ContactForm } from './ContactForm';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';
import { FormTest } from './FormTest';

const FormContainer = styled.section`
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
	border-radius: 1rem;
	/* background-color: #f5f5dc42; */
	/* border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
`;

const FormTitle = styled(motion.h3)`
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const FromWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

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

const wrapper = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		// scale: .5,

		y: 100,
	},
	show: {
		opacity: 1,
		// scale: 1,
		y: 0,

		transition: {
			duration: 1,
		},
	},
};

export const Contact = () => {
	return (
		<FormContainer>
      <FormTitle
        // variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}
      >
				Contáctame
			</FormTitle>
			<FormTest />
			{/* <FromWrapper>
					<ContactInfo />
					<ContactForm />
				</FromWrapper> */}
		</FormContainer>
	);
};
