import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'

import CritterBottomTabNavigator from 'src/navigation/CrittersBottomTabNavigator'
import SettingsStack from 'src/navigation/stacks/SettingsStack'
import useStore from 'src/store'
import { AccountType } from 'src/typescript/enums'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const accountType = useStore((state) => state.accountType)
  const setAccountType = useStore((state) => state.setAccountType)

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={accountType === AccountType.ONLINE_ACCOUNT ? 'Logout' : 'Sign In'}
            onPress={() => setAccountType(null)}
          />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="Critters" component={CritterBottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
