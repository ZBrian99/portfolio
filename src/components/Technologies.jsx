import { motion } from 'framer-motion';
import { useState } from 'react';

export const Technologies = () => {
	const [distance, setDistance] = useState([5, 10, 15]);
	return (
		<div className='Tech'>
			<div className='Tech-panel Panel'>
				<h4 className='Panel-title'>Technologies</h4>
				<ul className='Panel-list'>
					<li className='Panel-item'>Loremipsum</li>
					<li className='Panel-item'>Loremipsum</li>
					<li className='Panel-item'>Loremipsum</li>
					<li className='Panel-item'>Loremipsum</li>
					<li className='Panel-item'>Loremipsum</li>
				</ul>
			</div>
			<div className='Tech-system System'>
				<motion.div
					className='System-sun'
					animate={{ rotate: -360 }}
					transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
				>
					<img src='/portfolio/assets/react.svg' alt='react' className='System-sunImage' />
				</motion.div>
				<motion.div
					className='System-planet'
					initial={{
						scale: 0.5,
						x: `${distance[0]}rem`,
						y: `${distance[0]}rem`,
						originX: `-${distance[0]}rem`,
						originY: `-${distance[0]}rem`,
					}}
					animate={{ x: `${distance[0]}rem`, y: `${distance[0]}rem`, rotate: -360 }}
					transition={{ duration: `${distance[0]}`, repeat: Infinity, ease: 'linear' }}
				>
					<motion.img
						src='/portfolio/assets/sass.svg'
						alt='react'
						className='System-sunImage'
						animate={{ rotate: 360 }}
						transition={{ duration: `${distance[0]}`, repeat: Infinity, ease: 'linear' }}
					/>
				</motion.div>
				<motion.div
					className='System-planet'
					initial={{
						scale: 0.5,
						x: `${distance[1]}rem`,
						y: `${distance[1]}rem`,
						originX: `-${distance[1]}rem`,
						originY: `-${distance[1]}rem`,
					}}
					animate={{ x: `${distance[1]}rem`, y: `${distance[1]}rem`, rotate: -360 }}
					transition={{ duration: `${distance[1]}`, repeat: Infinity, ease: 'linear' }}
				>
					<motion.img
						src='/portfolio/assets/redux.svg'
						alt='react'
						className='System-sunImage'
						animate={{ rotate: 360 }}
						transition={{ duration: `${distance[1]}`, repeat: Infinity, ease: 'linear' }}
					/>
				</motion.div>
				<motion.div
					className='System-planet'
					initial={{
						scale: 0.5,
						x: `${distance[2]}rem`,
						y: `${distance[2]}rem`,
						originX: `-${distance[2]}rem`,
						originY: `-${distance[2]}rem`,
					}}
					animate={{ x: `${distance[2]}rem`, y: `${distance[2]}rem`, rotate: -360 }}
					transition={{ duration: `${distance[2]}`, repeat: Infinity, ease: 'linear' }}
				>
					<motion.img
						src='/portfolio/assets/github.svg'
						alt='react'
						className='System-sunImage'
						animate={{ rotate: 360 }}
						transition={{ duration: `${distance[2]}`, repeat: Infinity, ease: 'linear' }}
					/>
				</motion.div>
			</div>
		</div>
	);
};
