import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { ProjectStar } from './ProjectStar';
const Container = styled.div`
	width: 100%;
	color: white;
	position: relative;
	height: 2000svh;
	/* height: 2000lvh; */

	scroll-behavior: smooth;
`;

const StickyContainer = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 100dvh;
	/* height: 100lvh; */
	display: flex;
	/* background-image: url('src/assets/images/galaxy.png'); */

	background-image: url('src/assets/images/background.png');
	/* background-repeat: no-repeat;  */
	/* background-size: cover; */
	/* background-position: center; */
	/* background-attachment: fixed; */
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
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	// const windowWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
	// const windowHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

	const xMin = (minX / 100) * windowWidth;
	const xMax = (maxX / 100) * windowWidth;
	const yMin = (minY / 100) * windowHeight;
	const yMax = (maxY / 100) * windowHeight;

	const x = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
	const y = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;

	const relativeX = x / windowWidth;
	const relativeY = y / windowHeight;

	return { x, y, relativeX, relativeY };
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

	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const newStars = Array(projects.length)
			.fill()
			.map(() => ({
				type: 'star',
				...generateRandomPosition(10, 90, 10, 90),
			}));

		setStars(newStars);

		const newCards = Array(projects.length).fill({
			type: 'card',
		});

		setCards(newCards);

		const handleResize = () => {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			// const windowWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
			// const windowHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

			setIsMobile(windowWidth <= 960);

			const resizedStars = newStars.map((star) => ({
				...star,
				x: star.relativeX * windowWidth,
				y: star.relativeY * windowHeight,
			}));
			setStars(resizedStars);

			const newLines = Array(projects.length - 1)
				.fill()
				.map((_, index) => {
					const startX = resizedStars[index].x;
					const startY = resizedStars[index].y;
					const endX = resizedStars[index + 1].x;
					const endY = resizedStars[index + 1].y;
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

		if (window.visualViewport) {
			window.visualViewport.addEventListener('resize', handleResize);
		}

		return () => {
			window.removeEventListener('resize', handleResize);

			if (window.visualViewport) {
				window.visualViewport.removeEventListener('resize', handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const totalElements = stars.length + cards.length + lines.length;

		const scrollPerCircleAndLine = 0.2 / (stars.length + lines.length);

		const scrollPerCard = 0.7 / cards.length;

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

		const handleScroll = () => {
			const scroll = scrollYProgress.get();

			intercalatedArray.forEach((element, i) => {
				if (element.type === 'card') {
					const scrollPerCard = 0.6 / cards.length;

					const scrollSegment = scrollPerCard / 5;
					const midScroll = scrollSegment * 3;
					const midScrollStart = element.startScroll + scrollSegment;
					const midScrollEnd = midScrollStart + midScroll;
					const endScrollCard = midScrollEnd + scrollSegment;

					if (scroll >= element.startScroll && scroll < midScrollStart) {
						const progress = mapRange(scroll, [element.startScroll, midScrollStart], [0, 1]);
						const progressStar = mapRange(scroll, [element.startScroll, midScrollStart], [0.7, 1.2]);
						const updatedElement = { ...element, x: progress };

						setElements((prevElements) =>
							prevElements.map((element, index) => {
								if (index === i) {
									return updatedElement;
								} else if (index === i - 1) {
									return { ...element, scale: progressStar };
								} else {
									return element;
								}
							})
						);
					} else if (scroll >= midScrollStart && scroll < midScrollEnd) {
						const updatedElement = { ...element, x: 1 };

						setElements((prevElements) =>
							prevElements.map((element, index) => {
								if (index === i) {
									return updatedElement;
								} else if (index === i - 1) {
									return { ...element, scale: 1.2 };
								} else {
									return element;
								}
							})
						);
					} else if (scroll >= midScrollEnd && scroll <= endScrollCard) {
						const progress = mapRange(scroll, [midScrollEnd, endScrollCard], [1, 0]);
						const progressStar = mapRange(scroll, [midScrollEnd, endScrollCard], [1.2, 0.7]);

						const updatedElement = { ...element, x: progress };

						setElements((prevElements) =>
							prevElements.map((element, index) => {
								if (index === i) {
									return updatedElement;
								} else if (index === i - 1) {
									return { ...element, scale: progressStar };
								} else {
									return element;
								}
							})
						);
					} else {
						const updatedElement = { ...element, x: 0 };
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
						const progress = mapRange(scroll, [element.startScroll, element.endScroll], [0, 0.7]);

						const updatedElement = { ...element, scale: progress };
						setElements((prevElements) => {
							const allElements = [...prevElements];
							allElements[i] = updatedElement;
							return allElements;
						});
					} else if (scroll > element.endScroll) {
						const updatedElement = { ...element, scale: 0.7 };
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

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [stars, cards, lines]);

	return (
		<Container ref={ref}>
			<StickyContainer>
				<div
					style={{
						position: 'absolute',
						left: '50%',
						fontSize: '3rem',
						color: 'white',
						zIndex: 1000,
					}}
				></div>
				{elements.map((element, index) => {
					if (element.type === 'star') {
						return (
							<ProjectStar
								key={index}
								initial={{ x: `${element.x}px`, y: `${element.y}px`, scale: 0 }}
								animate={{
									x: `${element.x}px`,
									y: `${element.y}px`,
									scale: element.scale,
								}}
								transition={{
									duration: 0,
								}}
							/>
						);
					}
					if (element.type === 'card') {
						return (
							<ProjectCard
								key={index}
								initial={{
									x: '-100vw',
								}}
								animate={{
									x: `${(isMobile ? (element.x === 1 ? 0 : -1) : element.x - 1) * 100}vw`,
								}}
								transition={{
									ease: 'linear',
									duration: isMobile ? 0.2 : 0,
								}}
								project={projects[element.project]}
							/>
						);
					}
					if (element.type === 'line') {
						return (
							<SVG key={index} width='100%' height='100%'>
								<Line
									d={element.path}
									initial={{ pathLength: 0 }}
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
