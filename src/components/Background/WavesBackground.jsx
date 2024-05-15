import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WavesContainer = styled.div`
	position: absolute;
  overflow: hidden;
	width: 100%;
	height: 100%;
  z-index: -1;
	/* background-color: #111; */
`;

const WaveSVG = styled(motion.svg)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  min-width: 60rem;
	height: 100%;
	filter: blur(2rem) brightness(0.5);
`;

const path1 = {
	start: {
		y: '-5%',
		d: 'M0 287L32 305C64 323 128 359 192 377C256 395 320 395 384 373.5C448 352 512 309 576 304.5C640 300 704 334 768 352C832 370 896 372 928 373L960 374V253L928 246.7C896 240.3 832 227.7 768 213.2C704 198.7 640 182.3 576 186C512 189.7 448 213.3 384 227.8C320 242.3 256 247.7 192 235C128 222.3 64 191.7 32 176.3L0 161V287Z',
	},
	end: {
		d: 'M0 384L32 373.3C64 362.7 128 341.3 192 327C256 312.7 320 305.3 384 315.2C448 325 512 352 576 351.2C640 350.3 704 321.7 768 316.3C832 311 896 329 928 338L960 347V237L928 220.7C896 204.3 832 171.7 768 170.7C704 169.7 640 200.3 576 201.3C512 202.3 448 173.7 384 161.2C320 148.7 256 152.3 192 173.8C128 195.3 64 234.7 32 254.3L0 274V384Z',
	},
};
const path2 = {
	start: {
		y: '-3%',
		d: 'M0 374L32 367.7C64 361.3 128 348.7 192 347.7C256 346.7 320 357.3 384 348.3C448 339.3 512 310.7 576 306.2C640 301.7 704 321.3 768 325.8C832 330.3 896 319.7 928 314.3L960 309V215L928 207.8C896 200.7 832 186.3 768 180C704 173.7 640 175.3 576 184.3C512 193.3 448 209.7 384 216.8C320 224 256 222 192 218.3C128 214.7 64 209.3 32 206.7L0 204V374Z',
	},
	end: {
		d: 'M0 378.999L32 381.699C64 384.299 128 389.699 192 392.299C256 394.999 320 394.999 384 379.699C448 364.299 512 333.699 576 330.199C640 326.699 704 350.299 768 352.199C832 353.999 896 333.999 928 323.999L960 313.999V214.999L928 213.199C896 211.299 832 207.699 768 195.999C704 184.299 640 164.699 576 171.799C512 178.999 448 212.999 384 229.199C320 245.299 256 243.699 192 241.999C128 240.299 64 238.699 32 237.799L0 236.999V378.999Z',
	},
};
const path3 = {
	start: {
		d: 'M0 374.001L32 362.201C64 350.301 128 326.701 192 329.301C256 332.001 320 361.001 384 359.301C448 357.701 512 325.301 576 316.301C640 307.301 704 321.701 768 333.301C832 345.001 896 354.001 928 358.501L960 363.001V269.001L928 252.801C896 236.701 832 204.301 768 190.001C704 175.701 640 179.301 576 190.201C512 201.001 448 219.001 384 213.501C320 208.001 256 179.001 192 182.501C128 186.001 64 222.001 32 240.001L0 258.001V374.001Z',
	},
	end: {
		d: 'M0 352L32 350.2C64 348.3 128 344.7 192 350C256 355.3 320 369.7 384 363.3C448 357 512 330 576 322C640 314 704 325 768 334C832 343 896 350 928 353.5L960 357V193L928 200.3C896 207.7 832 222.3 768 216.2C704 210 640 183 576 182C512 181 448 206 384 215C320 224 256 217 192 212.5C128 208 64 206 32 205L0 204V352Z',
	},
};
const path4 = {
	start: {
		y: '3%',

		d: 'M0 282L32 283.8C64 285.7 128 289.3 192 304.7C256 320 320 347 384 353.2C448 359.3 512 344.7 576 337.3C640 330 704 330 768 329.2C832 328.3 896 326.7 928 325.8L960 325V199L928 192.7C896 186.3 832 173.7 768 179C704 184.3 640 207.7 576 223C512 238.3 448 245.7 384 231.3C320 217 256 181 192 168.3C128 155.7 64 166.3 32 171.7L0 177V282Z',
	},
	end: {
		d: 'M0 287L32 302.3C64 317.7 128 348.3 192 349.3C256 350.3 320 321.7 384 319C448 316.3 512 339.7 576 346.8C640 354 704 345 768 335C832 325 896 314 928 308.5L960 303V161L928 170.8C896 180.7 832 200.3 768 213C704 225.7 640 231.3 576 221.5C512 211.7 448 186.3 384 184.5C320 182.7 256 204.3 192 203.5C128 202.7 64 179.3 32 167.7L0 156V287Z',
	},
};
const path5 = {
	start: {
		y: '5%',

		d: 'M0 302.999L32 316.499C64 329.999 128 356.999 192 349.799C256 342.699 320 301.299 384 286.199C448 270.999 512 281.999 576 290.999C640 299.999 704 306.999 768 319.499C832 331.999 896 349.999 928 358.999L960 367.999V257.999L928 244.499C896 230.999 832 203.999 768 190.499C704 176.999 640 176.999 576 174.299C512 171.699 448 166.299 384 184.299C320 202.299 256 243.699 192 251.799C128 259.999 64 234.999 32 222.499L0 209.999V302.999Z',
	},
	end: {
		d: 'M0 374L32 360.5C64 347 128 320 192 317.2C256 314.3 320 335.7 384 344.7C448 353.7 512 350.3 576 343.2C640 336 704 325 768 312.3C832 299.7 896 285.3 928 278.2L960 271V156L928 165.8C896 175.7 832 195.3 768 202.5C704 209.7 640 204.3 576 210.7C512 217 448 235 384 226.8C320 218.7 256 184.3 192 177.2C128 170 64 190 32 200L0 210V374Z',
	},
};

export const WavesBackground = () => {
	return (
		<WavesContainer>
			<WaveSVG
				initial='start'
				animate='end'
				width='100%'
				height='100%'
				viewBox='0 0 960 540'
				preserveAspectRatio={'none'}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
			

				<defs>
					<linearGradient id='nebulaGradient3' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='0%' stopColor='#FF4500' />
						<stop offset='25%' stopColor='#FFA500' />
						<stop offset='50%' stopColor='#EE82EE' />
						<stop offset='75%' stopColor='#FF1493' />
						<stop offset='100%' stopColor='#FF6347' />
					</linearGradient>
					<linearGradient id='nebulaGradient1' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='0%' stopColor='#8A2BE2' />
						<stop offset='25%' stopColor='#9370DB' />
						<stop offset='50%' stopColor='#BA55D3' />
						<stop offset='75%' stopColor='#9932CC' />
						<stop offset='100%' stopColor='#8B008B' />
					</linearGradient>
					<linearGradient id='nebulaGradient4' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='0%' stopColor='#FF69B4' />
						<stop offset='25%' stopColor='#FFB6C1' />
						<stop offset='50%' stopColor='#FFC0CB' />
						<stop offset='75%' stopColor='#DB7093' />
						<stop offset='100%' stopColor='#FF7F50' />
					</linearGradient>
					<linearGradient id='nebulaGradient5' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='0%' stopColor='#32CD32' />
						<stop offset='25%' stopColor='#3CB371' />
						<stop offset='50%' stopColor='#20B2AA' />
						<stop offset='75%' stopColor='#2E8B57' />
						<stop offset='100%' stopColor='#66CDAA' />
					</linearGradient>
					<linearGradient id='nebulaGradient2' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='0%' stopColor='#00CED1' />
						<stop offset='25%' stopColor='#AFEEEE' />
						<stop offset='50%' stopColor='#00BFFF' />
						<stop offset='75%' stopColor='#87CEFA' />
						<stop offset='100%' stopColor='#4682B4' />
					</linearGradient>
				</defs>

				<motion.path
					variants={path1}
					transition={{
						duration: 10,
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
					}}
					fill='url(#nebulaGradient1)'
				/>
				<motion.path
					variants={path2}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
					}}
					fill='url(#nebulaGradient2)'
				/>
				<motion.path
					variants={path3}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
					}}
					fill='url(#nebulaGradient3)'
				/>
				<motion.path
					variants={path4}
					transition={{
						duration: 6,
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
					}}
					fill='url(#nebulaGradient4)'
				/>
				<motion.path
					variants={path5}
					transition={{
						duration: 7,
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
					}}
					fill='url(#nebulaGradient5)'
				/>
			</WaveSVG>
		</WavesContainer>
	);
};
