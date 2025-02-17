import styled from '@emotion/styled';

const ButtonStyled = styled.a`
	border: none;
	outline: none;
	text-decoration: none;
	cursor: pointer;
	position: relative;
	${({ fit }) => (fit ? 'width: fit-content;' : 'flex: 1;')}
	height: fit-content;
	text-align: center;
	white-space: nowrap;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	color: #fff;
	text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.7);
	padding: 0.75rem 1.5rem;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
	font-weight: normal;

	transition: transform 0.2s ease-in-out;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	@media screen and (min-width: 30rem) {
		/* padding: 1rem 2rem; */
		${({ stretch }) => (stretch ? 'padding: 0.75rem 1.5rem;' : 'padding: 1rem 2rem;')}
	}
	&:before {
		content: '';
		position: absolute;
		inset: -0.1rem;
		background-image: linear-gradient(60deg, #ff00ea, #ffd000);
		border-radius: 2rem;
		filter: blur(0.5rem);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
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

export const GlowButtonFullColor = ({ children, ...props }) => {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
