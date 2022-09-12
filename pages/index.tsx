import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import SignUpForUpdates from '../src/SignUpForUpdates';
import { supabase } from '../src/supabaseClient';
import { Auth, Button } from '@supabase/ui'


const Cont = () => {
	const { user } = Auth.useUser()
	return (
		<button 
			onClick={() => console.log('user', user)}
		> 
			sho me
		</button>
	)
}
const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
			<Auth.UserContextProvider supabaseClient={supabase}>
				<Auth supabaseClient={supabase}/>
				<Cont />
			</Auth.UserContextProvider>
			<Button onClick={() => supabase.auth.signOut()}>
          Sign out
      </Button>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          <strong>Yet Another Link Shortener!</strong>
        </Typography>

        <Typography variant="h3" component="h2">
					Turn your long links into short links
        </Typography>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={`/rulers.jpg`}
						alt='Rulers'
						loading="lazy"
						width='150px'
						style={{borderRadius: "10px", margin: "10px"}}
					/>
					<Typography component="p">
						This: <i>"https://readingwaters.com/notes/yals-technology-choices-and-system-layout"</i> <br/>turns into this: <i>"yals.to/yals-tech"</i>
					</Typography>
				</Box>

        <Typography variant="h3" component="h2">
					See all your short links in one place
        </Typography>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={`/dashboard-mockup.png`}
						alt='User dashboard mockup'
						loading="lazy"
						width='350px'
						style={{borderRadius: "10px", margin: "10px"}}
					/>
					<Typography component="p">
						In the dashboard you'll be able to manage all your links at the click of a button. You can create, edit, and delete everything in one place.
					</Typography>
				</Box>

				<Typography variant="h3" component="h2">
					Work with this guy
				</Typography>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={`/keith-headshot-2.jpg`}
						alt='Headshot of Keith'
						loading="lazy"
						height='200px'
						style={{borderRadius: "10px", margin: "10px"}}
					/>
					<Typography 
						component="p"
						style={{margin: "10px"}}
					>
						Hi, I'm Keith. I'm the only person that works on YALS. So, any ideas, questions, comments, or concerns go directly to me.
					</Typography>
				</Box>

				<SignUpForUpdates />

        <Copyright />
      </Box>
    </Container>

  );
};

export default Home;
