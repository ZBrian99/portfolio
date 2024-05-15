import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BackgroundSVG = styled.svg`
	position: fixed;
	width: 100%;
	height: 100svh;
	z-index: -1;
	filter: blur(6rem);
`;
export const NebulaBackground = () => {
	return (
		<BackgroundSVG
			width='900'
			height='546'
			preserveAspectRatio='none'
			viewBox='0 0 900 546'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<motion.path
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 10, 0],
					x: [0, -50, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				d='M793.945 -55.6375C840.013 -27.536 874.011 30.6018 866.179 81.0002C858.348 131.399 808.778 173.965 762.71 204.186C716.642 234.499 674.076 252.373 621.558 262.416C568.948 272.367 506.388 274.394 483.354 244.173C460.32 213.952 476.812 151.392 486.947 98.9667C496.99 46.4492 500.768 4.15879 523.802 -23.9427C546.836 -52.0442 589.126 -65.9567 639.432 -73.8804C689.739 -81.8041 747.877 -83.7389 793.945 -55.6375Z'
				fill='url(#paint0_linear_2024_8)'
			/>
			<motion.path
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 20, 0],
					x: [0, 100, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				d='M234.859 189.577C265.356 232.817 271.723 275.278 264.015 311.773C256.419 348.267 234.859 378.794 204.25 413.213C173.753 447.718 134.32 486.028 78.6878 498.481C23.1679 510.848 -48.4384 497.444 -98.3729 463.025C-148.307 428.52 -176.458 373.086 -165.734 325.869C-155.122 278.737 -105.634 239.822 -55.6996 196.582C-5.7651 153.343 44.5045 105.779 97.0083 104.049C149.512 102.32 204.362 146.338 234.859 189.577Z'
				fill='url(#paint1_linear_2024_8)'
			/>
			<motion.path
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 10, 0],
					x: [0, -100, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				d='M892.416 314.246C912.51 331.39 908.463 375.691 902.497 414.027C896.531 452.293 888.576 484.662 868.482 506.607C848.389 528.552 816.02 540.073 779.674 544.119C743.328 548.165 702.867 544.736 668.578 522.791C634.289 500.846 606.172 460.385 604.114 418.004C602.126 375.554 626.265 331.116 660.554 313.971C694.843 296.827 739.282 306.976 783.652 307.045C828.021 307.114 872.323 297.101 892.416 314.246Z'
				fill='url(#paint2_linear_2024_8)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_2024_8'
					x1='669.5'
					y1='-79'
					x2='669.5'
					y2='269'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#d828b2' />
					<stop offset='0.5' stop-color='#4136a1' />
					<stop offset='1' stop-color='#39662b' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_2024_8'
					x1='49.5'
					y1='104'
					x2='49.5'
					y2='503'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#662255' />
					<stop offset='0.5' stop-color='#631c51' />
					<stop offset='1' stop-color='#382cdf' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_2024_8'
					x1='755.682'
					y1='304'
					x2='755.682'
					y2='545.59'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#2f0fa1' />
					<stop offset='0.5' stop-color='#703125' />
					<stop offset='1' stop-color='#699121' />
				</linearGradient>
			</defs>
		</BackgroundSVG>
	);
};
