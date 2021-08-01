import React, { FC } from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from 'src/navigation/DrawerNavigator'
import AuthStack from 'src/navigation/stacks/AuthStack'
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
      initialRouteName={accountType === null ? 'Auth' : 'Root'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Root" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default Navigation
