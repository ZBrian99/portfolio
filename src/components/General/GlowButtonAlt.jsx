import styled from '@emotion/styled';

const ButtonStyled = styled.a`
	text-decoration: none;
	border: none;
	outline: none;

	cursor: pointer;
	border-radius: 2rem;
	color: #fff;
	${({ fit }) => (fit ? 'width: fit-content;' : 'flex: 1;')}
	height: fit-content;
	white-space: nowrap;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.7);
	padding: 0.75rem 1.5rem;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

	font-weight: normal;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	transition: border 0.1s ease, transform 0.1s ease, background-color 0.1s ease-in-out;
	position: relative;
	border: 1px solid rgba(255, 255, 255, 0.05);
	@media screen and (min-width: 30rem) {
		/* padding: 1rem 2rem; */
		${({ stretch }) => (stretch ? 'padding: 0.75rem 1.5rem;' : 'padding: 1rem 2rem;')}
	}
	&:before {
		transition: border 0.1s ease, transform 0.1s ease, background-color 0.1s ease-in-out;
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

export const GlowButtonAlt = ({ children, ...props }) => {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
