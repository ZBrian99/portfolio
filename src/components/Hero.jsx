import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export const Hero = () => {
	return (
		<div className='Hero'>
			<span className='Hero-span'>Hi, I'm</span>
			<h1 className='Hero-h1'>
				<span className='Hero-color'>Brian</span> Zelada
			</h1>
			<h2 className='Hero-h2'>
				<span className='Hero-color'>Front-end Web Developer</span> specializing in
				<span className='Hero-color'> React</span>
			</h2>
			<div className='Hero-socialList'>
				<a href='#' className='Hero-socialLink'>
					<FontAwesomeIcon icon={faGithub} className='Hero-socialIcon' />
				</a>
				<a href='#' title='' className='Hero-socialLink'>
					<FontAwesomeIcon icon={faLinkedin} className='Hero-socialIcon' />
				</a>
			</div>
		</div>
	);
};
