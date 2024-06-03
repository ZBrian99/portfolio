import styled from '@emotion/styled';

const BackgroundSVG = styled.svg`
	position: fixed;
	width: 100%;
	height: 100svh;
	z-index: -100;
	filter: blur(6rem) brightness(0.7);
`;
const AnimatedPath = styled.path`
	transform-origin: center;
	${({ animation }) =>
		animation === 1
			? 'animation: moveX1 20s infinite ease-in-out;'
			: animation === 2
			? 'animation: moveX2 30s infinite ease-in-out;'
			: animation === 3
			? 'animation: moveX3 35s infinite ease-in-out;'
			: animation === 4
			? 'animation: moveY 25s infinite ease-in-out;'
			: ''}

	@keyframes moveX1 {
		0%,
		100% {
			transform: scale(1.5) translateX(-100);
		}
		50% {
			transform: scale(2) translateX(-120px);
		}
	}

	@keyframes moveX2 {
		0%,
		100% {
			transform: scale(1.5) translateX(50);
		}
		50% {
			transform: scale(2) translateX(100px);
		}
	}

	@keyframes moveX3 {
		0%,
		100% {
			transform: scale(1.5) translateX(-50);
		}
		50% {
			transform: scale(2) translateX(-100px);
		}
	}

	@keyframes moveY {
		0%,
		100% {
			transform: scale(1.5) translateY(0);
		}
		50% {
			transform: scale(2) translateY(-50px);
		}
	}
`;
export const Background = () => {
	return (
		<BackgroundSVG
			width='900'
			height='527'
			viewBox='0 0 900 527'
			preserveAspectRatio='none'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<AnimatedPath
				animation={1}
				d='M815.07 -35.2026C868.404 -12.5922 907.764 34.1854 898.697 74.7358C889.63 115.286 832.244 149.535 778.91 173.851C725.577 198.24 676.297 212.622 615.497 220.702C554.591 228.709 482.164 230.34 455.497 206.024C428.831 181.709 447.924 131.373 459.657 89.1916C471.284 46.9361 475.657 12.9094 502.324 -9.70101C528.991 -32.3114 577.951 -43.5054 636.191 -49.8808C694.43 -56.2562 761.737 -57.8129 815.07 -35.2026Z'
				fill='url(#paint0_linear_2024_8)'
			/>
			<AnimatedPath
				animation={2}
				d='M241.134 111.577C263.779 154.817 268.507 197.278 262.784 233.773C257.143 270.267 241.134 300.794 218.406 335.213C195.762 369.718 166.481 408.028 125.173 420.481C83.9476 432.848 30.7779 419.444 -6.29987 385.025C-43.3777 350.52 -64.2806 295.086 -56.3176 247.869C-48.4375 200.737 -11.6915 161.822 25.3863 118.582C62.4641 75.3426 99.7907 27.7789 138.776 26.0494C177.762 24.3198 218.489 68.3377 241.134 111.577Z'
				fill='url(#paint1_linear_2024_8)'
			/>
			<AnimatedPath
				animation={3}
				d='M914.069 265.578C934.139 284.951 930.097 335.012 924.138 378.331C918.179 421.573 910.234 458.15 890.164 482.948C870.095 507.746 837.765 520.765 801.463 525.337C765.16 529.91 724.748 526.035 690.5 501.237C656.252 476.439 628.169 430.717 626.114 382.826C624.128 334.857 648.238 284.641 682.486 265.268C716.734 245.894 761.119 257.363 805.436 257.441C849.752 257.518 894 246.204 914.069 265.578Z'
				fill='url(#paint2_linear_2024_8)'
			/>
			<AnimatedPath
				animation={4}
				d='M485.141 293.49C520.573 310.044 563.941 337.539 569.667 370.816C575.393 404.093 543.589 443.153 508.158 456.419C472.726 469.684 433.667 457.269 390.922 461.011C348.177 464.752 301.691 484.65 275.387 471.385C249.139 458.063 243.073 411.577 254.525 376.542C265.92 341.45 294.832 317.811 321.079 301.257C347.384 284.703 371.024 275.293 396.591 273.365C422.215 271.438 449.71 276.993 485.141 293.49Z'
				fill='url(#paint3_linear_2024_8)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_2024_8'
					x1='671'
					y1='-54'
					x2='671'
					y2='226'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#d828b2' />
					<stop offset='0.5' stopColor='#4136a1' />
					<stop offset='1' stopColor='#782480' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_2024_8'
					x1='103.5'
					y1='26'
					x2='103.5'
					y2='425'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#662255' />
					<stop offset='0.5' stopColor='#631c51' />
					<stop offset='1' stopColor='#382cdf' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_2024_8'
					x1='777.5'
					y1='254'
					x2='777.5'
					y2='527'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#2f0fa1' />
					<stop offset='0.5' stopColor='#703125' />
					<stop offset='1' stopColor='#699121' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_2024_8'
					x1='409.669'
					y1='273'
					x2='409.669'
					y2='475.888'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#581a33' />
					<stop offset='0.5' stopColor='#6b156bf8' />
					<stop offset='1' stopColor='#464e97' />
				</linearGradient>
			</defs>
		</BackgroundSVG>
	);
};
