import styled from '@emotion/styled';

const HeroImageContainer = styled.div`
	margin: 3rem;
	width: 25vh;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;

	@media screen and (min-width: 50rem) {
		flex: 0.3;
	}

	&::before {
		content: '';
		position: absolute;
		inset: -20%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
		border-radius: 50%;
		z-index: -1;
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	}
`;

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* object-position: center; */
	/* object-position: top; */
	border-radius: 50%;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const PhotoLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 15rem;
	max-height: 15rem;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	transform: translate(-50%, -50%);
	border-radius: 50%;
	backdrop-filter: blur(1rem);
	width: 25%;
	height: 25%;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	transition: transform 0.1s ease;
	position: absolute;

	&:hover {
		transform: translate(-50%, -50%) scale(1.05);
		cursor: pointer;
	}

	&:active {
		transform: translate(-50%, -50%) scale(0.95);
	}

	&:nth-of-type(1) {
		top: 87.5%;
		left: 20%;
	}
	&:nth-of-type(2) {
		top: 100%;

		left: 50%;
	}
	&:nth-of-type(3) {
		top: 87.5%;
		left: 80%;
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
				<PhotoIcon src={'/icons/github-icon.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'https://www.linkedin.com/in/brianzelada/'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'/icons/linkedin-icon.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'https://www.instagram.com/zbrian99/'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon rounded src={'/icons/ig.svg'} alt='linkedin' />
			</PhotoLink>
			<HeroImage src='/images/rf2low.webp' alt='photo' />
		</HeroImageContainer>
	);
};
