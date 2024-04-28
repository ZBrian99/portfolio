import styled from '@emotion/styled';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Card = styled.div`
	background-color: darkslategray;
	width: 20rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const Title = styled.h3`
	margin: 0 auto;
	padding: 1rem;
	color: white;
`;
const Description = styled.p`
	padding: 1rem;
	font-size: 0.95em;
	color: gray;
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 15rem;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
`;
export const Constellation = () => {
	return (
		<Container>
			<Card>
				<Title>Lorem, ipsum dolor.</Title>
				<Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis deserunt, consectetur eum
					natus aperiam quo dolorem fugit? Nisi, illum. Dolor in atque cupiditate qui unde praesentium ipsa
					ullam facilis.
				</Description>
				<ImageContainer>
					<Image src='src/assets/images/galaxy.png'></Image>
				</ImageContainer>
			</Card>
		</Container>
	);
};
