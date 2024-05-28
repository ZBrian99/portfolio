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
					width: 0.5rem;
					height: 0.5rem;
				}

				&::-webkit-scrollbar-track {
					background: #0e0e0e;
					border-radius: 0.25rem;
				}

				&::-webkit-scrollbar-thumb {
					background-color: #333;
					border-radius: 0.25rem;
					border: 0.1rem solid #0e0e0e;
				}
				&::-webkit-scrollbar-thumb:hover {
					background-color: #444;
					border-color: #000;
				}
				&::-webkit-scrollbar-button {
					display: none;
				}
				scroll-behavior: smooth;
			}

			body {
				font-family: 'Bricolage Grotesque', sans-serif;

				scroll-behavior: smooth;
				background-color: #111;
				font-size: 100%;
				min-height: 100vh;
				color: white;
			}
		`}
	/>
);
