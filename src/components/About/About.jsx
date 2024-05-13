import styled from '@emotion/styled';
import { motion } from 'framer-motion';
const AboutContainer = styled(motion.section)`
	/* background-color: #000; */
	border-radius: 1rem;
	padding: 2.5rem 1rem;
	padding-top: 7.5rem;
	color: white;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	gap: 1rem;
	width: 100%;
	max-width: 100rem;
	margin: auto;
`;

const AboutCard = styled.div`
	/* padding: 2rem; */
	/* border-radius: 1rem; */
	display: flex;
	gap: 1rem;
	width: 100%;
`;

const AboutInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	background-color: #333;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	border-radius: 1rem;
	padding: 2rem 1rem;
	position: relative;
	padding-top: 6rem;
	order: 1;
	flex: 3;
	@media screen and (min-width: 60rem) {
		padding: 2rem;
	}
`;

const InfoImage = styled.img`
	position: absolute;
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	border: 0.2rem solid #555;

	object-fit: cover;
	object-position: center;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const AboutTitle = styled.h3`
	font-size: 2em;
	/* text-align: center; */
	width: 100%;
	margin-bottom: 0.5rem;
`;

const AboutDescription = styled.p`
	font-size: 1em;
`;

const AboutPhoto = styled.div`
	justify-content: center;
	background-color: #111;
	border-radius: 1rem;
	padding: 2rem;
	display: flex;
`;
const AboutImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: 1rem;
	border: 0.5rem solid #333;
	object-fit: cover;
	object-position: center;
`;

const Services = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	padding: 2rem;
	background-color: #333;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	border-radius: 1rem;
	padding: 2rem 1rem;
	flex-wrap: wrap;
	width: 100%;
	order: 3;

	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`;

const ServicesTitle = styled.h3`
	/* text-align: center; */
	font-size: 2em;
	margin-bottom: 0.5rem;

	width: 100%;
`;

const ServiceCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
	border-radius: 1rem;
	background-color: #111;
	width: 100%;
	min-height: 20rem;
	text-align: center;
	background-color: #222;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;

	@media screen and (min-width: 55rem) {
		max-width: 20rem;
	}
`;

const ServiceInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ServiceTitle = styled.h3`
	margin-bottom: 0.5rem;
	font-size: 1.5em;
`;

const ServiceDescription = styled.p`
	font-size: 1em;
`;

const ServiceImage = styled.img`
	width: 3.5rem;
	height: 3.5rem;
`;

const Skills = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 1rem;
	background-color: #333;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	border-radius: 1rem;
	padding: 2rem 1rem;
	height: content;
	order: 2;
	width: 100%;

	@media screen and (min-width: 60rem) {
		flex: 1;
	}
`;

const SkillsTitle = styled.h3`
	font-size: 2em;
	/* text-align: center; */
	width: 100%;
	margin-bottom: 0.5rem;
`;

const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	gap: 1rem;
`;

const Skill = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;
	background-color: #333;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	&:hover {
		cursor: pointer;
		& > .SkillTooltip {
			opacity: 1;
		}
	}
`;

const SkillImage = styled.img`
	width: 100%;
	height: 100%;
`;

const SkillTooltip = styled.span`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -3rem);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.9em;
	transition: opacity 0.2s ease;
	pointer-events: none;
	opacity: 0;
	z-index: 100;
	background-color: #333;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
`;

const ContactButton = styled.button`
	border: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2rem;
	border-radius: 1rem;
	gap: 0.5rem;
	margin-top: 0.5rem;
	background-color: #222;
	background: radial-gradient(at right bottom, #000000, #333);
	box-shadow: 0 0 0.1rem 0.1rem #555 inset;
	&:hover {
		cursor: pointer;
		box-shadow: 0 0 0.1rem 0.1rem #5bcefa inset;
	}
`;

const ButtonImage = styled.img`
	width: 2rem;
	height: 2rem;
`;

export const About = () => {
	return (
		<AboutContainer>
			{/* <AboutCard> */}
			<AboutInfo>
				<InfoImage src='src/assets/images/photo.jpg' />
				<AboutTitle>Sobre mí</AboutTitle>
				<AboutDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat veritatis natus, eum facere
					sit numquam perspiciatis, exercitationem maiores voluptatum ut distinctio quo et minus fugiat fugit
					dicta sunt quaerat.
				</AboutDescription>
				<AboutDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis dignissimos cumque
					voluptates qui eius possimus animi. Soluta, odio quibusdam molestias ducimus labore aperiam alias
					nisi, neque error, fugiat cumque.
				</AboutDescription>
				<AboutDescription>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iure aliquid dignissimos, quod
					asperiores perspiciatis itaque officiis animi ut saepe ab fuga odio, consectetur, impedit beatae?
					Molestias ipsum consequatur nihil.
				</AboutDescription>
				{/* <ContactButton>
					<ButtonImage src='src/assets/icons/react.svg' alt='Contacto' />
					Contacto
				</ContactButton> */}
				<ContactButton>
					<ButtonImage src='src/assets/icons/react.svg' alt='Currículum' />
					Currículum
				</ContactButton>
			</AboutInfo>
			{/* <AboutPhoto>
				<AboutImage src='src/assets/images/photo.jpg' />
			</AboutPhoto> */}
			{/* </AboutCard> */}

			<Services>
				<ServicesTitle>Servicios</ServicesTitle>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceInfo>
						<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
						<ServiceDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum!
						</ServiceDescription>
					</ServiceInfo>
				</ServiceCard>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceInfo>
						<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
						<ServiceDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, est! Maiores iste consequatur
							incidunt delectus consectetur, nemo in voluptatum voluptas quae, repellat fugit facilis ut.
							Vitae amet molestiae totam eum
						</ServiceDescription>
					</ServiceInfo>
				</ServiceCard>
				<ServiceCard>
					<ServiceImage src='src/assets/icons/react.svg' alt='Web' />
					<ServiceInfo>
						<ServiceTitle>Lorem, ipsum dolor.</ServiceTitle>
						<ServiceDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis accusamus, quae fugiat, fugit
							alias odit ipsa quia obcaecati perferendis molestiae beatae et soluta sed commodi.
						</ServiceDescription>
					</ServiceInfo>
				</ServiceCard>
			</Services>
			<Skills>
				<SkillsTitle>Habilidades</SkillsTitle>
				<SkillsContainer>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
					<Skill>
						<SkillTooltip className='SkillTooltip'>React</SkillTooltip>
						<SkillImage src='src/assets/icons/react.svg' alt='React' />
					</Skill>
				</SkillsContainer>
			</Skills>

			{/* <ContactContainer> */}

			{/* </ContactContainer> */}
		</AboutContainer>
	);
};
