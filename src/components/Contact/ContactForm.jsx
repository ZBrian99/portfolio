import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 50rem;
	height: 100%;
	margin: auto;
	@media screen and (min-width: 60rem) {
		justify-content: center;
	}
`;

const FormTitle = styled.h2`
	font-size: 2em;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 3rem;
`;

const FormInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 0.1rem solid #808080;
	padding: 2rem 0;
	color: white;
	&::placeholder {
		color: #c9c9c9;
	}

	&:focus,
	&:hover {
		outline: none;
		border-bottom: 0.1rem solid #cccccc;
	}
`;

const FormTextArea = styled.textarea`
	font-family: var(--font-body);
	background-color: transparent;
	border: none;
	margin: 2rem 0;

	color: white;

	resize: none;
	max-height: 10rem;
	overflow-y: auto;

	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	&::placeholder {
		color: #c9c9c9;
	}

	&:focus,
	&:hover {
		outline: none;

		& ~ .textAreaLine {
			border-bottom: 0.1rem solid #cccccc;
		}
	}
`;

const TextAreaLine = styled.div`
	width: 100%;
	border-bottom: 0.1rem solid #808080;

	background-color: #808080;
`;

const FormSubmit = styled(motion.input)`
	width: min-content;
	margin-top: 2rem;
	padding: 1rem 2rem;
	background: transparent;
	border: 1px solid #808080;
	color: #c9c9c9;

	&:hover {
		border: 1px solid #cccccc;
		color: white;
		cursor: pointer;
	}
`;

const validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const updateTextareaHeight = (ref) => {
	const textarea = ref.current;
	textarea.style.height = 'auto';
	textarea.style.height = `${textarea.scrollHeight}px`;
};

const handleInputChange = (event, setter) => {
	setter(event.target.value);
};
const ErrorMessage = styled.div`
	color: red;
	font-size: 0.8rem;
	margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
	color: green;
	font-size: 0.8rem;
	margin-top: 1rem;
`;

export const ContactForm = () => {
	const textareaRef = useRef(null);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			updateTextareaHeight(textareaRef);
		};

		updateTextareaHeight(textareaRef);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [message]);

	const handleSubmit = (event) => {
		event.preventDefault();

		let errors = {};

		if (!name) {
			errors.name = '*El nombre es requerido';
		}

		if (!email) {
			errors.email = '*El correo electrónico es requerido';
		} else if (!validateEmail(email)) {
			errors.email = '*El correo electrónico no es válido';
		}

		if (!message) {
			errors.message = '*El mensaje es requerido';
		}

		if (Object.keys(errors).length > 0) {
			setErrors(errors);
			setFormSubmitted(false);
		} else {
			// Enviar los datos del formulario a un servidor
			// Resetear el formulario
			setName('');
			setEmail('');
			setMessage('');
			setErrors({});
			setFormSubmitted(true);
		}
	};

	return (
		<FormContainer>
			<FormTitle>Contactame</FormTitle>
			<Form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					placeholder='Nombre'
					value={name}
					onChange={(e) => handleInputChange(e, setName)}
				/>
				{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
				<FormInput
					type='text'
					placeholder='Mail'
					value={email}
					onChange={(e) => handleInputChange(e, setEmail)}
				/>
				{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
				<FormTextArea
					ref={textareaRef}
					placeholder='Mensaje'
					value={message}
					onChange={(e) => handleInputChange(e, setMessage)}
					rows={1}
				/>
				<TextAreaLine className='textAreaLine' />
				{errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
				<FormSubmit type='submit' value='Enviar' />
				{formSubmitted && <SuccessMessage>Mensaje enviado con éxito</SuccessMessage>}
			</Form>
		</FormContainer>
	);
};
