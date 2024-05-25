import React from 'react';
import styled from '@emotion/styled';

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
`;

const ContactText = styled.span`
	font-size: 1em;
	color: #fff;

	&:hover {
		color: #0073b1;
	}
`;

const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text).then(
		() => {
			alert(`${text} copiado al portapapeles!`);
		},
		() => {
			alert('Error al copiar al portapapeles.');
		}
	);
};

export const ContactInfo = () => {
	return (
		<ContactContainer>
			<ContactItem onClick={() => copyToClipboard('123-456-7890')}>
				📞
				<ContactText>123-456-7890</ContactText>
			</ContactItem>
			<ContactItem onClick={() => copyToClipboard('Calle Falsa 123, Springfield')}>
				📍
				<ContactText>Argentina - Buenos Aires</ContactText>
			</ContactItem>
			<ContactItem onClick={() => copyToClipboard('email@ejemplo.com')}>
				📧
				<ContactText>email@ejemplo.com</ContactText>
			</ContactItem>
		</ContactContainer>
	);
};
