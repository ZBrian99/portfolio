import styled from '@emotion/styled';

const CardStyled = styled.div`
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);
	backdrop-filter: blur(0.625rem);
	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.18);
	width: 20rem;
	height: 30rem;
`;
const CardStyled2 = styled.div`
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);
	backdrop-filter: blur(0.625rem);
	border-radius: 1rem;
	width: 20rem;
	height: 30rem;
`;
const CardStyled3 = styled.div`
	backdrop-filter: blur(16px) saturate(180%);
	/* background-color: rgba(17, 25, 40, 0.75); */
	background: linear-gradient(135deg, rgba(17, 25, 40, 0.55), rgba(17, 25, 40, 0.75));

	border-radius: 1rem;
	width: 20rem;
	height: 30rem;
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);
`;
const CardStyled4 = styled.div`
	backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(17, 25, 40, 0.75);

	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.125);
	width: 20rem;
	height: 30rem;
	box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.37);
`;

export const GlassCard = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				gap: '3rem',
				// background: 'linear-gradient(45deg, #f3ec78, #af4261)',
			}}
		>
			<CardStyled></CardStyled>
			<CardStyled2></CardStyled2>
			<CardStyled3></CardStyled3>
			<CardStyled4></CardStyled4>
		</div>
	);
};
