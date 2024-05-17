import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FormContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 3rem;
	position: relative;
	padding: 2rem;
	border-radius: 1rem;
	/* border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1)); */
`;

const FormTitle = styled(motion.h3)`
	width: 100%;
	text-align: center;
	font-size: 3em;

	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const Form = styled(motion.form)`
	display: flex;
	flex-direction: column;
	padding: 1rem 2rem 3rem;
	border-radius: 1rem;
	width: 100%;
	max-width: 50rem;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.1);

	background-color: rgba(255, 255, 255, 0.1);

	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

	@media screen and (min-width: 50rem) {
		padding: 3rem 5rem 5rem;
	}
`;

const FormInput = styled(motion.input)`
	background-color: transparent;
	border: none;
	border-bottom: 0.1rem solid #808080;
	padding: 2rem 0;
	font-size: 1em;
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

const FormTextArea = styled(motion.textarea)`
	font-family: var(--font-body);
	width: 100%;
	background-color: transparent;
	border: none;
	padding: 2rem 0;
	font-size: 1em;
	color: white;
	border-bottom: 0.1rem solid #808080;

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
		border-bottom: 0.1rem solid #cccccc;
	}
`;

const FormSubmit = styled(motion.input)`
	width: min-content;
	margin-top: 2rem;
	padding: 1rem 2rem;
	background: transparent;
	color: #c9c9c9;
	border: 1px solid rgba(255, 255, 255, 0.5);
	&:hover {
		border: 1px solid white;
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

const title = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
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
			<FormTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}>
				Contactame
			</FormTitle>
			<Form
				variants={wrapper}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				onSubmit={handleSubmit}
			>
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
				{errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
				<FormSubmit type='submit' value='Enviar' />
				{formSubmitted && <SuccessMessage>Mensaje enviado con éxito</SuccessMessage>}
			</Form>
		</FormContainer>
	);
};
