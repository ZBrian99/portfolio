import styled from "@emotion/styled";

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

export const ContactForm = () => {
	return (
		<FormContainer>
			<Form action='#'>
				<Input type='text' placeholder='Nombre' required />
				<Input type='email' placeholder='Correo electrónico' required />
				<Textarea placeholder='Mensaje' required></Textarea>
				<Button type='submit' value='Enviar' />
			</Form>
		</FormContainer>
	);
};
