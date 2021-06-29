import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

import AuthButtons from 'src/components/auth/AuthButtons'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImage = require('src/assets/images/background.png')

const LoginScreen = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: 'repeat' }}>
      <AuthButtons type="signUp" />
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
})
