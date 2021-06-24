import React from 'react'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import IoniconsHeaderButton from 'src/navigation/buttons/IoniconsHeaderButton'

const MenuButton = ({ navigation }: any) => (
  <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
    <Item
      title="Menu"
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>
)

export default MenuButton
