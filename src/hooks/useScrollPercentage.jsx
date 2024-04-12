import { useEffect, useRef, useState } from 'react';

const useScrollPercentage = (threshold = .5) => {
	const scrollableElementRef = useRef(null);
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const element = scrollableElementRef.current;
			if (element && isVisible) {
				const scrollTop = element.scrollTop;
				const scrollHeight = element.scrollHeight - element.clientHeight;
				const percentage = (scrollTop / scrollHeight) * 100;
				setScrollPercentage(percentage);
        console.log(percentage);
      }
		};

		const scrollableElement = scrollableElementRef.current;
		if (scrollableElement) {
			const observer = new IntersectionObserver(
				([entry]) => {
					setIsVisible(entry.intersectionRatio >= threshold);
				},
				{ root: null, rootMargin: '0px', threshold }
			);
			observer.observe(scrollableElement);

			scrollableElement.addEventListener('scroll', handleScroll);

			return () => {
				observer.unobserve(scrollableElement);
				scrollableElement.removeEventListener('scroll', handleScroll);
			};
		}
	}, [isVisible, threshold]);

	return { scrollableElementRef, scrollPercentage, isVisible };
};

export default useScrollPercentage;
