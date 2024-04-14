import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
	background-color: #ffdab994;
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
	/* width: 80vw; */
	/* height: 80vw; */
	width: ${({ orbitSize }) => orbitSize};
	height: ${({ orbitSize }) => orbitSize};
	background-color: transparent;
	border: 1px dashed white;
	border-radius: 50%;
	position: absolute;
	/* background-color: #0000ff4c; */
	/* margin-top: 25%; */
	/* margin-left: 25%; */
	/* margin: calc(-30vw / 2) 0 0 calc(-30vw / 2); */
	/* margin-top: calc(-${({ orbitSize }) => orbitSize} / 2); */
	/* margin-top: calc((${({ sunSize }) => sunSize} / 2)); */
`;

const PlanetRotation = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	/* background-color: #ff000044; */
`;

const Planet = styled(motion.div)`
	/* width: 30vw; */
	/* height: 30vw; */
	width: ${({ planetSize }) => planetSize};
	height: ${({ planetSize }) => planetSize};
	/* border-radius: 50%; */
	/* overflow: hidden; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	/* background-color: #c7db1184; */
	/* margin: calc(-30vw / 2) auto; */
	margin: calc(-${({ planetSize }) => planetSize} / 2) auto;
`;
const PlanetIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;

const MoonOrbit = styled(motion.div)`
	/* Alinea la órbita de la luna con el centro del planeta */
	width: ${({ orbitSize }) => orbitSize};
	height: ${({ orbitSize }) => orbitSize};
	background-color: transparent;
	border: 1px dashed white;

	/* background-color: #0d491f5a; */
	/* margin-top: calc(50% - ${({ orbitSize }) => orbitSize} / 2); */
	/* margin-left: calc(50% - ${({ orbitSize }) => orbitSize} / 2); */

	border-radius: 50%;
	position: absolute;
	margin: calc(-${({ orbitSize }) => orbitSize} / 2) auto;
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
							<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
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
										<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
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
							<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
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
										<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
							<PlanetOrbit orbitSize={'30vw'}>
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
										<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
									</Planet>
								</PlanetRotation>
							</PlanetOrbit>
							<PlanetOrbit orbitSize={'40vw'}>
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
										<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
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
							<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
						</Planet>
					</PlanetRotation>
				</PlanetOrbit>
				{/* <PlanetOrbit orbitSize={'1vw'} sunSize={skillsData.main.planetSize}>
					<PlanetRotation
						animate={
							{
								// rotate: [90],
								// rotate: [88, 92],
							}
						}
						transition={{
							duration: 10,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Planet
							animate={
								{
								}
							}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							planetSize={skillsData.main.planetSize}
							// planetSize={planet.planetSize}
						>
							<PlanetIcon src={skillsData.main.src} alt={skillsData.main.name} />
							{skillsData.skills.map((planet, index) => (
								<PlanetOrbit key={index} orbitSize={planet.orbitSize} sunSize={skillsData.main.planetSize}>
									<PlanetRotation
										animate={
											{
												// rotate: [90],
												// rotate: [88, 92],
											}
										}
										transition={{
											duration: index + 1,
											ease: 'easeInOut',
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										<Planet
											animate={
												{
												}
											}
											transition={{
												duration: index + 1,
												ease: 'easeInOut',
												repeat: Infinity,
												repeatType: 'reverse',
											}}
											planetSize={planet.planetSize}
											// planetSize={planet.planetSize}
										>
											<PlanetIcon src={planet.src} alt={planet.name} />
											{/* {planet.moons?.map((moon, moonIndex) => (
												<MoonOrbit key={`moon-${index}-${moonIndex}`} orbitSize={moon.orbitSize}>
													<PlanetRotation
														animate={
															{
																// rotate: [270],
																// rotate: [360, 0],
															}
														}
														transition={{
															duration: moonIndex + 10,
															ease: 'linear',
															repeat: Infinity,
														}}
													>
														<Planet
															animate={
																{
																	// rotate: [-360, 0],
																}
															}
															transition={{
																duration: moonIndex + 10,
																ease: 'linear',
																repeat: Infinity,
															}}
															planetSize={moon.planetSize}
														>
															<PlanetIcon src={moon.src} alt={`Moon of ${planet.name}`} />
														</Planet>
													</PlanetRotation>
												</MoonOrbit>
											))} 
										</Planet>
									</PlanetRotation>
								</PlanetOrbit>
							))}
						</Planet>
					</PlanetRotation>
				</PlanetOrbit> */}
			</PlanetContainer>
		</SkillSection>
	);
};
