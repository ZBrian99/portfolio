import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
const glowing = keyframes`
  to {
    background-position: 200% center;
  }
`;

const gradientColors = `
 #ff00ea, #ffd000,#ff00ea
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
	padding: 1rem 2rem;
	font-size: 1em;
	background: transparent;

	/* background-image: linear-gradient(60deg, ${gradientColors}); */
	font-weight: bold;
	transition: transform 0.1s ease;
	animation: ${glowing} 5s linear infinite;
	/* animation-play-state: paused; */

	&:before {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: 2rem;
		background-size: 200%;
		background-color: rgba(255, 255, 255, 0.1);

		/* filter: blur(1rem); */
		transition: opacity 0.3s ease;
		/* animation: ${glowing} 5s linear infinite; */
		/* animation-play-state: paused; */
	}

	&:after {
		content: attr(data-content);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: absolute;
		inset: 1px;
		border-radius: 2rem;

		background-size: 200%;

		transition: color 0.3s ease, -webkit-text-fill-color 0.3s ease;
		animation: ${glowing} 5s linear infinite;

		backdrop-filter: brightness(0%);
		/* animation-play-state: paused; */
	}

	&:hover {
		animation-play-state: running;
	}

	&:hover:before {
		opacity: 1;
		background-image: linear-gradient(60deg, ${gradientColors});

		animation-play-state: running;
	}

	&:hover:after {
		color: transparent;
		background-clip: text;
		background-size: 200%;
		background-image: linear-gradient(60deg, ${gradientColors});
		animation-play-state: running;
	}

	&:active {
		&:before {
			opacity: 0;
		}
		transform: scale(0.95);
	}
`;

export const GlowButton = ({ children, ...props }) => {
	return (
		<ButtonStyled data-content={children} {...props}>
			{children}
		</ButtonStyled>
	);
};
