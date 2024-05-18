import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonStyled = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
	border-radius: 2rem;
	color: #fff;
	text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
	padding: 1rem 2rem;
	font-size: 1em;
	background-color: transparent;
	border: 1px solid #fff;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
	transition: border 0.2s ease;
	position: relative;
	&:before {
		transition: clip-path 0.5s ease;
		content: '';
		z-index: -1;
		inset: 0;
		position: absolute;
		border-radius: 2rem;
		/* background-color: #111; */
		background-image: linear-gradient(60deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c);
		background-size: 400%;
		clip-path: circle(0% at 50% 50%);
	}

	&:hover {
		border: 1px solid transparent;
		&:before {
			clip-path: circle(150% at 50% 50%);
		}
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const GlowButtonAlt = ({ children, ...props }) => {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
