import React, { FC } from 'react'

import { Text, TextProps } from 'src/components/Themed'

export const MonoText: FC<TextProps> = (props) => {
  const { style, ...other } = props
  return <Text {...other} style={[style, { fontFamily: 'space-mono' }]} />
}
