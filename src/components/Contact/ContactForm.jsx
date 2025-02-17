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
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	position: relative;
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
	border: 1px solid rgba(255, 255, 255, 0.05);

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
	border: 1px solid rgba(255, 255, 255, 0.05);

	&::placeholder {
		color: #c9c9c9;
	}
`;

const Button = styled.button`
	color: #fff;
	font-size: 1em;
	outline: none;
	border: none;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.05);

	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
	}
`;

const Message = styled.div`
	${({ error }) => (error ? 'color:#ff0000;' : 'color: #ffffff;')}
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	padding: 1rem;
	border-radius: 1rem;
	position: absolute;
	bottom: -1rem;
	transform: translateY(100%);
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
				<Input
					type='text'
					name='nombre'
					placeholder='Nombre'
					value={formData.nombre}
					onChange={handleChange}
					required
				/>
				<Input
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
