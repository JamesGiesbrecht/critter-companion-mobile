import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

import AuthButtons from 'src/components/auth/AuthButtons'
import useStore from 'src/store'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImage = require('src/assets/images/background.png')

const LoginScreen = () => {
  const accountType = useStore((state) => state.accountType)
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: 'repeat' }}>
      <AuthButtons
        type="signUp"
        onSubmit={() => {
          console.log('Submitting Login', accountType)
        }}
      />
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
})
