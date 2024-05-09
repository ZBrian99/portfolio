import styled from '@emotion/styled';
import { animate, delay, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NavbarContainer = styled(motion.nav)`
	width: 100%;
	height: 4rem;
	padding: 0 2rem;
	background-color: #111;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

const NavBrand = styled(motion.a)`
	font-size: 1.5rem;
	color: #fff;
`;

const NavMenu = styled(motion.div)`
	display: flex;
	width: auto;
	height: 100%;
	gap: 1rem;
	@media screen and (max-width: 60rem) {
		flex-direction: column;
		position: absolute;
		top: 4rem;
		width: 80%;
		padding: 3rem;
		height: 100lvh;
		background-color: #111;
	}
`;
const NavLink = styled(motion.a)`
	overflow: hidden;
	border: 2px solid transparent;
	width: 6rem;
	height: 100%;
	border-bottom-right-radius: 1rem;
	color: #ccc;
	@media screen and (max-width: 60rem) {
		background-color: #222;
		width: 100%;
		height: min-content;
	}
`;

const NavItem = styled(motion.div)`
	font-size: 1.2rem;
	color: inherit;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const MenuToggle = styled(motion.div)`
	display: none;
	@media screen and (max-width: 60rem) {
		display: block;
		font-size: 1.5rem;
		color: #fff;
		cursor: pointer;
	}
`;

const mobileVariant = {
	open: {
		x: '20%',
		transition: {
			duration: 0.5,
		},
	},
	closed: {
		x: '120%',
		transition: {
			duration: 0.5,
		},
	},
};

const desktopVariant = {
	open: {
		x: ['110%', '0%'],
		transition: {
			duration: 1,
			type: 'spring',
		},
	},
};

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 960);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const variant = isMobile ? mobileVariant : desktopVariant;

	return (
		<NavbarContainer initial={{ y: -100 }} animate={{ y: 0 }} transition={{ ease: 'easeOut', duration: 0.5 }}>
			<NavBrand>Portfolio</NavBrand>

			{isMobile && <MenuToggle onClick={toggleMenu}>{isOpen ? 'X' : '☰'}</MenuToggle>}

			<NavMenu animate={isMobile ? (isOpen ? 'open' : 'closed') : 'open'} variants={variant}>
				<NavLink
					whileHover={{
						borderRight: '2px solid #eee',
						borderBottom: '2px solid #eee',

						color: '#fff',
						cursor: 'pointer',
						paddingLeft: '.5rem',
					}}
					transition={{ ease: 'easeOut', duration: 0.2 }}
				>
					<NavItem>Home</NavItem>
				</NavLink>
				<NavLink
					whileHover={{
						borderRight: '2px solid #eee',
						borderBottom: '2px solid #eee',

						color: '#fff',
						cursor: 'pointer',
						paddingLeft: '.5rem',
					}}
					transition={{ ease: 'easeOut', duration: 0.2 }}
				>
					<NavItem>About</NavItem>
				</NavLink>
				<NavLink
					whileHover={{
						borderRight: '2px solid #eee',
						borderBottom: '2px solid #eee',

						color: '#fff',
						cursor: 'pointer',
						paddingLeft: '.5rem',
					}}
					transition={{ ease: 'easeOut', duration: 0.2 }}
				>
					<NavItem>Projects</NavItem>
				</NavLink>
				<NavLink
					whileHover={{
						borderRight: '2px solid #eee',
						borderBottom: '2px solid #eee',

						color: '#fff',
						cursor: 'pointer',
						paddingLeft: '.5rem',
					}}
					transition={{ ease: 'easeOut', duration: 0.2 }}
				>
					<NavItem>Contact</NavItem>
				</NavLink>
			</NavMenu>
		</NavbarContainer>
	);
};
