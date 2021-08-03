import React from 'react'
import { ImageBackground } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import EmailScreen from 'src/screens/auth/EmailScreen'
import LoginScreen from 'src/screens/auth/LoginScreen'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImage = require('src/assets/images/background.png')

const Stack = createStackNavigator()

const AuthStack = () => (
  <ImageBackground
    source={backgroundImage}
    style={{ flex: 1 }}
    imageStyle={{ resizeMode: 'repeat' }}>
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
    </Stack.Navigator>
  </ImageBackground>
)

export default AuthStack
