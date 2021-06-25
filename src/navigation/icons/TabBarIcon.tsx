import React, { ComponentProps } from 'react'
import { MaterialCommunityIcons as MaterialCommunityIcon } from '@expo/vector-icons'

const iconFontSize = 30

export const MaterialCommunityIcons = (props: {
  name: ComponentProps<typeof MaterialCommunityIcon>['name']
  color: string
}) => {
  return <MaterialCommunityIcon size={iconFontSize} style={{ marginBottom: -3 }} {...props} />
}
