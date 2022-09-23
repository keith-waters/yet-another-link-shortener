import { createContext, useState, useContext, ReactNode, Dispatch } from "react";
import { supabase } from './supabaseClient'
import { Session } from '@supabase/supabase-js'

interface ContextState {
	setAuth: Dispatch<Session>,
	auth: object,
}

const AuthContext = createContext<ContextState | null>(null);

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
	if(!context) {
		return {}
	}
	supabase.auth.onAuthStateChange((event, session) => {
		if(!session) return
		if (event == 'SIGNED_IN') context.setAuth(session)
		if (event == 'SIGNED_OUT') context.setAuth(session)
		
	})
	return context.auth || {}
}

export { AuthContextProvider, useAuth };
