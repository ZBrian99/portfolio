import styled from '@emotion/styled';

const HeroImageContainer = styled.div`
	/* background-color: #993e9976; */
	/* width: 100%; */
	margin: 3rem;
	/* max-width: 15rem; */
	max-width: 25vh;
	/* width: 30svh; */
	aspect-ratio: 1 / 1;
	@media screen and (min-width: 50rem) {
		max-width: 25%;
	}
	/* width: 55%; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
	/* overflow: hidden; */
	&::before {
		content: '';
		position: absolute;
		inset: -20%;

		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
		border-radius: 50%;
		z-index: -1;

		/* background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)); */
		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	}
`;

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	/* backdrop-filter: blur(1rem); */
	/* backdrop-filter: blur(1rem); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
	/* background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)); */
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	z-index: -1;
`;

const HeroIcon = styled.img`
	width: 20%;
	height: 20%;
	max-width: 15rem;
	max-height: 15rem;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);

	transform: translate(-50%, -50%);
	border-radius: 50%;
	backdrop-filter: blur(1rem);
	padding: 0.5rem;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
	transition: transform 0.1s ease;

	position: absolute;
	/* &:hover { */
	/* transform: translate(-50%, -50%) scale(1.05); */
	/* cursor: pointer; */
	/* } */
	/* &:active { */
	/* transform: translate(-50%, -50%) scale(0.95); */
	/* } */
	&:nth-of-type(1) {
		transform: translate(-50%, -50%) scale(0.85);

		top: 92.5%;
		left: 25%;
	}
	&:nth-of-type(2) {
		top: 100%;

		left: 50%;
	}
	&:nth-of-type(3) {
		transform: translate(-50%, -50%) scale(0.85);

		top: 92.5%;
		left: 75%;
	}
`;

const AboutImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* object-position: center; */
	/* object-position: top; */
	border-radius: 50%;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	z-index: -1;
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
		/* top: 100%; */
	}
	&:nth-of-type(2) {
		top: 100%;

		left: 50%;
	}
	&:nth-of-type(3) {
		top: 87.5%;
		/* top: 100%; */

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
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'src/assets/icons/linkedin-icon.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon rounded src={'src/assets/icons/ig.svg'} alt='linkedin' />
				{/* <PhotoIcon src={'src/assets/icons/wpp.svg'} alt='linkedin' /> */}
			</PhotoLink>
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'src/assets/icons/github-icon.svg'} alt='linkedin' />
			</PhotoLink>
			{/* <AboutImage src='src/assets/images/photo.webp' alt='photo' /> */}
			{/* <AboutImage src='src/assets/images/ai (2).jpg' alt='photo' /> */}
			{/* <AboutImage src='src/assets/images/finalr2.png' alt='photo' /> */}
			{/* <AboutImage src='src/assets/images/finalr_1.png' alt='photo' /> */}
			{/* <AboutImage src='src/assets/images/finalr_2.png' alt='photo' /> */}
			{/* <AboutImage src='src/assets/images/fr1.jpg' alt='photo' /> */}
			<AboutImage src='src/assets/images/rf2.png' alt='photo' />

			{/* <AboutImage src='src/assets/images/ffrrh.png' alt='photo' /> */}
		</HeroImageContainer>
	);
};
