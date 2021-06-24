import React, { FC } from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import NotFoundScreen from 'src/screens/NotFoundScreen'
import { RootStackParamList } from 'src/types'
import BottomTabNavigator from 'src/navigation/BottomTabNavigator'
import LinkingConfiguration from 'src/navigation/LinkingConfiguration'

interface Props {
  colorScheme: ColorSchemeName
}

const Navigation: FC<Props> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}

export default Navigation
