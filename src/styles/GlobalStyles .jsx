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
				background-color: #0a0a0a;
				font-size: 100%;
				/* background-color: #221830; */
				 /* background: #443193; */
				/* background-image: radial-gradient(at 86% 83%, hsl(360, 26%, 53%) 0px, transparent 50%),
					radial-gradient(at 73% 62%, hsl(307, 56%, 59%) 0px, transparent 50%),
					radial-gradient(at 45% 25%, hsl(193, 23%, 22%) 0px, transparent 50%),
					radial-gradient(at 5% 68%, hsl(234, 47%, 49%) 0px, transparent 50%),
					radial-gradient(at 33% 73%, hsl(99, 98%, 46%) 0px, transparent 50%);  */
				/* padding: 100rem 0; */
				min-height: 500vh;
				/* background-image: url('src/assets/images/background.png'); */
				/* background-repeat: no-repeat; */
				/* background-position: center; */
				/* background-attachment: fixed; */
				/* background-repeat: no-repeat; */
				/* background: url('src/assets/images/background.png') fixed; */

				font-family: var(--font-body);
				/* color: var(--color-secondary); */
				color: white;
			}
		`}
	/>
);
