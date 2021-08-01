import React from 'react'
import { useNavigation } from '@react-navigation/native'

import AuthButtons from 'src/components/auth/AuthButtons'
import useStore from 'src/store'

const LoginScreen = () => {
  const accountType = useStore((state) => state.accountType)
  const navigation = useNavigation()

  return (
    <AuthButtons
      type="signUp"
      onSubmit={() => {
        console.log('Submitting Login', accountType)
        navigation.navigate('Root')
      }}
    />
  )
}

export default LoginScreen
