import React from 'react';
import styled from '@emotion/styled';

const StyledLink = styled.a`
	width: 3em;
	height: 3em;
	border-radius: 50%;
	padding: 0.5em;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 0.1s ease;
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
	&:active {
		transform: scale(0.95);
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
  /* border-radius: 50%; */
`;

export const HeroSocialButton = ({ src, name, url }) => {
	return (
		<StyledLink href={url} target='_blank' rel='noopener noreferrer'>
			<Image src={src} alt={name} />
		</StyledLink>
	);
};
