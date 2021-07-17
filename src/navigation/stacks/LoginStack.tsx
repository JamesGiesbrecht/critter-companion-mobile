import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'src/screens/LoginScreen'

const Stack = createStackNavigator()

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export default LoginStack
