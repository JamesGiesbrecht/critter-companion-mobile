import React from 'react'
import { Button, StyleSheet } from 'react-native'

import { Text } from 'src/components/Themed'
import Centered from 'src/components/ui/Centered'

const LoginScreen = () => {
  const handleLogInWithGoogle = () => console.log('Logging in with Google')
  const handleLogInWithApple = () => console.log('Logging in with Apple')
  const handleLogInWithEmail = () => console.log('Logging in with Email')

  return (
    <Centered>
      <Button title="Log in with Google" onPress={handleLogInWithGoogle} />
      <Button title="Log in with Apple" onPress={handleLogInWithApple} />
      <Button title="Log in with Email" onPress={handleLogInWithEmail} />
    </Centered>
  )
}

export default LoginScreen

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({})
