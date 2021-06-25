import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LogoutStack from 'src/navigation/stacks/LogoutStack'
import SettingsStack from 'src/navigation/stacks/SettingsStack'
import CritterBottomTabNavigator from 'src/navigation/CrittersBottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Critters" component={CritterBottomTabNavigator} />
    <Drawer.Screen name="Settings" component={SettingsStack} />
    <Drawer.Screen name="Logout" component={LogoutStack} />
  </Drawer.Navigator>
)

export default DrawerNavigator
