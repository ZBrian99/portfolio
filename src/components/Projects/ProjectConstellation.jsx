import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useScroll } from 'framer-motion';
	const [galaxies] = useState([
		{ x: 28, y: 13, size: 5, color: '#FFB6C1' },
		{ x: 80, y: 17, size: 10, color: '#87CEFA' },
		{ x: 32, y: 45, size: 3, color: '#98FB98' },
		{ x: 78, y: 71, size: 8, color: '#FFD700' },
		{ x: 19, y: 82, size: 6, color: '#ffa784' },
	]);
const Container = styled(motion.div)`
	/* background-color: #333; */
	width: 100%;
	color: white;
	position: sticky;
	top: 0;
	height: 2000vh;
	/* scroll-behavior: smooth; */
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

export const ProjectConstellation = () => {
	const controlsCircle = Array(5)
		.fill()
		.map(() => useAnimation());

	const controlsCard = Array(5)
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
		const totalElements = controlsCircle.length + controlsCard.length + controlsLine.length;

		const scrollPerCircleAndLine = 0.3 / (controlsCircle.length + controlsLine.length);

		const scrollPerCard = 0.6 / controlsCard.length;

		let scrollStartPerElement = 0.05;

		const intercalatedArray = [];
		for (let i = 0; i < totalElements / 3; i++) {
			if (controlsCircle[i]) {
				intercalatedArray.push({
					type: 'circle',
					control: controlsCircle[i],
					startScroll: scrollStartPerElement,
					endScroll: scrollStartPerElement + scrollPerCircleAndLine,
				});
				scrollStartPerElement = scrollStartPerElement + scrollPerCircleAndLine;
			}
			if (controlsCard[i]) {
				intercalatedArray.push({
					type: 'card',
					control: controlsCard[i],
					startScroll: scrollStartPerElement,
					endScroll: scrollStartPerElement + scrollPerCard,
				});
				scrollStartPerElement = scrollStartPerElement + scrollPerCard;
			}
			if (controlsLine[i]) {
				intercalatedArray.push({
					type: 'line',
					control: controlsLine[i],
					startScroll: scrollStartPerElement,
					endScroll: scrollStartPerElement + scrollPerCircleAndLine,
				});
				scrollStartPerElement = scrollStartPerElement + scrollPerCircleAndLine;
			}
		}

		console.log('useEffect');
		const handleScroll = () => {
			console.log('handleScroll');
			const scroll = scrollYProgress.get();

			intercalatedArray.forEach((element, i) => {
				if (element.type === 'card') {
					const scrollSegment = scrollPerCard / 5;

					const midScroll = scrollSegment * 3;

					const midScrollStart = element.startScroll + scrollSegment;
					const midScrollEnd = midScrollStart + midScroll;

					const endScrollCard = midScrollEnd + scrollSegment;

					if (scroll >= element.startScroll && scroll < midScrollStart) {
						// start
						const progress = mapRange(scroll, [element.startScroll, midScrollStart], [0, 1]);
						element.control.start({ scale: progress, transition: { duration: 0 } });
					} else if (scroll >= midScrollStart && scroll < midScrollEnd) {
						// mid
						element.control.start({ scale: 1, transition: { duration: 0 } });
					} else if (scroll >= midScrollEnd && scroll <= endScrollCard) {
						// end
						const progress = mapRange(scroll, [midScrollEnd, endScrollCard], [1, 0]);
						element.control.start({ scale: progress, transition: { duration: 0 } });
					} else {
						// out
						element.control.start({ scale: 0, transition: { duration: 0 } });
					}
				} else if (element.type === 'line') {
					if (scroll >= element.startScroll && scroll <= element.endScroll) {
						const progress = mapRange(scroll, [element.startScroll, element.endScroll], [0, 1]);
						element.control.start({
							pathLength: progress,
							transition: { duration: 0 },
						});
					} else if (scroll > element.endScroll) {
						element.control.start({
							pathLength: 1,
							transition: { duration: 0 },
						});
					} else if (scroll < element.startScroll) {
						element.control.start({
							pathLength: 0,
							transition: { duration: 0 },
						});
					}
				} else if (element.type === 'circle') {
					if (scroll >= element.startScroll && scroll <= element.endScroll) {
						const progress = mapRange(scroll, [element.startScroll, element.endScroll], [0, 1]);
						element.control.start({
							scale: progress,
							transition: { duration: 0 },
						});
					} else if (scroll > element.endScroll) {
						element.control.start({
							scale: 1,
							transition: { duration: 0 },
						});
					} else if (scroll < element.startScroll) {
						element.control.start({
							scale: 0,
							transition: { duration: 0 },
						});
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [controlsLine, controlsCircle, controlsCard, scrollYProgress]);

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
			{controlsCard.map((controlCard, index) => (
				<Card
					key={index}
					index={index}
					position={positions[index]}
					initial={{
						scale: 0,
						x: `50%`,
						y: `50%`,
						// x: `calc(${positions[index].x}vw - 50%)`,
						// y: `calc(${positions[index].y}vh - 50%)`,
						// originX: '50%',
						// originY: '50%',
					}}
					animate={controlCard}
				/>
			))}
		</Container>
	);
};

const CardSyled = styled(motion.div)`
	position: fixed;
	background-color: #333;
	color: white;
	padding: 1rem;
	border-radius: 1rem;
	width: 50%;
	max-width: 50rem;
	height: 50%;
	max-height: 50rem;
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 1rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 1rem;
	}
	&::-webkit-scrollbar-track {
		background-color: #333;
	}
`;

const Card = (props) => {
	return (
		<CardSyled {...props}>
			{props.index + 1}Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi adipisci
			perspiciatis dolorem veniam sint reiciendis fugit itaque laboriosam debitis, maxime eius, ullam est
			maiores natus exercitationem repellendus magni commodi?
		</CardSyled>
	);
};
