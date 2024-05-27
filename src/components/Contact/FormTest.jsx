import styled from '@emotion/styled';

const Container = styled.div`
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

const ContactInfo = styled.div`
	display: flex;
	align-items: flex-start;
	flex: 1;
	gap: 2rem;
	flex-wrap: nowrap;

	padding: 0 2rem;
	flex-wrap: wrap;
	max-width: 40rem;
	@media (min-width: 30rem) {
		padding: 0rem;
		gap: 2rem;
	}
`;

const ContactItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	flex: 1;
	@media (min-width: 50rem) {
		flex-basis: 100%;
		flex-direction: column;
	}
`;

const ContactSocialContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	@media (min-width: 30rem) {
		flex-direction: column;
	}
	@media (min-width: 45rem) {
		flex-direction: row;
		margin-top: auto;
	}
`;

const ContactItem = styled.div`
	display: flex;
	flex-basis: 100%;
	border-radius: 1rem;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	padding: 1rem;
	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
	font-size: 1.5em;
	width: 3rem;
	display: flex;
	align-items: center;
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
	font-size: 0.9rem;
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

	@media (min-width: 30rem) {
		background-color: transparent;
		padding: 0rem;
		flex: 1.5;
	}
	@media (min-width: 60rem) {
		max-width: 40rem;
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

const Input = styled.input`
	width: 100%;
	outline: none;
	border-radius: 0.5rem;
	padding: 1rem;
	border: none;

	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);

	font-size: 1em;
	color: white;

	&::placeholder {
		color: #c9c9c9;
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
	border: none;

	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);

	&::placeholder {
		color: #c9c9c9;
	}
`;

const Button = styled.input`
	color: #fff;
	font-size: 1em;
	outline: none;
	border: none;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	}
`;

const PhotoLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	backdrop-filter: blur(1rem);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	transition: transform 0.1s ease;

	&:hover {
		transform: scale(1.05);

		cursor: pointer;
	}

	&:active {
		transform: scale(0.95);
	}
`;
const PhotoIcon = styled.img`
	width: 70%;
	height: 70%;

	${({ rounded }) => rounded && `border-radius: 50%;`}
	${({ fit }) => fit && `object-fit: cover;`}
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
					<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
						<PhotoIcon src={'src/assets/icons/linkedin-icon.svg'} alt='linkedin' />
					</PhotoLink>
					<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
						<PhotoIcon src={'src/assets/icons/github-icon.svg'} alt='linkedin' />
					</PhotoLink>
					<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
						<PhotoIcon rounded src={'src/assets/icons/ig.svg'} alt='linkedin' />
					</PhotoLink>
					<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
						<PhotoIcon src={'src/assets/icons/wpp.svg'} alt='linkedin' />
					</PhotoLink>
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
