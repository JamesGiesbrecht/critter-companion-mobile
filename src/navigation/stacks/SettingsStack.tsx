import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuButton from 'src/navigation/buttons/MenuButton'
import SettingsScreen from 'src/screens/SettingsScreen'

const Stack = createStackNavigator()

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ navigation }) => ({
        headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
      })}
    />
  </Stack.Navigator>
)

export default SettingsStack
