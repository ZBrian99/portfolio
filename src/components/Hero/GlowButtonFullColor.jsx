import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const glowing = keyframes`
  to {
    background-position: 400% center;
  }
`;

const rotating = keyframes`
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 360deg;
  }
`;

const gradientColors = `
  #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c
`;

const ButtonStyled = styled.button`
	@property --angle {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}

	border: none;
	outline: none;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
	position: relative;
	border-radius: 2rem;
	color: #fff;
	text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
	padding: 1rem 2rem;
	font-size: 1em;
	background-image: linear-gradient(60deg, ${gradientColors});
	background-size: 400%;

	font-weight: bold;
	transition: transform 0.1s ease;
	animation: ${glowing} 10s linear infinite;
	animation-play-state: paused;

	&:before {
		content: '';
		position: absolute;
		inset: -1px;
		background-image: linear-gradient(60deg, ${gradientColors});
		background-size: 400%;

		border-radius: 2rem;
		filter: blur(1rem);
		/* opacity: 0; */
		transition: opacity 0.3s ease;
		animation: ${glowing} 10s linear infinite;
		animation-play-state: paused;
	}

	&:after {
		content: attr(data-content);
		display: flex;
    justify-content: center;
    align-items: center;
		position: absolute;
		inset: 0;
		border-radius: 2rem;
		background-size: 400%;
		/* background-image: linear-gradient(60deg, ${gradientColors}); */
		/* backdrop-filter: brightness(0%); */
		/* transition: color 0.3s ease, -webkit-text-fill-color 0.3s ease; */
		/* animation: ${glowing} 10s linear infinite; */
		/* animation-play-state: paused; */
	}

	&:hover {
		animation-play-state: running;
	}

	&:hover:before {
		opacity: 1;
		animation-play-state: running;
	}

	&:hover:after {
		animation-play-state: running;
	}

	&:active {
		&:before {
			opacity: 0;
		}

		transform: scale(0.95);
	}
`;

export const GlowButtonFullColor = ({ children, ...props }) => {
	return (
		<ButtonStyled data-content={children} {...props}>
			{children}
		</ButtonStyled>
	);
};
