import { ReactNode } from 'react'
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import Copyright from './Copyright';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

export default function Layout({children}:Props) {
  return (
		<Container maxWidth='sm'>
			<Header />
			<Toolbar />
			{ children }
			<Copyright />
		</Container>
  );
}
