import React, { FC } from 'react'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import IoniconsHeaderButton from 'src/navigation/buttons/IoniconsHeaderButton'

interface Props {
  onPress: () => void
}

const MenuButton: FC<Props> = ({ onPress }) => (
  <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
    <Item
      title="Menu"
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      onPress={onPress}
    />
  </HeaderButtons>
)

export default MenuButton
