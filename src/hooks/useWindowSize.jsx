import { useState, useEffect } from 'react';

export const useWindowSize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 959);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 959);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

