import styled from '@emotion/styled';

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100lvh;
  overflow: hidden;
  z-index: -1;
`;

const Bubble = styled.div`
	position: absolute;
	border-radius: 50%;
	filter: blur(7rem);
	opacity: 0.5;
	/* animation: float linear infinite; */
	pointer-events: none;

	&:nth-of-type(1) {
		width: 40vw;
		height: 40vw;
		background: #a935bb;
		top: 15%;
		left: 10%;
		/* animation-duration: 10s; */
	}

	&:nth-of-type(2) {
		width: 35vw;
		height: 35vw;
		background: #7928ca;
		top: 40%;
		left: 50%;
		/* animation-duration: 20s; */
	}

	&:nth-of-type(3) {
		width: 25vw;
		height: 25vw;
		background: #94105d;
		top: 10%;
		right: 10%;
		/* animation-duration: 25s; */
	}
  @media screen and (max-width: 120rem) {
    /* filter: blur(5rem); */
  }
	@media (max-width: 48rem) {
		/* filter: blur(1rem); */
		/* opacity: 0.2; */
		/* filter: blur(5rem); */
		&:nth-of-type(1) {
			width: 50svw;
			height: 50svw;
			top: 20%;
			left: 5%;
		}

		&:nth-of-type(2) {
			width: 60svw;
			height: 60svw;
			top: 45%;
			left: 40%;
		}

		&:nth-of-type(3) {
			width: 30svw;
			height: 30svw;
			top: 10%;
			right: 10%;
		}
	}
	@media (max-width: 30rem) {
		/* filter: blur(1rem); */
		/* opacity: 0.2; */

		&:nth-of-type(1) {
			width: 40svh;
			height: 40svh;
			top: 20%;
			left: 0%;
		}

		&:nth-of-type(2) {
			width: 50svh;
			height: 50svh;
			top: 50%;
			left: 30%;
		}

		&:nth-of-type(3) {
			width: 30svh;
			height: 30svh;
			top: 5%;
			right: 0%;
		}
	}

	/* @keyframes float {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		33% {
			transform: translate(2vw, 2vw) rotate(120deg);
		}
		66% {
			transform: translate(-2vw, 1vw) rotate(240deg);
		}
		100% {
			transform: translate(0, 0) rotate(360deg);
		}
	} */
`;

export const Background = () => {
  return (
    <BackgroundWrapper>
      <Bubble />
      <Bubble />
      <Bubble />
    </BackgroundWrapper>
  );
};

