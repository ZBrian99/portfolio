import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
	padding: 1rem;
	font-size: 0.9em;
	border: 2px solid #eee;
	background-color: #000;
	color: #fff;
  text-align: left;
`;

export const HeroButton = ({ children, ...rest }) => {
	return (
		<StyledButton
			// whileHover={{ cursor: 'pointer', boxShadow: '0 0 .5rem  #fff' }}
			// whileTap={{ scale: 0.95 }}

			whileHover={{
				borderBottomRightRadius: '1rem',
        boxShadow: '0 0 .5rem #fff',
				cursor: 'pointer',
			}}
			transition={{ duration: 0.1 }}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};
