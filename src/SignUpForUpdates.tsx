import type { NextComponentType } from 'next';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpForUpdates: NextComponentType = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

	const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

	const handleClick = () => {
		console.log(firstName, lastName, email)
	}



  return (
		<>
			<Typography variant="h3" component="h2">
				Sign up for updates
			</Typography>
			<TextField style={{margin: '10px', width: '300px'}} required label='First Name' value={firstName} onChange={handleFirstNameChange}/>
			<TextField style={{margin: '10px', width: '300px'}} required label='Last Name' value={lastName} onChange={handleLastNameChange}/>
			<TextField style={{margin: '10px', width: '300px'}} required label='Email' value={email} onChange={handleEmailChange}/>
			<Button type='submit' variant="contained" onClick={handleClick}>Sign me up!</Button>
		</>
	)
}

export default SignUpForUpdates
