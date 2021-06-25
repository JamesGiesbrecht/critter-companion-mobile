import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuButton from 'src/navigation/buttons/MenuButton'
import LogoutScreen from 'src/screens/LogoutScreen'

const Stack = createStackNavigator()

const LogoutStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Logout"
      component={LogoutScreen}
      options={({ navigation }) => ({
        headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
      })}
    />
  </Stack.Navigator>
)

export default LogoutStack
