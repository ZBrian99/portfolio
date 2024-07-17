import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const NavbarToggle = styled.div`
	position: fixed;
	top: 1rem;
	right: 1rem;
	width: 4rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1d0722;
	border-radius: 50%;
	user-select: none;
	cursor: pointer;
	z-index: 101;
	font-size: 2em;
`;

const NavbarContainer = styled.div`
	position: fixed;
	top: 0rem;
	right: 0rem;
	width: 100%;
	aspect-ratio: 1 / 1;

	max-width: 32rem;
	max-height: 32rem;
	border-bottom-left-radius: 100%;

	overflow: hidden;
	visibility: visible;

	transition: visibility 0.2s ease-out;

	transition-delay: ${({ isActive }) => (isActive ? '0s' : '0.2s')};
	visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
	z-index: 100;
`;

const NavbarCircle = styled.div`
	position: absolute;
	background-color: #1d0722;
	right: 0;
	top: 0;
	width: 200%;
	aspect-ratio: 1 / 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	transition: clip-path 0.2s ease-out;
	padding-right: 100%;
	padding-top: 100%;
	transform: translate(50%, -50%);
	transition-delay: ${({ isActive }) => (isActive ? '0s' : '0.2s')};
	clip-path: ${({ isActive }) => (isActive ? ' circle(50% at 50% 50%)' : 'circle(0% at 50% 50%)')};
`;
const NavbarMenu = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 1.2em;

	transition: transform 0.2s ease-out, opacity 0.2s ease-out;

	transition-delay: ${({ isActive }) => (isActive ? '0.2s' : '0')};

	opacity: ${({ isActive }) => (isActive ? '1' : '0')};
	transform: ${({ isActive }) =>
		isActive ? 'translate(25%, -15%) scale(1)' : 'translate(25%, -15%) scale(0)'};

	@media screen and (min-width: 30rem) {
		font-size: 1.5em;
	}
	@media screen and (min-width: 50rem) {
		font-size: 2em;
	}
`;
const NavbarItem = styled.a`
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	text-decoration: none;
	color: #ccc;
	transition: color 0.2s ease-out;

	&:hover {
		color: #fff;
	}
`;

export const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const navbarRef = useRef();

	const handleClick = () => {
		setIsActive(!isActive);
	};

	const handleClickOutside = (event) => {
		if (navbarRef.current && !navbarRef.current.contains(event.target)) {
			setIsActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	return (
		<div ref={navbarRef}>
			<NavbarToggle onClick={handleClick}>{isActive ? 'X' : '☰'}</NavbarToggle>
			<NavbarContainer isActive={isActive}>
				<NavbarCircle isActive={isActive}>
					<NavbarMenu isActive={isActive}>
						<NavbarItem href='#home' onClick={() => setIsActive(false)}>
							Inicio
						</NavbarItem>
						<NavbarItem href='#services' onClick={() => setIsActive(false)}>
							Soluciones
						</NavbarItem>
						<NavbarItem href='#projects' onClick={() => setIsActive(false)}>
							Proyectos
						</NavbarItem>
						<NavbarItem href='#about' onClick={() => setIsActive(false)}>
							Sobre Mi
						</NavbarItem>
						<NavbarItem href='#contact' onClick={() => setIsActive(false)}>
							Contacto
						</NavbarItem>
					</NavbarMenu>
				</NavbarCircle>
			</NavbarContainer>
		</div>
	);
};
