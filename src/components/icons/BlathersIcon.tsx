import React from 'react'
import { createIconSetFromFontello } from '@expo/vector-icons'

import fontelloConfig from 'src/assets/icons/blathersConfig.json'
import Colors from 'src/constants/Colors'
import useColorScheme from 'src/hooks/useColorScheme'

const Icon = createIconSetFromFontello(
  fontelloConfig,
  'blathers',
  '../../assets/icons/Blathers.ttf',
)

// FIXME: Icon Props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlathersIcon = (props: any) => {
  const colorScheme = useColorScheme()
  return <Icon name="blatherslogo" color={Colors[colorScheme].text} {...props} />
}

export default BlathersIcon
