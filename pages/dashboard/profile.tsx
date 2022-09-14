import { useEffect } from 'react'
import type { NextPage } from "next";
import Layout from "../../src/Layout";
import { useRouter } from 'next/router';
import { useAuth } from '../../src/AuthContext'

const Profile: NextPage = () => {
  const session = useAuth();
	const router = useRouter()

	useEffect(() => {
		if(!session) router.push('/')
	}, [session])

  return (
    <Layout>
			<p> its' a profile page :)</p>
    </Layout>
  );
};

export default Profile;
