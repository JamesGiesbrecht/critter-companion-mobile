import React from 'react'
import { useNavigation } from '@react-navigation/native'

import EmailForm from 'src/components/auth/EmailForm'

const LoginScreen = () => {
  const navigation = useNavigation()

  return <EmailForm type="signUp" onSubmit={() => {}} />
}

export default LoginScreen
