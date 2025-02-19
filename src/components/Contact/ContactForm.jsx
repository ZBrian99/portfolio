import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

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
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;
	position: relative;
`;

const InputBase = styled.input`
	width: 100%;
	padding: 1rem;
	border-radius: 0.8rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.05);
	color: white;
	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
	}

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	padding: 1rem;
	border-radius: 0.8rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.05);
	color: white;
	font-size: 1rem;
	transition: all 0.2s ease;
	height: 12rem;
	resize: none;
	min-height: 8rem;
	font-family: inherit;
	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
	&:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
	}

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	border-radius: 0.8rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.05);
	color: white;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.2s ease;
	align-self: flex-start;

	&:hover {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

const Message = styled.div`
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 1rem 2rem;
	border-radius: 0.8rem;
	background: ${({ error }) =>
		error
			? 'linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.1))'
			: 'linear-gradient(135deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0.1))'};
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: white;
	animation: slideUp 0.3s ease;

	@keyframes slideUp {
		from {
			transform: translate(-50%, 100%);
			opacity: 0;
		}
		to {
			transform: translate(-50%, 0);
			opacity: 1;
		}
	}
`;

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		mensaje: '',
	});

	const [status, setStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://formspree.io/f/xdoqvrkj', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus('success');
				setFormData({ nombre: '', correo: '', mensaje: '' });
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		}
	};
	useEffect(() => {
		if (status) {
			const timer = setTimeout(() => {
				setStatus(null);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [status]);
	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<InputBase
					type='text'
					name='nombre'
					placeholder='Nombre'
					value={formData.nombre}
					onChange={handleChange}
					required
				/>
				<InputBase
					type='email'
					name='correo'
					placeholder='Correo electrónico'
					value={formData.correo}
					onChange={handleChange}
					required
				/>
				<Textarea
          name='mensaje'
					placeholder='Mensaje'
					value={formData.mensaje}
					onChange={handleChange}
					required
				/>
				<Button type='submit'>Enviar</Button>
				{status === 'success' && <Message>¡Mensaje enviado con éxito!</Message>}
				{status === 'error' && <Message error>Hubo un error al enviar el mensaje.</Message>}
			</Form>
		</FormContainer>
	);
};
