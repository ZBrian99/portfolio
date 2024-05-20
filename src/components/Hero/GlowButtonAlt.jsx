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
  padding: 0.75rem 1.5rem;
	@media screen and (min-width: 60rem) {
    padding: 1rem 2rem;
	}
	font-size: 1em;
	background-color: transparent;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
	transition: border 0.1s ease, transform 0.1s ease;
	position: relative;
	&:before {
		transition: border 0.1s ease, transform 0.1s ease;
		content: '';
		z-index: -1;
		inset: 0;
		position: absolute;
		border-radius: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	&:hover:before {
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const GlowButtonAlt = ({ children, ...props }) => {
	return (
		<>
			<ButtonStyled {...props}>{children}</ButtonStyled>
		</>
	);
};
