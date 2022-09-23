import { useEffect, useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Layout from "../src/Layout";
import { supabase } from "../src/supabaseClient";
import { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from '../src/AuthContext'

const PasswordReset: NextPage = () => {
  const defaultLoginFields = {
    email: "",
  };
  const [fields, setFields] = useState(defaultLoginFields);
	const [message, setMessage] = useState('')
  const session = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(session).length > 0) router.push("/dashboard");
  }, [session]);

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(
      fields.email
    );

		if(error) setMessage(error.message)
  };

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <Layout>
      <TextField
        disabled={false}
        style={{ margin: "10px", width: "300px" }}
        name="email"
        type="email"
        label="Email"
        value={fields.email}
        onChange={handleInputChange}
      />
			<Button
				type="submit"
				onClick={handlePasswordReset}
			>
				Reset password	
			</Button>
			<Typography color={message ? 'red' : 'green'}>{message}</Typography>
    </Layout>
  );
};

export default PasswordReset;
