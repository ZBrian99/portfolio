import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { ProjectStar } from './ProjectStar';
const Container = styled(motion.div)`
	/* background-color: #333; */
	width: 100%;
	color: white;
	position: sticky;
	top: 0;
	height: 2000vh;
	scroll-behavior: smooth;
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
	filter: blur(1px) drop-shadow( 0 0 .3rem white);
`;
const Circle = styled(motion.circle)`
	fill: #ffffff;
`;

const Star = styled(motion.div)`
	position: fixed;
	width: 1rem;
	height: 1rem;
	margin-left: -0.5rem;
	margin-top: -0.5rem;
	background-color: #ffffff;
	clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;
const mapRange = (value, [fromStart, fromEnd], [toStart, toEnd]) => {
	if (value <= fromStart) return toStart;
	if (value >= fromEnd) return toEnd;

	return ((value - fromStart) * (toEnd - toStart)) / (fromEnd - fromStart) + toStart;
};

export const Project = () => {
	const controlsCircle = Array(5)
		.fill()
		.map(() => useAnimation());

	const controlsCard = Array(5)
		.fill()
		.map(() => useAnimation());

	const [starAnimationsPlayed, setStarAnimationsPlayed] = useState(Array(5).fill(false));

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

		const handleScroll = () => {
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
						const progressRotate = mapRange(scroll, [element.startScroll, element.endScroll], [0, 360]);
						element.control.start({
							scale: progress,
							// opacity: progress,
							transition: {
								scale: { duration: 0 },
								// opacity: { duration: 0 },
							},
						});
					} else if (scroll > element.endScroll) {
						element.control.start({
							scale: 1,
							// opacity: 1,
							transition: {
								scale: { duration: 0 },
								// opacity: { duration: 0 },
							},
						});
					} else if (scroll < element.startScroll) {
						element.control.start({
							scale: 0,
							// opacity: 0,
							transition: {
								scale: { duration: 0 },
								// opacity: { duration: 0 },
							},
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
				{/* {controlsCircle.map((controlCircle, index) => (
					<Circle
						key={index}
						cx={`${positions[index].x}vw`}
						cy={`${positions[index].y}vh`}
						r='1vw'
						initial={{ scale: 0 }}
						animate={controlCircle}
					/>
				))} */}
			</SVG>
			{controlsCircle.map((controlCircle, index) => (
				<ProjectStar
					key={index}
					initial={{ x: `${positions[index].x}vw`, y: `${positions[index].y}vh` }}
					size={index+1}

					animate={controlCircle}
				/>
			))}
			{/* {controlsCard.map((controlCard, index) => (
				<ProjectCard
					key={index}
					index={index}
					// position={positions[index]}
					initial={{
						scale: 0,
						// x: `50%`,
						// y: `50%`,
						// x: `calc(${positions[index].x}vw - 50%)`,
						// y: `calc(${positions[index].y}vh - 50%)`,
						// originX: '50%',
						// originY: '50%',
					}}
					animate={controlCard}
					project={projects[index]}
				/>
			))} */}
		</Container>
	);
};
