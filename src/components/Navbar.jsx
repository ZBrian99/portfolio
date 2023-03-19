export const Navbar = () => {
	return (
		<header className='Header'>
				<a href='#' title='logo' className='Header-brand'>
					<img src='/portfolio/logo.svg' alt='logo' className='Header-logo' />
				</a>
			<nav className='Header-navbar'>
				<ul className='Header-list'>
					<li className='Header-listItem'>
						<a href='#about' title='about' className='Header-listLink'>
							About
						</a>
					</li>
					<li className='Header-listItem'>
						<a href='#skills' title='skills' className='Header-listLink'>
							Skills
						</a>
					</li>
					<li className='Header-listItem'>
						<a href='#projects' title='projects' className='Header-listLink'>
							Projects
						</a>
					</li>
					<li className='Header-listItem'>
						<a href='#contact' title='contact' className='Header-listLink'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
