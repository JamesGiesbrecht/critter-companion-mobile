import React, { useState, useEffect, useContext, createContext, FC } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import firebase from 'firebase'

import env from 'src/constants/env'
import { firebaseAuth } from 'src/firebase/config'

interface AuthContextType {
  user: firebase.User | null | undefined
  login: typeof firebaseAuth.signInWithEmailAndPassword
  logout: typeof firebaseAuth.signOut
  signUp: typeof firebaseAuth.createUserWithEmailAndPassword
  resetPassword: typeof firebaseAuth.sendPasswordResetEmail
  signInWithGoogle: () => Promise<firebase.auth.UserCredential>
}

const noAuthProvider = () => {
  throw new Error(`This component should be wrapped with a Auth Context Provider.`)
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: noAuthProvider,
  logout: noAuthProvider,
  signUp: noAuthProvider,
  resetPassword: noAuthProvider,
  signInWithGoogle: noAuthProvider,
})

WebBrowser.maybeCompleteAuthSession()

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: env.GOOGLE_WEB_CLIENT_ID,
  })

  const handleSignInWithGoogle = async () => {
    const result = await promptAsync()
    if (result.type === 'success') {
      // eslint-disable-next-line camelcase
      const { id_token } = result.params
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
      return firebaseAuth.signInWithCredential(credential)
    }
    throw new Error('Error signing in with Google')
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((authUser) => setUser(authUser))
    return () => {
      unsubscribe()
    }
  })

  const store = {
    user,
    login: firebaseAuth.signInWithEmailAndPassword.bind(firebaseAuth),
    logout: () => firebaseAuth.signOut(),
    signUp: firebaseAuth.createUserWithEmailAndPassword.bind(firebaseAuth),
    resetPassword: firebaseAuth.sendPasswordResetEmail.bind(firebaseAuth),
    signInWithGoogle: handleSignInWithGoogle,
  }
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
