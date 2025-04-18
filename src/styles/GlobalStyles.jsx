import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
			@font-face {
				font-family: 'Bricolage Grotesque';
				src: url('/fonts/BricolageGrotesque-Bold.woff2') format('woff2'),
					url('/fonts/BricolageGrotesque-Bold.woff') format('woff');
				font-weight: bold;
				font-style: normal;
				font-display: swap;
			}

			@font-face {
				font-family: 'Bricolage Grotesque';
				src: url('/fonts/BricolageGrotesque-Regular.woff2') format('woff2'),
					url('/fonts/BricolageGrotesque-Regular.woff') format('woff');
				font-weight: normal;
				font-style: normal;
				font-display: swap;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
				padding: 0;
				margin: 0;
			}

			html {
				&::-webkit-scrollbar {
					width: 0.25rem;
					height: 0.25rem;
				}

				&::-webkit-scrollbar-track {
					background: #2c0b33;
					background: #0e0e0e;
					background: #0f0a1f;

					border-radius: 0.25rem;
				}

				&::-webkit-scrollbar-thumb {
					background-color: #333;
					border-radius: 0.25rem;
					/* border: 0.1rem solid #0e0e0e; */
				}
				&::-webkit-scrollbar-thumb:hover {
					background-color: #444;
				}
				&::-webkit-scrollbar-button {
					display: none;
				}
				scroll-behavior: smooth;
				background: #2c0b33;
				background: #1a0620;
				isolation: isolate;
			}

			body {
				font-family: 'Bricolage Grotesque', sans-serif;
				scroll-behavior: smooth;
				min-height: 100svh;
				color: white;
				font-size: 100%;
				position: relative;
			}
		`}
	/>
);
