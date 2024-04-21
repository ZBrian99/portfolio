import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useScroll } from 'framer-motion';

const Container = styled(motion.div)`
	/* background-color: #333; */
	width: 100%;
	color: white;
	position: sticky;
	top: 0;
	height: 2000vh;
`;

const SVG = styled(motion.svg)`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
`;

const Line = styled(motion.path)`
	stroke: #ffffff;
	stroke-width: 1;
	fill: none;
`;
const Circle = styled(motion.circle)`
	fill: #ffffff;
`;
const mapRange = (value, [fromStart, fromEnd], [toStart, toEnd]) => {
	if (value <= fromStart) return toStart;
	if (value >= fromEnd) return toEnd;

	return ((value - fromStart) * (toEnd - toStart)) / (fromEnd - fromStart) + toStart;
};

export const TestSVG = () => {
	const controlsCircle = Array(5)
		.fill()
		.map(() => useAnimation());

	const generateRandomPosition = (minX = 0, maxX = 100, minY = 0, maxY = 100) => {
		const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
		const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
		return { x, y };
	};

	const positions = Array(controlsCircle.length)
		.fill()
		.map(() => generateRandomPosition(10, 90, 10, 90));

	const ref = useRef(null);
	const { scrollYProgress } = useScroll(ref);

	const [dimensions, setDimensions] = useState({
		vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 100,
		vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100,
	});

	const linePaths = positions.slice(0, -1).map((position, index) => {
		const startX = position.x * dimensions.vw;
		const startY = position.y * dimensions.vh;
		const endPosition = positions[index + 1];
		const endX = endPosition.x * dimensions.vw;
		const endY = endPosition.y * dimensions.vh;
		return `M ${startX} ${startY} L ${endX} ${endY}`;
	});

	const controlsLine = Array(linePaths.length)
		.fill()
		.map(() => useAnimation());

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 100,
				vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = scrollYProgress.get();
			const totalElements = controlsCircle.length + controlsLine.length;
			const scrollPerElement = 0.8 / totalElements;
			const scrollStart = 0.1;

			const intercalatedArray = [];
			for (let i = 0; i < totalElements / 2; i++) {
				if (controlsCircle[i]) {
					intercalatedArray.push({ type: 'circle', control: controlsCircle[i] });
				}
				if (controlsLine[i]) {
					intercalatedArray.push({ type: 'line', control: controlsLine[i] });
				}
			}

			intercalatedArray.forEach((element, i) => {
				const startScroll = scrollStart + i * scrollPerElement;
				const endScroll = startScroll + scrollPerElement;

				if (scroll >= startScroll && scroll <= endScroll) {
					const progress = mapRange(scroll, [startScroll, endScroll], [0, 1]);
					element.control.start({
						[element.type === 'circle' ? 'scale' : 'pathLength']: progress,
						transition: { duration: 0 },
					});
				} else if (scroll > endScroll) {
					element.control.start({
						[element.type === 'circle' ? 'scale' : 'pathLength']: 1,
						transition: { duration: 0 },
					});
				} else if (scroll < startScroll) {
					element.control.start({
						[element.type === 'circle' ? 'scale' : 'pathLength']: 0,
						transition: { duration: 0 },
					});
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [controlsLine, controlsCircle, scrollYProgress]);

	return (
		<Container ref={ref}>
			<SVG width='100%' height='100vh'>
				{controlsLine.map((controlLine, index) => (
					<Line key={index * 100} d={linePaths[index]} initial={{ pathLength: 0 }} animate={controlLine} />
				))}
				{controlsCircle.map((controlCircle, index) => (
					<Circle
						key={index}
						cx={`${positions[index].x}vw`}
						cy={`${positions[index].y}vh`}
						r='1vw'
						initial={{ scale: 0 }}
						animate={controlCircle}
					/>
				))}
			</SVG>
		</Container>
	);
};
