import styled from '@emotion/styled';

const Button = styled.button`
	color: ${({ primary }) => (primary ? 'hotpink' : 'turquoise')};
`;

export const Test = () => {
	return (
		<>
			<Button>This is a regular button.</Button>
			<Button primary>This is a primary button.</Button>
		</>
	);
};
