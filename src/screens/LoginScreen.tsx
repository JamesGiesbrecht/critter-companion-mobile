import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Button, Icon } from 'react-native-elements'

import { Text } from 'src/components/Themed'
import Centered from 'src/components/ui/Centered'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImage = require('src/assets/images/background.png')

const LoginScreen = () => {
  const handleLogInWithApple = () => console.log('Logging in with Apple')
  const handleLogInWithGoogle = () => console.log('Logging in with Google')
  const handleLogInWithFacebook = () => console.log('Logging in with Facebook')
  const handleLogInWithEmail = () => console.log('Logging in with Email')

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: 'repeat' }}>
      <Centered defaultView>
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: 'black' }}
          title="Log in with Apple"
          icon={<Icon iconStyle={styles.buttonIcon} name="apple1" type="antdesign" />}
          onPress={handleLogInWithApple}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#3F81EC' }}
          title="Log in with Google"
          icon={<Icon iconStyle={styles.buttonIcon} name="google" type="antdesign" />}
          onPress={handleLogInWithGoogle}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#3F5AA8' }}
          title="Log in with Facebook"
          icon={<Icon iconStyle={styles.buttonIcon} name="facebook" type="font-awesome" />}
          onPress={handleLogInWithFacebook}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#388e3c' }}
          title="Log in with Email"
          icon={<Icon iconStyle={styles.buttonIcon} name="ios-mail" type="ionicon" />}
          onPress={handleLogInWithEmail}
        />
      </Centered>
    </ImageBackground>
  )
}

export default LoginScreen

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
  },
  button: {
    width: 300,
    marginTop: 20,
  },
  buttonIcon: {
    marginRight: 10,
    fontSize: 20,
    color: 'white',
  },
})
