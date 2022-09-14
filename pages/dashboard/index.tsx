import { useEffect } from 'react'
import type { NextPage } from "next";
import Layout from "../../src/Layout";
import { useRouter } from 'next/router';
import { useAuth } from '../../src/AuthContext'

const Dashboard: NextPage = () => {
  const session = useAuth();
	const router = useRouter()

	useEffect(() => {
		if(Object.keys(session).length === 0) router.push('/')
	}, [session])

  return (
    <Layout>
			<p> its' a dashboard</p>
    </Layout>
  );
};

export default Dashboard;
