import styled from '@emotion/styled';
import { HeroSocialButton } from '../Hero/HeroSocialButton';

/* box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.2); */

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* justify-content: space-evenly; */
	/* align-items: center; */
	gap: 3rem;

	/* @media screen and (min-width: 30rem) {
    padding: 2rem;
	} */
	align-items: center;
	/* background-color: rgba(255, 255, 255, 0.05); */
	@media (min-width: 30rem) {
		border-radius: 1rem;

		/* padding: 1rem; */
	}
	@media (min-width: 45rem) {
		/* background-color: rgba(255, 255, 255, 0.05); */
		/* padding: 3rem; */
		align-items: stretch;
		/* border: 1px solid rgba(255, 255, 255, 0.1); */
		/* @media screen and (min-width: 30rem) {
		padding: 2rem;
	} */
		padding: 0 1rem;

		/* gap: 3rem; */

		flex-direction: row;
		justify-content: space-between;
		justify-content: space-evenly;
	}
	@media (min-width: 50rem) {
		padding: 0rem;
	}
	@media (min-width: 60rem) {
		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	}
`;

const ContactInfo = styled.div`
	display: flex;
	align-items: flex-start;
	/* flex: 0.7; */
	/* gap: 3rem; */
	flex: 1;
	gap: 2rem;
	flex-wrap: nowrap;

	padding: 0 2rem;
	border-radius: 1rem;
	max-width: 40rem;
	@media (min-width: 30rem) {
		/* background-color: transparent; */
		/* background-color: rgba(255, 255, 255, 0.05); */

		padding: 0rem;
		gap: 2rem;

		/* padding: 3rem; */
	}
	@media (min-width: 45rem) {
		flex-wrap: wrap;
	}
	@media (min-width: 60rem) {
		/* padding: 3rem; */
		/* background-color: rgba(255, 255, 255, 0.05); */
	}
  /* background-color: rgba(255, 255, 255, 0.05); */
`;

const ContactItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* flex-direction: column; */
	gap: 1rem;
	/* width: 100%; */
	flex: 1;
	/* width: 100%; */
	/* background-color: #fff; */
	@media (min-width: 50rem) {
		/* flex-direction: column; */
		flex-basis: 100%;
    /* max-width: 20rem; */
		flex-direction: column;
	}
`;

const ContactSocialContainer = styled.div`
	/* background-color: rgba(255, 255, 255, 0.05); */
	border-radius: 1rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	/* width: 100%; */
	@media (min-width: 45rem) {
		flex-direction: row;
		margin-top: auto;
	}
`;

const ContactItem = styled.div`
	/* text-align: center; */
	display: flex;
	flex: 1;

	/* flex-direction: column; */
	/* align-items: center; */
	/* justify-content: center; */
	border-radius: 1rem;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 1rem;
	/* flex-shrink: 0; */
	/* background-color: purple; */
	@media (min-width: 45rem) {
		/* background-color: transparent; */
    /* width: 100%; */
    /* flex: 1; */
	}
`;

const Icon = styled.div`
	font-size: 1.5em;
	width: 3rem;

	display: flex;
	/* justify-content: center; */
	align-items: center;
	/* background-color: purple; */
`;

const ContactItemInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 1.1em;
	font-weight: 500;
`;

const Text = styled.div`
	font-size: 0.875rem;
	color: #afafb6;
	white-space: nowrap;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
	padding: 0 2rem;

	border-radius: 1rem;
	@media (min-width: 30rem) {
    background-color: transparent;
		/* background-color: rgba(255, 255, 255, 0.05); */
		padding: 0rem;
		/* padding: 3rem; */
	}
	@media (min-width: 60rem) {
    max-width: 40rem;
		/* padding: 3rem; */

		/* background-color: rgba(255, 255, 255, 0.05); */
	}
`;

const FromTitle = styled.h4`
	font-size: 2em;
	font-weight: 600;
	color: #3e2093;
`;

const FormDescription = styled.p`
	font-size: 1em;
`;
const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	align-items: flex-start;
	gap: 1rem;
`;

const Input = styled.input`
	/* height: 4rem; */
	width: 100%;
	outline: none;
	border-radius: 0.5rem;
	padding: 1rem;
	/* border: none; */
	border: 1px solid transparent;

	background-color: rgba(255, 255, 255, 0.05);

	font-size: 1em;
	color: white;

	&::placeholder {
		color: #c9c9c9;
	}

	&:focus,
	&:hover {
		/* border: 1px solid rgba(255, 255, 255, 0.1); */
	}
`;

const Textarea = styled.textarea`
	height: 12rem;
	width: 100%;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: 0.5rem;
	padding: 1rem;
	resize: none;

	color: white;
	/* border: none; */
	border: 1px solid transparent;

	background-color: rgba(255, 255, 255, 0.05);

	&::placeholder {
		color: #c9c9c9;
	}

	&:focus,
	&:hover {
		/* border: 1px solid rgba(255, 255, 255, 0.1); */
	}
`;

const Button = styled.input`
	color: #fff;
	font-size: 1.2em;
	outline: none;
	border: none;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: background-color 0.1s ease;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const FormTest = () => {
	return (
		<Container>
			<ContactInfo>
				<ContactItemsContainer>
					<ContactItem>
						<Icon>📞</Icon>
						<ContactItemInfo>
							<Title>Teléfono</Title>
							<Text>+123 9893 5647</Text>
						</ContactItemInfo>
					</ContactItem>

					<ContactItem>
						<Icon>📍</Icon>
						<ContactItemInfo>
							<Title>Ubicación</Title>
							<Text>Argentina - Buenos Aires</Text>
						</ContactItemInfo>
					</ContactItem>

					<ContactItem>
						<Icon>📧</Icon>
						<ContactItemInfo>
							<Title>Correo electrónico</Title>
							<Text>mail@gmail.com</Text>
						</ContactItemInfo>
					</ContactItem>
				</ContactItemsContainer>

				<ContactSocialContainer>
					<HeroSocialButton
						url='https://github.com/ZBrian99'
						src='src/assets/icons/linkedin-icon.svg'
						name='linkedin'
					/>
					<HeroSocialButton
						url='https://github.com/ZBrian99'
						src='src/assets/icons/github-icon.svg'
						name='github'
					/>
				</ContactSocialContainer>
			</ContactInfo>
			<FormContainer>
				<Form action='#'>
					<Input type='text' placeholder='Nombre' />
					<Input type='email' placeholder='Correo electrónico' />
					<Textarea placeholder='Mensaje'></Textarea>
					<Button type='submit' value='Enviar' />
				</Form>
			</FormContainer>
		</Container>
	);
};
