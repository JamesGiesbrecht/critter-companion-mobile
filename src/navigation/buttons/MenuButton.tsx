import React, { FC } from 'react'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from 'src/navigation/icons/HeaderIcon'

interface Props {
  onPress: () => void
}

const MenuButton: FC<Props> = ({ onPress }) => (
  <HeaderButtons HeaderButtonComponent={Ionicons}>
    <Item
      title="Menu"
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      onPress={onPress}
    />
  </HeaderButtons>
)

export default MenuButton
