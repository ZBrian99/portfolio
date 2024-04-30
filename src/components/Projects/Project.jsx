import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { ProjectStar } from './ProjectStar';
const Container = styled(motion.div)`
	width: 100%;
	color: white;
	position: relative;
	height: 2000vh;
	scroll-behavior: smooth;
`;

const StickyContainer = styled(motion.div)`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
`;
const SVG = styled(motion.svg)`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
`;

const Line = styled(motion.path)`
	stroke: #ffffff;
	stroke-width: 1;
	fill: none;
	filter: blur(1px) drop-shadow(0 0 0.3rem white);
`;

const mapRange = (value, [fromStart, fromEnd], [toStart, toEnd]) => {
	if (value <= fromStart) return toStart;
	if (value >= fromEnd) return toEnd;

	return ((value - fromStart) * (toEnd - toStart)) / (fromEnd - fromStart) + toStart;
};

const generateRandomPosition = (minX = 0, maxX = 100, minY = 0, maxY = 100) => {
	const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
	const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
	return { x, y };
};

export const Project = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const [cards, setCards] = useState([]);

	const [stars, setStars] = useState([]);

	const [lines, setLines] = useState([]);

	const [elements, setElements] = useState([]);

	useEffect(() => {
		const newStars = Array(projects.length)
			.fill()
			.map(() => ({
				type: 'star',
				position: generateRandomPosition(10, 90, 10, 90),
			}));

		setStars(newStars);

		const newCards = Array(projects.length).fill({
			type: 'card',
		});

		setCards(newCards);

		const handleResize = () => {
			const newDimensions = {
				vw: window.innerWidth / 100,
				vh: window.innerHeight / 100,
			};

			const newLines = Array(projects.length - 1)
				.fill()
				.map((_, index) => {
					const startX = newStars[index].position.x * newDimensions.vw;
					const startY = newStars[index].position.y * newDimensions.vh;
					const endX = newStars[index + 1].position.x * newDimensions.vw;
					const endY = newStars[index + 1].position.y * newDimensions.vh;
					const path = `M ${startX} ${startY} L ${endX} ${endY}`;
					return {
						type: 'line',
						startPosition: { x: startX, y: startY },
						endPosition: { x: endX, y: endY },
						path: path,
					};
				});

			setLines(newLines);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const totalElements = stars.length + cards.length + lines.length;

		const scrollPerCircleAndLine = 0.3 / (stars.length + lines.length);

		const scrollPerCard = 0.6 / cards.length;

		let scrollStartPerElement = 0.05;

		let intercalatedArray = [];
		for (let i = 0; i < totalElements / 3; i++) {
			if (stars[i]) {
				intercalatedArray = [
					...intercalatedArray,
					{
						...stars[i],
						startScroll: scrollStartPerElement,
						endScroll: scrollStartPerElement + scrollPerCircleAndLine,
					},
				];
				scrollStartPerElement = scrollStartPerElement + scrollPerCircleAndLine;
			}
			if (cards[i]) {
				intercalatedArray = [
					...intercalatedArray,
					{
						...cards[i],
						startScroll: scrollStartPerElement,
						endScroll: scrollStartPerElement + scrollPerCard,
						project: i,
					},
				];
				scrollStartPerElement = scrollStartPerElement + scrollPerCard;
			}
			if (lines[i]) {
				intercalatedArray = [
					...intercalatedArray,
					{
						...lines[i],
						startScroll: scrollStartPerElement,
						endScroll: scrollStartPerElement + scrollPerCircleAndLine,
					},
				];
				scrollStartPerElement = scrollStartPerElement + scrollPerCircleAndLine;
			}
		}
		setElements(intercalatedArray);
	}, [stars, cards, lines]);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = scrollYProgress.get();
			elements.forEach((element, i) => {
				if (element.type === 'card') {
					const scrollPerCard = 0.6 / cards.length;

					const scrollSegment = scrollPerCard / 5;
					const midScroll = scrollSegment * 3;
					const midScrollStart = element.startScroll + scrollSegment;
					const midScrollEnd = midScrollStart + midScroll;
					const endScrollCard = midScrollEnd + scrollSegment;

					if (scroll >= element.startScroll && scroll < midScrollStart) {
						const progress = mapRange(scroll, [element.startScroll, midScrollStart], [0, 1]);
						const updatedElement = { ...element, scale: progress };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll >= midScrollStart && scroll < midScrollEnd) {
						const updatedElement = { ...element, scale: 1 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll >= midScrollEnd && scroll <= endScrollCard) {
						const progress = mapRange(scroll, [midScrollEnd, endScrollCard], [1, 0]);
						const updatedElement = { ...element, scale: progress };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else {
						const updatedElement = { ...element, scale: 0 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					}
				} else if (element.type === 'line') {
					if (scroll >= element.startScroll && scroll <= element.endScroll) {
						const progress = mapRange(scroll, [element.startScroll, element.endScroll], [0, 1]);
						const updatedElement = { ...element, pathLength: progress };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll > element.endScroll) {
						const updatedElement = { ...element, pathLength: 1 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll < element.startScroll) {
						const updatedElement = { ...element, pathLength: 0 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					}
				} else if (element.type === 'star') {
					if (scroll >= element.startScroll && scroll <= element.endScroll) {
						const progress = mapRange(scroll, [element.startScroll, element.endScroll], [0, 1]);
						// const progressRotate = mapRange(scroll, [element.startScroll, element.endScroll], [0, -360]);

						const updatedElement = { ...element, scale: progress };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll > element.endScroll) {
						const updatedElement = { ...element, scale: 1 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll < element.startScroll) {
						const updatedElement = { ...element, scale: 0 };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					}
				}
			});
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [elements, scrollYProgress]);

	return (
		<Container ref={ref}>
			<StickyContainer>
				{elements.map((element, index) => {
					if (element.type === 'star') {
						return (
							<ProjectStar
								key={index}
								initial={{ x: `${element.position.x}vw`, y: `${element.position.y}vh`, scale: 0 }}
								animate={{
									scale: 1,
									// scale: element.scale,
								}}
								transition={{ duration: 0.2 }}
							/>
						);
					}
					if (element.type === 'card') {
						return (
							<ProjectCard
								key={index}
								initial={{
									scale: 0,
								}}
								animate={{
									scale: element.scale,
								}}
								transition={{
									duration: 0,
								}}
								project={projects[element.project]}
							/>
						);
					}
					if (element.type === 'line') {
						return (
							<SVG width='100%' height='100vh' key={index}>
								<Line
									d={element.path}
									initial={{ pathLength: 1 }}
									// initial={{ pathLength: 0 }}
									animate={{ pathLength: element.pathLength }}
									transition={{
										duration: 0,
									}}
								/>
							</SVG>
						);
					}
				})}
			</StickyContainer>
		</Container>
	);
};
