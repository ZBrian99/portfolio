import styled from '@emotion/styled';
import { ContactForm } from './ContactForm';
import { ContactMeteor } from './ContactMeteor';

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100svh;
	background-image: url('src/assets/images/background.png');
	padding: 10svh 5vw;
	/* @media screen and (min-width: 60rem) {
    flex-direction: row;
	} */
`;

export const Contact = () => {
	return (
		<>
			{/* <ContactContainer> */}
				{/* <ContactMeteor /> */}
				<ContactForm />
			{/* </ContactContainer> */}
		</>
	);
};
