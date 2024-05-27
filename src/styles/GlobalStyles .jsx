import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

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
				font-family: 'Bricolage Grotesque', 'Verdana', sans-serif;

				scroll-behavior: smooth;
				background-color: #111;
				font-size: 100%;
				min-height: 100vh;
				color: white;
			}
		`}
	/>
);
