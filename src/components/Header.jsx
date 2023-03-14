import { useContext } from 'react';
import { DataContext } from '../context';

export const Header = () => {
	const {
		aboutMe: { description },
	} = useContext(DataContext);
	return <div>{description}</div>;
};
