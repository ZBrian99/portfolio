import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledLink = styled(motion.a)`
	text-decoration: none; 
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: #000;
  border-radius: 50%;
`;

const Image = styled.img`
	width: 3rem;
	height: 3rem;
`;

export const HeroSocialButton = ({ src, name, url }) => {
	return (
    <StyledLink 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      whileHover={{ cursor: 'pointer', scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Image src={src} alt={name} />
    </StyledLink>
	);
};
