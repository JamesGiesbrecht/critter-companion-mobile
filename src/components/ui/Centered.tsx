import React, { FC } from 'react'
import { StyleSheet, View as RnView } from 'react-native'

import { View as ThemedView, ViewProps } from 'src/components/Themed'

interface Props extends ViewProps {
  defaultView?: boolean
}

const Centered: FC<Props> = (props) => {
  const { defaultView, children, style, ...other } = props
  const View = defaultView ? RnView : ThemedView
  return (
    <View style={[styles.screen, style]} {...other}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Centered
