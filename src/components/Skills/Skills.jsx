import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import skillsData from '../../data/skills.json';

const SkillSection = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-image: url('src/assets/images/background.png');
	background-attachment: fixed;
`;

const PlanetContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	left: -50%;
	margin-left: calc(${({ sunSize }) => sunSize} / 2 + 3rem);
`;

const PlanetOrbit = styled(motion.div)`
	width: ${({ orbitSize }) => orbitSize};
	height: ${({ orbitSize }) => orbitSize};
	background-color: transparent;
	border: 1px dashed white;
	border-radius: 50%;
	position: absolute;
`;

const PlanetRotation = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Planet = styled(motion.div)`
	width: ${({ planetSize }) => planetSize};
	height: ${({ planetSize }) => planetSize};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: calc(-${({ planetSize }) => planetSize} / 2) auto;
`;
const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;

export const Skills = () => {
	return (
		<SkillSection>
			<PlanetContainer sunSize={'10vw'}>
				<Planet
					planetSize={'10vw'}
					animate={{
						rotate: [0, -360],
					}}
					transition={{
						duration: 60,
						ease: 'linear',
						repeat: Infinity,
					}}
				>
					<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
				</Planet>

				<PlanetOrbit orbitSize={'40vw'}>
					<PlanetRotation
						animate={{
							rotate: [88, 92],
						}}
						transition={{
							duration: 10,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Planet
							planetSize={'10vw'}
							animate={{ rotate: [-88, -92] }}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
							<PlanetOrbit orbitSize={'20vw'}>
								<PlanetRotation
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										duration: 10,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Planet
										planetSize={'5vw'}
										animate={{
											rotate: [0, 360],
										}}
										transition={{
											duration: 10,
											ease: 'linear',
											repeat: Infinity,
										}}
									>
										<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
						</Planet>
					</PlanetRotation>
				</PlanetOrbit>
				<PlanetOrbit orbitSize={'110vw'}>
					<PlanetRotation
						animate={{
							rotate: [88, 92],
						}}
						transition={{
							duration: 10,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Planet
							planetSize={'10vw'}
							animate={{ rotate: [-88, -92] }}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
							<PlanetOrbit orbitSize={'20vw'}>
								<PlanetRotation
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										duration: 10,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Planet
										planetSize={'5vw'}
										animate={{
											rotate: [0, 360],
										}}
										transition={{
											duration: 10,
											ease: 'linear',
											repeat: Infinity,
										}}
									>
										<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
							<PlanetOrbit orbitSize={'30vw'}>
								<PlanetRotation
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										duration: 15,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Planet
										planetSize={'5vw'}
										animate={{
											rotate: [0, 360],
										}}
										transition={{
											duration: 15,
											ease: 'linear',
											repeat: Infinity,
										}}
									>
										<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
							<PlanetOrbit orbitSize={'40vw'}>
								<PlanetRotation
									animate={{
										rotate: [0, -360],
									}}
									transition={{
										duration: 20,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Planet
										planetSize={'5vw'}
										animate={{
											rotate: [0, 360],
										}}
										transition={{
											duration: 20,
											ease: 'linear',
											repeat: Infinity,
										}}
									>
										<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
						</Planet>
					</PlanetRotation>
				</PlanetOrbit>
				<PlanetOrbit orbitSize={'170vw'}>
					<PlanetRotation
						animate={{
							rotate: [88, 92],
						}}
						transition={{
							duration: 10,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Planet
							planetSize={'10vw'}
							animate={{ rotate: [-88, -92] }}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<PlanetIcon src={skillsData.skills[0].src} alt={skillsData.skills[0].name} />
						</Planet>
					</PlanetRotation>
				</PlanetOrbit>
			</PlanetContainer>
		</SkillSection>
	);
};
