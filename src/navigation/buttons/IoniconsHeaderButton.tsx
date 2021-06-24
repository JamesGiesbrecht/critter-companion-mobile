import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props: HeaderButtonProps) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)

export default IoniconsHeaderButton
