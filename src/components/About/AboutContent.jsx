import styled from '@emotion/styled';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #f1f1f1;
  line-height: 1.6;
  opacity: 0.9;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, rgba(255, 0, 234, 0.15), rgba(255, 208, 0, 0.15));
  padding: 0.1rem 0.4rem;
  border-radius: 0.3rem;
  font-weight: 500;
  color: #fff;
`;

export const AboutContent = () => {
  return (
    <ContentContainer>
      <Paragraph>
        Mi viaje en el desarrollo comenzó como una pasión por resolver problemas. <Highlight>Como desarrollador autodidacta, cada desafío ha sido una oportunidad para crecer y aprender</Highlight>. La tecnología no solo es mi profesión, es mi forma de crear impacto.
      </Paragraph>
      <Paragraph>
        <Highlight>La perseverancia y adaptabilidad han sido mis mayores aliados en cada obstáculo superado</Highlight>. Esta experiencia me ha enseñado que los límites son solo temporales. Mi enfoque en el aprendizaje continuo me ha permitido mantenerme al día con las últimas tecnologías y mejores prácticas.
      </Paragraph>
      <Paragraph>
        <Highlight>Creo firmemente en el poder del trabajo en equipo y la importancia de la empatía en el desarrollo de software</Highlight>. Mi experiencia me ha enseñado que la inteligencia emocional es tan valiosa como las habilidades técnicas. Cada proyecto es una oportunidad para colaborar, aprender y crecer juntos.
      </Paragraph>
    </ContentContainer>
  );
}; 