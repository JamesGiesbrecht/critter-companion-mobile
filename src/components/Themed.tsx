/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'

import { useThemeColor } from 'src/hooks/useTheme'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...other } = props
  const color = useThemeColor('text', { light: lightColor, dark: darkColor })

  return <DefaultText style={[{ color }, style]} {...other} />
}

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...other } = props
  const backgroundColor = useThemeColor('background', { light: lightColor, dark: darkColor })

  return <DefaultView style={[{ backgroundColor }, style]} {...other} />
}
