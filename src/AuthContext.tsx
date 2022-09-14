import { createContext, useState, useContext, ReactNode } from "react";
import { supabase } from './supabaseClient'

const AuthContext = createContext({});

interface Props {
  children?: ReactNode;
}

function AuthContextProvider({ children }:Props) {
  const [auth, setAuth] = useState({});
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') context.setAuth(session)
		if (event == 'SIGNED_OUT') context.setAuth(session)
		
	})
	return context.auth || {}
}

export { AuthContextProvider, useAuth };
