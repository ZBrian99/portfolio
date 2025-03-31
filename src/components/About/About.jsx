import styled from '@emotion/styled';
import { GlowButtonAlt } from '../General/GlowButtonAlt';
import { TechStack } from './TechStack';
import { AboutContent } from './AboutContent';

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 3rem;
	padding: 0rem 2rem;
	overflow: hidden;
	@media screen and (min-width: 48rem) {
		/* padding: 0rem 3rem; */
	}
`;

const AboutTitle = styled.h2`
	text-align: center;
	font-size: 3em;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	text-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(60deg, #ff00ea, #ffd000);
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 100%;

	@media screen and (min-width: 58rem) {
		flex-direction: row;
	}
`;

const AboutSection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background: rgba(255, 255, 255, 0.05);
	/* backdrop-filter: blur(0.5rem); */
	border-radius: 1rem;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechSection = styled(AboutSection)`
	  @media screen and (min-width: 58rem) {
		max-width: 30%;
	}
	  @media screen and (min-width: 65rem) {
		max-width: 35%;
	}
`;

export const About = () => {
	return (
		<AboutContainer id='about'>
			<AboutTitle>Sobre mí</AboutTitle>
			<ContentWrapper>
				<AboutSection>
					<AboutContent />
					<GlowButtonAlt
						fit
						stretch
						href='https://drive.google.com/file/d/1ZOSN6uWMs0PgmbzF6gqygZWOKPazPpoC/view'
						target='_blank'
						rel='noreferrer'
					>
						Curriculum
						<img
							src='/icons/external-link_5.svg'
							alt='Web'
							style={{ width: '1em', height: '1em', marginLeft: '0.5rem' }}
						/>
					</GlowButtonAlt>
				</AboutSection>
				<TechSection>
					<TechStack />
				</TechSection>
			</ContentWrapper>
		</AboutContainer>
	);
};
