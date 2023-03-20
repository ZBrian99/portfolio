import React, { useEffect, useState } from 'react';
import imagen from '/portfolio/assets/react.svg';
import imagen3 from '/portfolio/assets/redux.svg';
const solarSystemStyles = {
	position: 'relative',
	width: '100vw',
	height: '100vh',
	border: '1px solid black',
	backgroundColor: '#1d1d1d',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const sunStyles = (angle) => ({
	position: 'absolute',
	transform: `rotate(${angle * 0.1}deg)`,
	width: '50px',
	height: '50px',
	borderRadius: '50%',
	zIndex: '1',
	backgroundImage: `url(${imagen})`,
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	transition: 'transform 1s linear',
});

const planetStyles = (distance, angle, speed = 1) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: `translate(-${distance}, -${distance}) rotate(${angle * speed}deg)`,
	transformOrigin: `${distance} ${distance}`,
	zIndex: '1',
});

const Planet = ({ distance, angle, speed }) => {
	return (
		<div style={planetStyles(distance, angle, speed)}>
			<span
				style={{
					width: '25px',
					height: '25px',
					backgroundImage: `url(${imagen3})`,
					backgroundPosition: 'center',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					display: 'block',
					transform: `rotate(${angle * -1 * speed}deg)`,
				}}
			></span>
		</div>
	);
};

const Sun = ({ angle }) => {
	return <div style={sunStyles(angle)} />;
};

export const Solar = () => {
	const [angle, setAngle] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			return setAngle((angle) => angle + 1);
		}, 16);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div style={solarSystemStyles}>
			<Sun angle={angle} />
			<Planet distance={'160px'} angle={angle} speed={0.3}>
				<span>sad</span>
			</Planet>
			<Planet distance={'130px'} angle={angle} speed={0.2} />
			<Planet distance={'70px'} angle={angle} speed={0.5} />
			<Planet distance={'70px'} angle={angle} speed={0.5} />
			<Planet distance={'70px'} angle={angle} speed={0.5} />
			<Planet distance={'100px'} angle={angle} speed={0.7} />
		</div>
	);
};
