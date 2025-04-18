import styled from '@emotion/styled';

const fadeInLeft = `
	@keyframes fadeInLeft {
		from {
			transform:  scale(0);
		}
		to {
			transform:  scale(1);
		}
	}
`;

const HeroImageContainer = styled.div`
	${fadeInLeft}
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
	margin: 2.5rem;
	order: -1;
	width: 100%;
	max-width: 12rem;
	animation: fadeInLeft 1s cubic-bezier(0.22, 1, 0.36, 1) backwards;
	animation-delay: 0s;

	&::before {
		content: '';
		position: absolute;
		inset: -20%;
		background-color: rgba(255, 255, 255, 0.05);

		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.05));
		border: 1px solid rgba(255, 255, 255, 0.05);

		border-radius: 50%;
		z-index: -1;
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	}

	@media screen and (min-width: 50rem) {
		max-width: 100%;
		order: 1;
		flex: 0.35;
		animation-duration: 0.6s;
		animation-delay: 0.6s;
	}
`;

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const PhotoLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	backdrop-filter: blur(1rem);
	width: 30%;
	height: 30%;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	transform: translate(-50%, -50%);
	transition: all 0.2s ease-in-out;
	position: absolute;
	z-index: 10;

	&:hover {
		transform: translate(-50%, calc(-50% - 0.25rem)) scale(1.05);
		cursor: pointer;
	}

	&:active {
		transform: translate(-50%, -50%) scale(0.95);
	}

	&:nth-of-type(1) {
		top: 82.5%;
		left: 15%;
	}
	&:nth-of-type(2) {
		top: 100%;
		left: 50%;
	}
	&:nth-of-type(3) {
		top: 82.5%;
		left: 85%;
	}
`;
const PhotoIcon = styled.img`
	width: 70%;
	height: 70%;

	${({ rounded }) => rounded && `border-radius: 50%;`}
	${({ fit }) => fit && `object-fit: cover;`}
`;

export const HeroPhoto = () => {
	return (
		<HeroImageContainer>
			<PhotoLink href={'https://github.com/ZBrian99'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'/icons/github-icon.svg'} alt='github' />
			</PhotoLink>
			<PhotoLink href={'https://www.linkedin.com/in/brianzelada/'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'/icons/linkedin-icon.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'https://www.linkedin.com/in/brianzelada/'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon rounded src={'/icons/x.svg'} alt='x' />
			</PhotoLink>
			<HeroImage src='/images/rf2low.webp' alt='photo' />
		</HeroImageContainer>
	);
};
