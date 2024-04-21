import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: lightcoral;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
`;

export const Constellation = () => {
	const [stars, setStars] = useState([]);
	const [currentLineIndex, setCurrentLineIndex] = useState(0);

	useEffect(() => {
		// Generar estrellas aleatorias
		const generateRandomStars = () => {
			const newStars = [];
			for (let i = 0; i < 5; i++) {
				newStars.push({
					cx: Math.random() * 100,
					cy: Math.random() * 100,
					r: 3,
				});
			}
			return newStars;
		};

		setStars(generateRandomStars());
	}, []);

	// Obtener el trazo de la constelación que pasa por cada estrella
	const generatePaths = (stars) => {
		const paths = [];
		for (let i = 0; i < stars.length - 1; i++) {
			const path = `M${stars[i].cx},${stars[i].cy} L${stars[i + 1].cx},${stars[i + 1].cy}`;
			paths.push(path);
		}
		return paths;
	};

	const handleLineComplete = () => {
		console.log(`La línea ha pasado por la estrella ${currentLineIndex + 1}`);
		setTimeout(() => {
			setCurrentLineIndex(currentLineIndex + 1);
		}, 1000); // Espera 1 segundo antes de iniciar la siguiente línea
	};

	useEffect(() => {
		if (currentLineIndex < stars.length - 1) {
			setTimeout(() => {
				handleLineComplete();
			}, 4000); // Espera 4 segundos para completar cada línea
		}
	}, [currentLineIndex]);

	return (
		<Container>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 100'
				preserveAspectRatio='none'
				style={{
					display: 'block',
				}}
			>
				{/* Líneas de la constelación */}
				{stars.length > 1 &&
					generatePaths(stars).map((path, index) => (
						<motion.path
							key={`path-${index}`}
							d={path}
							fill='none'
							stroke='#FFFFFF'
							strokeWidth='1'
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 4, ease: 'linear' }}
							onAnimationComplete={handleLineComplete}
							style={{ visibility: index === currentLineIndex ? 'visible' : 'hidden' }}
						/>
					))}
				{/* Estrellas */}
				{stars.map((star, index) => (
					<motion.circle
						key={`star-${index}`}
						cx={`${star.cx}%`}
						cy={`${star.cy}%`}
						r={star.r}
						fill='#9e1212'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.4 }}
					/>
				))}
			</svg>
		</Container>
	);
};
