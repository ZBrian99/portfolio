import styled from '@emotion/styled';
import { delay, motion } from 'framer-motion';

import { skills } from '../../data/skills';
import { HeroSocialButton } from '../Hero/HeroSocialButton';

const SkillsContainer = styled.section`
	width: 100%;
	/* min-height: 20rem; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin: 0 2rem;
`;

const SkillsTitle = styled(motion.h3)`
	font-size: 3em;
	text-align: center;
	width: 100%;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);

	/* background-image: linear-gradient(60deg, #fffb00, #ff6124); */
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const SkillsWrapper = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	gap: 1rem;
`;

const Skill = styled(motion.div)`
	position: relative;
	width: 3rem;
	height: 3rem;
	/* background-color: #333;
	background: radial-gradient(at right bottom, #111, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	 */

	border-radius: 1rem;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */

	/* filter: grayscale(30%); */
	opacity: 0.7;

	/* background-color: rgba(255, 255, 255, 0.05); */
	padding: 0.7rem;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
	/* background-color: rgba(255, 255, 255, 0.05); */
	/* background-color: rgba(255, 255, 255, 0.1); */

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* gap: 0.5rem; */
	/* background-color: red; */
	/* opacity: 0.9; */
	&:hover {
		/* filter: grayscale(0%); */
		opacity: 1;

		& > .SkillTooltip {
			opacity: 1;
		}
	}
`;

const SkillImage = styled.img`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	/* padding: 0.7rem; */
`;

const SkillTooltip = styled.span`
	position: absolute;
	left: 50%;
	top: 0%;
	transform: translate(-50%, -140%);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.9em;
	white-space: nowrap;
	transition: opacity 0.2s ease;
	pointer-events: none;
	opacity: 0;

	border-radius: 0.5rem;
	background-color: #222;
	&::before {
		content: '';
		position: absolute;
		bottom: 2%;
		left: 50%;
		transform: translate(-50%, 100%);
		border: 0.5rem solid #222;
		border-color: #222 transparent transparent transparent;
	}
`;

const title = {
	hidden: { opacity: 0, x: -100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

const wrapper = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: {
		scale: 0,
		// opacity: 0,
		// y: 30,
	},
	show: {
		// y: 0,
		scale: 1,

		// transition: {
		// 	duration: 1,
		// },
	},
};

export const Skills = () => {
	return (
		<SkillsWrapper
		// variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}
		>
			{skills.map((skill, index) => (
				<Skill
					key={index}
					// viewport={{ once: true }}
					// variants={item}
					// whileHover={{
					// 	y: -5,
					// 	opacity: 1,
					// }}
				>
					<SkillTooltip className='SkillTooltip'>{skill.name}</SkillTooltip>
					<SkillImage src={skill.src} alt={skill.name} />
				</Skill>
			))}
			{/* {skills.map((skill, index) => (
				<Skill
				key={index}
				// viewport={{ once: true }}
				// variants={item}
				// whileHover={{
				// 	y: -5,
				// 	opacity: 1,
				// }}
				>
					<SkillTooltip className='SkillTooltip'>{skill.name}</SkillTooltip>
					<SkillImage src={skill.src} alt={skill.name} />
				</Skill>
			))} */}
		</SkillsWrapper>
		// <SkillsContainer>
		// 	<SkillsTitle variants={title} initial='hidden' whileInView='show' viewport={{ once: true }}>
		// 		Tecnologías
		// 	</SkillsTitle>
		// 	<SkillsWrapper variants={wrapper} initial='hidden' whileInView='show' viewport={{ once: true }}>
		// 		{skills.map((skill, index) => (
		// 			<Skill
		// 				viewport={{ once: true }}
		// 				key={index}
		// 				variants={item}
		// 				whileHover={{
		// 					y: -5,
		// 					opacity: 1,
		// 				}}
		// 			>
		// 				<SkillTooltip className='SkillTooltip'>{skill.name}</SkillTooltip>
		// 				<SkillImage src={skill.src} alt={skill.name} />
		// 			</Skill>
		// 		))}
		// 	</SkillsWrapper>
		// </SkillsContainer>
	);
};
