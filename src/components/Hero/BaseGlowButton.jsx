import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const glowing = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 400% 0; }
`;

const ButtonStyled = styled.button`
	width: ${({ width }) => width || '13.75rem'}; // 220px
	height: ${({ height }) => height || '3.125rem'}; // 50px
	border: none;
	outline: none;
	color: ${({ color }) => color || '#fff'};
	background: ${({ background }) => background || '#111'};
	cursor: pointer;
	position: relative;
	border-radius: ${({ borderRadius }) => borderRadius || '0.625rem'}; // 10px
	/* transition: transform 0.3s ease-in-out; */

	border: 1px solid rgba(255, 255, 255, 0.1);
	/* background: ${({ background }) => background || '#111'}; */
	/* background-color: rgba(255, 255, 255, 0.1); */
	/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
	/* backdrop-filter: blur(1rem); */
	background: ${({ background }) => background || '#111'};

	z-index: 10;
	&:before {
		transition: opacity 0.2s ease-out;

		content: '';
		z-index: -1;
		background: ${({ glowColors }) =>
			glowColors ||
			'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)'};
		position: absolute;
		inset: -1px;
		background-size: 400%;
		animation: ${glowing} 20s linear infinite;
		opacity: 0;
		border-radius: ${({ borderRadius }) => borderRadius || '0.625rem'};

		/* filter: blur(0.5rem); */
	}
	&:active {
		&:after {
			opacity: 0;
		}
		border: 1px solid transparent;
	}

	&:hover {
		border: 1px solid transparent;

		/* transform: scale(1.05); */
	}
	&:hover:before {
		opacity: 1;
	}
	&:hover:after {
	}
	&:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		border-radius: ${({ borderRadius }) => borderRadius || '0.625rem'};

		/* background-color: rgba(255, 255, 255, 0.1); */

		/* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */

		background-color: rgba(255, 255, 255, 0.1);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(3rem) brightness(10%);
		backdrop-filter: brightness(0%);
		background: ${({ background }) => background || '#111'};
	}
`;

export const BaseGlowButton = ({
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
