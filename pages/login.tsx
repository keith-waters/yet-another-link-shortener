import { useEffect, useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Layout from "../src/Layout";
import { supabase } from "../src/supabaseClient";
import { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import { useAuth } from '../src/AuthContext'

const Login: NextPage = () => {
  const defaultLoginFields = {
    email: "",
    password: "",
  };
  const [fields, setFields] = useState(defaultLoginFields);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [message, setMessage] = useState('')
  const session = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/dashboard");
  }, [session]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signIn({
      email: fields.email,
      password: fields.password,
    });

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
      <TextField
        disabled={false}
        style={{ margin: "10px", width: "300px" }}
        name="password"
        type={passwordVisibility ? "text" : "password"}
        label="Password"
        value={fields.password}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {passwordVisibility ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </Button>
            </InputAdornment>
          ),
        }}
      />
			<Button
				type="submit"
				onClick={handleLogin}
			>
				Login	
			</Button>
			<Typography color={message ? 'red' : 'green'}>{message}</Typography>
    </Layout>
  );
};

export default Login;
