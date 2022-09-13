import Head from 'next/head';
import PlausibleProvider from 'next-plausible'
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { supabase } from "../src/supabaseClient";
import { Auth } from "@supabase/ui";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	console.log( 'process.env.NEXT_PUBLIC_DOMAIN', process.env.NEXT_PUBLIC_DOMAIN)
	return (
		<PlausibleProvider domain={process.env.NEXT_PUBLIC_DOMAIN || ''}>
			<CacheProvider value={emotionCache}>
				<Auth.UserContextProvider supabaseClient={supabase}>
					<Head>
						<meta name="viewport" content="initial-scale=1, width=device-width" />
					</Head>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</Auth.UserContextProvider>
			</CacheProvider>
		</PlausibleProvider>
  );
}
