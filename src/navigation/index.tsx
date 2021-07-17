import React, { FC } from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from 'src/navigation/DrawerNavigator'
import { RootStackParamList } from 'src/typescript/types'
import LoginStack from 'src/navigation/stacks/LoginStack'

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
const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={true ? LoginStack : DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default Navigation
