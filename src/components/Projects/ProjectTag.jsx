import styled from '@emotion/styled';

const technologyStyles = {
	React: { background: 'rgba(97, 218, 251, 0.2)' },
	Redux: { background: 'rgba(118, 74, 188, 0.2)' },
	Node: { background: 'rgba(140, 200, 75, 0.2)' },
	Sass: { background: 'rgba(204, 102, 153, 0.2)' },
	'Styled Components': { background: 'rgba(219, 112, 147, 0.2)' },
	'Framer Motion': { background: 'rgba(242, 77, 62, 0.2)' },
	HTML: { background: 'rgba(227, 76, 38, 0.2)' },
	CSS: { background: 'rgba(21, 114, 182, 0.2)' },
	JavaScript: { background: 'rgba(247, 223, 30, 0.2)' },
	'React Router': { background: 'rgba(202, 66, 69, 0.2)' },
};

const Tag = styled.div`
	display: flex;
	align-items: center;
	padding: 0.3rem 0.5rem;
	border-radius: 0.5rem;
	font-size: 0.8em;
	background: ${({ technology }) => technologyStyles[technology]?.background || 'rgba(224, 224, 224, 0.2)'};
	box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.1);
	position: relative;
	white-space: nowrap;

	&::before {
		content: '';
		inset: 0;
		position: absolute;
		filter: blur(0.5rem);
		background: ${({ technology }) => technologyStyles[technology]?.background || 'rgba(224, 224, 224, 0.2)'};
		opacity: 0;
		z-index: -1;
	}

	&:hover::before {
		opacity: 1;
	}
`;

export const ProjectTag = ({ technology }) => {
	return <Tag technology={technology}>{technology}</Tag>;
};
