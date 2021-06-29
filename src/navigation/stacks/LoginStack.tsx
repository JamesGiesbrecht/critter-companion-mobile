import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuButton from 'src/navigation/buttons/MenuButton'
import LoginScreen from 'src/screens/LoginScreen'

const Stack = createStackNavigator()

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={({ navigation }) => ({
        headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
      })}
    />
  </Stack.Navigator>
)

export default LoginStack
