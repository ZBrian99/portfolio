import { Global, css } from '@emotion/react';
import theme from './theme';

const GlobalStyles = () => (
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
				background-color: #000;
				font-size: 100%;
				padding: 100rem 0;
				height: 500vh;
				background-image: url('src/assets/images/background.png');
				background-attachment: fixed;
				background-repeat: repeat;
				/* background-size: cover; */
				font-family: var(--font-body);
				color: var(--color-secondary);
			}
		`}
	/>
);

export default GlobalStyles;
