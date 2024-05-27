import styled from '@emotion/styled';

const FooterContainer = styled.footer`
	background-color: rgba(14, 14, 14, 0.7);
	color: #ccc;
	margin-top: 10rem;
`;

const Copyright = styled.p`
	padding: 2rem 1rem;
	text-align: center;
	font-size: 1em;

	@media screen and (min-width: 50rem) {
		font-size: 1.2em;
		padding: 3rem 1rem;
	}
`;

export const Footer = () => {
	return (
		<FooterContainer>
			<Copyright>© 2024 Diseñado y Desarrollado por Brian Zelada.</Copyright>
		</FooterContainer>
	);
};
