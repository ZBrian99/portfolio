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
				background-color: #333;
				font-size: 100%;
				min-height: 100vh;
			}
		`}
	/>
);

export default GlobalStyles;
