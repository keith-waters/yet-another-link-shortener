import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Copyright from '../src/Copyright';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Yet Another Link Shortener!
        </Typography>
        <Typography component="p">
					Turn your long links into short links.
        </Typography>
        <Typography component="p">
					This: https://readingwaters.com/notes/yals-technology-choices-and-system-layout	
        </Typography>
        <Typography component="p">
					turns into
        </Typography>
        <Typography component="p">
					This: yals.to/yals-tech
        </Typography>
        <Typography component="p">
					Interested? Sign up for updates!
        </Typography>
				<TextField name='First Name'/>
				<TextField name='Last Name'/>
				<TextField name='Email'/>
				<Button type='submit'>Sign me up!</Button>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
