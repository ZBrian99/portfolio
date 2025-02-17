import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { GlowButtonAlt } from '../General/GlowButtonAlt';

const NavbarStyled = styled.div`
	@media screen and (min-width: 50rem) {
    background-color: rgba(26, 6, 32, 0.8);
		backdrop-filter: blur(1rem);
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    
	}
`;

const NavbarToggle = styled.div`
	position: fixed;
	top: 1rem;
	right: 1rem;
	width: 4rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.05);
	/* background-color: #1d0722; */
	background-color: #1d0722;
	/* background-color: #3d1f44; */
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
	background-color: #17061b;

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
	font-size: 1em;
  max-width: 80rem;

	transition: transform 0.2s ease-out, opacity 0.2s ease-out;

	transition-delay: ${({ isActive }) => (isActive ? '0.2s' : '0')};

	opacity: ${({ isActive }) => (isActive ? '1' : '0')};
	transform: ${({ isActive }) => (isActive ? 'translate(25%, -15%) scale(1)' : 'translate(25%, -15%) scale(0)')};

	@media screen and (min-width: 20rem) {
		font-size: 1.2em;
	}

	@media screen and (min-width: 30rem) {
		font-size: 1.5em;
	}
	@media screen and (min-width: 50rem) {
		font-size: 1em;
		position: fixed;
		/* background-color: #1d0722; */
		
		/* border: 1px solid rgba(255, 255, 255, 0.05); */
		transform: none;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		/* width: max-content; */
		height: 4rem;
		padding: 0 2rem;
		z-index: 1000;
		/* border-radius: 0 0 3rem 3rem; */
		left: 50%;
		transform: translateX(-50%);
	}
  @media screen and (min-width: 55rem) {
    font-size: 1.2em;
  }
`;
const NavbarItem = styled.a`
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	text-decoration: none;
	color: #ccc;
  white-space: nowrap;
	transition: color 0.2s ease-out;
	&:hover {
		color: #fff;
	}
	@media screen and (min-width: 50rem) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const ResumeButton = styled(NavbarItem)`
	background-color: rgba(255, 255, 255, 0.05);
	border: 0.1rem solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease-out;
	border-radius: 5rem;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const NavbarMobile = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 4rem;
	background-color: rgba(26, 6, 32, 0.8);
	backdrop-filter: blur(1rem);
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	gap: 1rem;
`;

const NavbarBrandName = styled.h1`
	font-size: 2rem;
	@media screen and (max-width: 30rem) {
		font-size: 1.5rem;
	}
	font-weight: 600;
	margin-right: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const LinkImage = styled.img`
	width: 1em;
	height: 1em;
	margin-left: 0.5rem;
`;

const HighlightText = styled.span`
	color: #ffd000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

export const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
	const navbarRef = useRef();

	const handleClick = () => {
		setIsActive(!isActive);
	};

	const handleClickOutside = (event) => {
		if (navbarRef.current && !navbarRef.current.contains(event.target)) {
			setIsActive(false);
		}
	};

	const handleResize = () => {
		setIsActive(false);
		setIsMobile(window.innerWidth < 800);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		window.addEventListener('resize', handleResize);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<NavbarStyled ref={navbarRef}>
			{isMobile ? (
				<>
					{/* <NavbarBrandName>Brian Zelada</NavbarBrandName> */}
					<NavbarToggle onClick={handleClick}>{isActive ? 'X' : '☰'}</NavbarToggle>
					<NavbarContainer isActive={isActive}>
						<NavbarCircle isActive={isActive}>
							<NavbarMenu isActive={isActive}>
								<NavbarItem href='#projects' onClick={() => setIsActive(false)}>
									Proyectos
								</NavbarItem>
								<NavbarItem href='#about' onClick={() => setIsActive(false)}>
									Sobre Mi
								</NavbarItem>
								<NavbarItem href='#contact' onClick={() => setIsActive(false)}>
									Contacto
								</NavbarItem>
								<GlowButtonAlt
                  fit
                  stretch
									href='https://drive.google.com/file/d/1hmH9OKMmaDE71r7ZDjqIMVdHdqxybyDI/view?usp=sharing'
									target='_blank'
									rel='noreferrer'
								>
									Curriculum
									<LinkImage src='/icons/external-link_5.svg' alt='Web' />
								</GlowButtonAlt>
							</NavbarMenu>
						</NavbarCircle>
					</NavbarContainer>
				</>
			) : (
				<NavbarMenu isActive={true}>
					<NavbarBrandName> <HighlightText>Brian</HighlightText> Zelada</NavbarBrandName>

					<NavbarItem href='#projects'>Proyectos</NavbarItem>
					<NavbarItem href='#about'>Sobre Mi</NavbarItem>
					<NavbarItem href='#contact'>Contacto</NavbarItem>
					<GlowButtonAlt
						fit
						stretch
						href='https://drive.google.com/file/d/1hmH9OKMmaDE71r7ZDjqIMVdHdqxybyDI/view?usp=sharing'
						target='_blank'
						rel='noreferrer'
					>
						Curriculum
						<LinkImage src='/icons/external-link_5.svg' alt='Web' />
					</GlowButtonAlt>
				</NavbarMenu>
			)}
		</NavbarStyled>
	);
};
