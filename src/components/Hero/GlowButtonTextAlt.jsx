import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const glowing = keyframes`
  /* 0% { background-position: 0 0; } */
  /* 100% { background-position: 400% 0; } */
    to {
      background-position: 200% center;
    }
`;

const ButtonStyled = styled.button`
	width: fit-content;
	padding: 1rem 2rem;
	border: none;
	outline: none;
	color: ${({ color }) => color || '#fff'};

	background: ${({ background }) => background || '#111'};
	cursor: pointer;
	position: relative;
	border-radius: 2rem;
	/* transition: transform 0.3s ease-in-out; */
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	/* border: 1px solid transparent; */
	/* background: ${({ background }) => background || '#111'}; */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	/* backdrop-filter: blur(1rem); */
	/* background: ${({ background }) => background || '#111'}; */
	/* background: ${({ glowColors }) => glowColors || 'linear-gradient(45deg,#ffd000, #ff00ea, #ffd000)'}; */
	/* background: linear-gradient(60deg, #ffd000, #ff00ea, #ffd000); */
	background: linear-gradient(60deg, #ffd000 20%, #ff00ea 40%, #ff00ea 60%, #ffd000 80%);

	background-size: 200%;

	z-index: 10;
	/* transition: opacity 1.2s ease-out; */

	&:before {
		/* transition: opacity 0.3s ease-out; */
		/* animation: ${glowing} 10s linear infinite; */
		/* animation: ${glowing} 5s linear infinite; */

		content: '';
		z-index: -2;
		/* background: linear-gradient(60deg, #ffd000, #ff00ea, #ffd000); */
		background: linear-gradient(60deg, #ffd000 20%, #ff00ea 40%, #ff00ea 60%, #ffd000 80%);

		position: absolute;
		inset: -1px;
		background-size: 200%;

		/* opacity: 0; */
		border-radius: 2rem;
	}
	&:active {
		&:after {
			opacity: 0;
		}
		/* border: 1px solid transparent; */
	}

	&:hover {
		border: 1px solid transparent;

		/* transform: scale(1.05); */
	}
	&:hover:before {
		opacity: 1;
		animation: ${glowing} 5s linear infinite;
		filter: blur(0.5rem);
	}
	&:hover:after {
		animation: ${glowing} 5s linear infinite;
		opacity: 1;
	}
	&:after {
		z-index: 1;
		content: 'GlowButton';
		position: absolute;
		/* width: 100%; */
		/* height: 100%; */
		/* left: 0; */
		/* top: 0; */
		display: flex;
		justify-content: center;
		align-items: center;
		inset: 0;
		border-radius: 2rem;

		/* background-color: rgba(255, 255, 255, 0.1); */

		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
		/* opacity: 0; */
		/* background-size: 400%; */
		/* animation: ${glowing} 5s linear infinite; */

		/* background-color: rgba(255, 255, 255, 0.1); */
		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
		/* backdrop-filter: blur(3rem) brightness(10%); */
		backdrop-filter: brightness(0%);
		/* background: ${({ background }) => background || 'rgb(17, 17, 17)'}; */

		/* background-image: linear-gradient(60deg, #ffd000, #ff00ea); */

		/* background: linear-gradient(60deg, #ffd000, #ff00ea, #ffd000); */

		background: linear-gradient(60deg, #ffd000 20%, #ff00ea 40%, #ff00ea 60%, #ffd000 80%);

		background-size: 200%;

		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}
`;

export const GlowButtonTextAlt = ({
	children,
	width,
	height,
	color,
	background,
	borderRadius,
	glowColors,
	...props
}) => {
	return (
		<ButtonStyled
			width={width}
			height={height}
			color={color}
			background={background}
			borderRadius={borderRadius}
			glowColors={glowColors}
			{...props}
		>
			{children || 'GlowButton'}
		</ButtonStyled>
	);
};
