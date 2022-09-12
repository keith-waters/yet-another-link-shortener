import { ReactNode } from 'react'
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

export default function Layout({children}:Props) {
  return (
		<Container maxWidth='sm'>
			<Header />
			{ children }
			<Copyright />
		</Container>
  );
}
