import styled from '@emotion/styled';

const ContactInfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex: 1;
	gap: 2rem;

	padding: 0 2rem;
	flex-wrap: wrap;
	max-width: 40rem;
	@media (min-width: 30rem) {
		padding: 0rem;
		gap: 2rem;
	}
`;

const ContactItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	flex: 1;
	@media (min-width: 50rem) {
		flex-basis: 100%;
		flex-direction: column;
	}
`;

const ContactSocialContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	@media (min-width: 30rem) {
		flex-direction: column;
	}
	@media (min-width: 45rem) {
		flex-direction: row;
		margin-top: auto;
	}
`;

const ContactItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	flex-basis: 100%;
	border-radius: 1rem;
	background-color: rgba(255, 255, 255, 0.05);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.05);

	padding: 1rem;
	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
	@media screen and (min-width: 20rem) {
		text-align: left;
		flex-direction: row;
		gap: 1rem;
	}
`;

const Icon = styled.div`
	font-size: 1.5em;
	width: 2rem;
	display: flex;
	align-items: center;
  justify-content: center;
`;

const ContactItemInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 1.1em;
`;

const Text = styled.div`
	font-size: 0.9em;
	color: #afafb6;
	white-space: nowrap;
`;

const PhotoLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	transition: transform 0.1s ease-in-out;

	&:hover {
		transform: scale(1.05);

		cursor: pointer;
	}

	&:active {
		transform: scale(0.95);
	}
`;
const PhotoIcon = styled.img`
	width: 70%;
	height: 70%;

	${({ rounded }) => rounded && `border-radius: 50%;`}
	${({ fit }) => fit && `object-fit: cover;`}
`;

export const ContactInfo = () => {
	return (
		<ContactInfoContainer>
			<ContactItemsContainer>
				<ContactItem>
					<Icon>✉️</Icon>
					<ContactItemInfo>
						<Title>Correo electrónico</Title>
						<Text>brian.zelada99@gmail.com</Text>
					</ContactItemInfo>
				</ContactItem>
				<ContactItem>
					<Icon>📱</Icon>
					<ContactItemInfo>
						<Title>Teléfono</Title>
						<Text>+54 9 223 669-8045</Text>
					</ContactItemInfo>
				</ContactItem>


				<ContactItem>
					<Icon>🌎</Icon>
					<ContactItemInfo>
						<Title>Ubicación</Title>
						<Text>Argentina - Buenos Aires</Text>
					</ContactItemInfo>
				</ContactItem>
			</ContactItemsContainer>

			<ContactSocialContainer>
				<PhotoLink href={'https://github.com/ZBrian99'} target='_blank' rel='noopener noreferrer'>
					<PhotoIcon src={'/icons/github-icon.svg'} alt='github' />
				</PhotoLink>
				<PhotoLink
					href={'https://www.linkedin.com/in/brianzelada/'}
					target='_blank'
					rel='noopener noreferrer'
				>
					<PhotoIcon src={'/icons/linkedin-icon.svg'} alt='linkedin' />
				</PhotoLink>
				<PhotoLink href={'https://x.com/ZBrian99'} target='_blank' rel='noopener noreferrer'>
					<PhotoIcon rounded src={'/icons/x.svg'} alt='x' />
				</PhotoLink>

				<PhotoLink href='https://wa.me/+5492236698045' target='_blank' rel='noopener noreferrer'>
					<PhotoIcon src={'/icons/wpp.svg'} alt='WhatsApp' />
				</PhotoLink>
			</ContactSocialContainer>
		</ContactInfoContainer>
	);
};
