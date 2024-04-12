import { useEffect } from 'react';
import useScrollPercentage from '../hooks/useScrollPercentage';

export const Test = () => {
	const { scrollableElementRef, scrollPercentage, isVisible } = useScrollPercentage();
	useEffect(() => {
		console.log(scrollPercentage, isVisible);
	}, [scrollPercentage, isVisible]);
console.log(scrollPercentage)
	return (
		<div ref={scrollableElementRef} style={{ overflowY: 'scroll', height: '300rem', backgroundColor: "#fff" }}>
			<div style={{ height: '1000px' }}>Scrollable Content for Component </div>
			{isVisible && <p>Scroll Percentage for Component : {scrollPercentage.toFixed(2)}%</p>}
		</div>
	);
};
