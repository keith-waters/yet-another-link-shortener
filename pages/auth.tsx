import { useEffect } from 'react'
import type { NextPage } from "next";
import Layout from "../src/Layout";
import { supabase } from "../src/supabaseClient";
import { Auth, Button } from "@supabase/ui";
import { useRouter } from 'next/router';

const AuthPage: NextPage = () => {
  const { user } = Auth.useUser();
	const router = useRouter()

	useEffect(() => {
		if(user) router.push('/dashboard')
	}, [user])

  return (
    <Layout>
      {user ? (
        <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>
      ) : (
        <Auth supabaseClient={supabase} />
      )}
      <button onClick={() => console.log("user", user)}>sho me</button>
    </Layout>
  );
};

export default AuthPage;
