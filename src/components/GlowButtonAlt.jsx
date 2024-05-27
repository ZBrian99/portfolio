import styled from '@emotion/styled';

const ButtonStyled = styled.button`
	text-decoration: none;
	border: none;
	outline: none;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
	border-radius: 2rem;
	color: #fff;
	text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
	padding: 0.75rem 1.5rem;
	background-color: rgba(255, 255, 255, 0.05);

	font-size: 1em;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	transition: border 0.1s ease, transform 0.1s ease background-color 0.1s ease;
	position: relative;

	@media screen and (min-width: 40rem) {
		padding: 1rem 2rem;
	}

	&:before {
		transition: border 0.1s ease, transform 0.1s ease background-color 0.1s ease;
		content: '';
		z-index: -1;
		inset: 0;
		position: absolute;
		border-radius: 2rem;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const GlowButtonAlt = ({ children }) => {
	return <ButtonStyled>{children}</ButtonStyled>;
};
