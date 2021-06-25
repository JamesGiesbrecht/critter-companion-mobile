import React, { FC } from 'react'
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons'
import { Ionicons as IoniconsIcon } from '@expo/vector-icons'

const iconFontSize = 23

export const Ionicons: FC<HeaderButtonProps> = (props) => (
  <HeaderButton IconComponent={IoniconsIcon} iconSize={iconFontSize} {...props} />
)
