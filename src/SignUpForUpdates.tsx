import type { NextComponentType } from 'next';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { supabase } from './supabaseClient';


const SignUpForUpdates: NextComponentType = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [showStatus, setShowStatus] = useState(false)
	const [statusMessage, setStatusMessage] = useState("Thanks for signing up! I'll be in touch with updates soon.")

	const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

	const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmailError(false)
    setEmail(event.target.value);
  };

	const handleClick = async () => {
		if(!email) {
			setEmailError(true)
			return
		}
		setIsLoading(true)
		const res = await supabase.from('email_sign_ups').insert({firstName, lastName, email})
		if(res.status === 201) {
			setShowStatus(true)
		} else if(res.error) {
			setStatusMessage("Thats odd. Something went wrong. I'm taking a look at it now.")
			setShowStatus(true)
		}
		setIsLoading(false)
	}




  return (
		<>
			<Typography variant="h3" component="h2">
				Sign up for updates
			</Typography>
			<TextField disabled={showStatus} style={{margin: '10px', width: '300px'}} label='First Name' value={firstName} onChange={handleFirstNameChange}/>
			<TextField disabled={showStatus} style={{margin: '10px', width: '300px'}} label='Last Name' value={lastName} onChange={handleLastNameChange}/>
			<TextField disabled={showStatus} style={{margin: '10px', width: '300px'}} error={emailError} required label='Email' value={email} onChange={handleEmailChange}/>
			<Button disabled={isLoading || showStatus} type='submit' variant="contained" onClick={handleClick}>Sign me up!</Button>
			{ showStatus && <Typography component="p">{statusMessage}</Typography> }
		</>
	)
}

export default SignUpForUpdates
