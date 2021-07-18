import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

import CritterBottomTabNavigator from 'src/navigation/CrittersBottomTabNavigator'
import SettingsStack from 'src/navigation/stacks/SettingsStack'
import useStore from 'src/store'
import { AccountType } from 'src/typescript/enums'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const navigation = useNavigation()
  const accountType = useStore((state) => state.accountType)
  const setAccountType = useStore((state) => state.setAccountType)

  const handleLogout = () => {
    setAccountType(null)
    navigation.navigate('Login')
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={accountType === AccountType.ONLINE_ACCOUNT ? 'Logout' : 'Sign In'}
            onPress={handleLogout}
          />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="Critters" component={CritterBottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
