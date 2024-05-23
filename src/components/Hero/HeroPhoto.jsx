import styled from '@emotion/styled';

const HeroDecoration = styled.div`
	/* display: none; */
	width: 40%;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
  @media screen and (max-width: 60rem) {
    display: none;
  }
	
`;
const HeroImageContainer = styled.div`
	width: 55%;
	height: 55%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
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
export const HeroPhoto = () => {
	return (
		<HeroDecoration>
			<HeroImageContainer>
				<HeroIcon src='src/assets/icons/astro.svg' alt='react' />
				<HeroIcon src='src/assets/icons/react.svg' alt='react' />
				<HeroIcon src='src/assets/icons/nextjs.svg' alt='react' />
				{/* <HeroIcon src='src/assets/icons/github-icon.svg' alt='react' /> */}
				{/* <HeroIcon src='src/assets/icons/cv_8.svg' alt='react' /> */}
				{/* <HeroIcon src='src/assets/icons/linkedin-icon.svg' alt='react' /> */}
				<HeroImage src='src/assets/images/photo.webp' alt='react' />
			</HeroImageContainer>
		</HeroDecoration>
	);
};
