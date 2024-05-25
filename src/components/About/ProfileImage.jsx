import styled from '@emotion/styled';

const AboutImageContainer = styled.div`
	width: 100%;
	max-width: 12rem;
	aspect-ratio: 1 / 1;
	/* margin: 3rem 0; */
	user-select: none;
	/* margin: 0 auto; */
	top: 0%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	&::before {
		content: '';
		position: absolute;
		inset: -3rem;
		/* inset: -20%; */

		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
		border-radius: 50%;
		z-index: -1;
		backdrop-filter: blur(1rem);

		box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
	}
	@media screen and (min-width: 60rem) {
		/* display: none; */
		max-width: 15rem;

		position: relative;
		transform: none;
		top: 0;
		left: 0;
		margin: 0 3rem;
	}
`;

const AboutImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
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
	padding: 0.5rem;
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
		top: 90%;
		left: 20%;
	}
	&:nth-of-type(2) {
		top: 100%;

		left: 50%;
	}
	&:nth-of-type(3) {
		top: 90%;
		left: 80%;
	}
`;
const PhotoIcon = styled.img`
	width: 100%;
	height: 100%;
	${({ rounded }) => rounded && `border-radius: 50%;`}
	${({ fit }) => fit && `object-fit: cover;`}
`;

export const ProfileImage = () => {
	return (
		<AboutImageContainer>
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'src/assets/icons/linkedin-icon.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon rounded src={'src/assets/icons/ig.svg'} alt='linkedin' />
				<PhotoIcon src={'src/assets/icons/wpp.svg'} alt='linkedin' />
			</PhotoLink>
			<PhotoLink href={'#'} target='_blank' rel='noopener noreferrer'>
				<PhotoIcon src={'src/assets/icons/github-icon.svg'} alt='linkedin' />
			</PhotoLink>
			{/* <AboutImage src='src/assets/images/ai (1).jpg' alt='photo' /> */}
			{/* <img
					 src='src/assets/images/ai (5).png' 
					 src='src/assets/images/final.png'
					 src='src/assets/images/ai (3).png'
				 	alt=''
				 	style={{
				 		width: '100%',
				 		height: '100%',
				 		objectFit: 'cover',
				 	}}
         /> */}

			<AboutImage src='src/assets/images/finalr2.png' alt='photo' />
			{/* <AboutImage src='src/assets/images/photo.webp' alt='photo' /> */}
		</AboutImageContainer>
	);
};
