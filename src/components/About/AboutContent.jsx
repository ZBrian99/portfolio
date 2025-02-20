import styled from '@emotion/styled';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: auto;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #f1f1f1;
  line-height: 1.6;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, rgba(255, 0, 234, 0.15), rgba(255, 208, 0, 0.15));
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
  font-weight: 500;
  color: #fff;
`;

export const AboutContent = () => {
  return (
		<ContentContainer>
			<Paragraph>
				Como desarrollador Full Stack autodidacta, he transformado{' '}
				<Highlight>necesidades reales en soluciones prácticas y efectivas</Highlight>. Desde sistemas de gestión con
				control de acceso IoT, mi sitio web InterUp, hasta plataformas de cursos con inscripciones personalizadas y
				sistemas de referidos, cada proyecto ha sido un paso más en mi crecimiento profesional.
			</Paragraph>
			<Paragraph>
				Mi stack principal incluye <Highlight>React, NestJS y PostgreSQL</Highlight>, con los que construyo aplicaciones
				web completas. Mi experiencia abarca desde el diseño e implementación de interfaces intuitivas hasta el
				desarrollo de APIs y la gestión de bases de datos.{' '}
				<Highlight>
					Me adapto rápidamente a nuevas tecnologías según las necesidades específicas de cada proyecto
				</Highlight>
				.
			</Paragraph>
			<Paragraph>
				Mi <Highlight>capacidad analítica y habilidad para resolver problemas</Highlight> me permite aportar soluciones
				en cualquier entorno. Disfruto compartiendo conocimientos y aprendiendo de otros profesionales, demostrando que
				las limitaciones son solo oportunidades para la innovación.
			</Paragraph>
		</ContentContainer>
	);
}; 