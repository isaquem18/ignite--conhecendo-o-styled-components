import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface StateProps {
  user: UserProps;
  setUser: (x: any) => void;
  signInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as StateProps);

interface Props {
  children: ReactNode;
}

interface UserProps {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  },
  type: string;
}

export function AuthProvider({children}: Props) {
  const [ user, setUser ] = useState<UserProps>({} as UserProps); 

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
      
      if ( type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();
        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          picture: userInfo.picture
        })
      }

    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const { user, setUser, signInWithGoogle } = useContext(AuthContext)

  return { user, setUser, signInWithGoogle };
}