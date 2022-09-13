import { useEffect } from 'react'
import type { NextPage } from "next";
import Layout from "../../src/Layout";
import { Auth } from "@supabase/ui";
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
  const { user } = Auth.useUser();
	const router = useRouter()

	useEffect(() => {
		if(!user) router.push('/')
	}, [user])

  return (
    <Layout>
			<p> its' a profile page :)</p>
    </Layout>
  );
};

export default Profile;
