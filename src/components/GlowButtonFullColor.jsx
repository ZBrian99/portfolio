import styled from '@emotion/styled';

const ButtonStyled = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
	position: relative;
	border-radius: 2rem;
	color: #fff;
	text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
	padding: 0.75rem 1.5rem;
	font-size: 1em;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	font-weight: bold;
	transition: transform 0.2s ease;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	@media screen and (min-width: 30rem) {
		padding: 1rem 2rem;
	}
	&:before {
		content: '';
		position: absolute;
		inset: -0.1rem;
		background-image: linear-gradient(60deg, #ff00ea, #ffd000);
		border-radius: 2rem;
		filter: blur(0.5rem);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	&:hover:before {
		opacity: 1;
	}

	&:active {
		&:before {
			opacity: 0;
		}

		transform: scale(0.95);
	}
`;

export const GlowButtonFullColor = ({ children }) => {
	return <ButtonStyled>{children}</ButtonStyled>;
};
