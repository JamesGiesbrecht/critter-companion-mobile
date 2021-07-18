import React, { FC } from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from 'src/navigation/DrawerNavigator'
import LoginStack from 'src/navigation/stacks/LoginStack'
import useStore from 'src/store'

interface Props {
  colorScheme: ColorSchemeName
}

const Navigation: FC<Props> = ({ colorScheme }) => {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator()

const RootNavigator = () => {
  const accountType = useStore((state) => state.accountType)
  return (
    <Stack.Navigator
      initialRouteName={accountType === null ? 'Login' : 'Root'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginStack} />
      <Stack.Screen name="Root" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default Navigation
