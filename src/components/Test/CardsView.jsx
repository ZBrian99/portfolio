import { TestCardGlare } from './TestCardGlare';
import { TestCardPerspective } from './TestCardPerspective';
import { TestCardPerspectiveGlare } from './TestCardPerspectiveGlare';

export const CardsView = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<TestCardGlare />
			<TestCardPerspective />
			<TestCardPerspectiveGlare />
		</div>
	);
};
