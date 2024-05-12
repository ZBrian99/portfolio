import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => (
	<Global
		styles={css`
			:root {
				--color-primary: ${theme.colors.primary};
				--color-secondary: ${theme.colors.secondary};
				--font-body: ${theme.fonts.body};
				--font-heading: ${theme.fonts.heading};
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
				padding: 0;
				margin: 0;
			}

			body {
				scroll-behavior: smooth;
				background-color: #000;
				font-size: 100%;

				/* padding: 100rem 0; */
				/* min-height: 100vh; */
				/* background-image: url('src/assets/images/background.png'); */
				/* background-repeat: no-repeat; */
				/* background-position: center; */
				/* background-attachment: fixed; */
				/* background-repeat: no-repeat; */
				background: url('src/assets/images/background.png') fixed;

				font-family: var(--font-body);
				color: var(--color-secondary);
			}
		`}
	/>
);
