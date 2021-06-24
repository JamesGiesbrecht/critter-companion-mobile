import React, { ReactNode, FC } from 'react'
import { StyleSheet } from 'react-native'

import { View } from 'src/components/Themed'

interface Props {
  children: ReactNode
}

const Centered: FC<Props> = ({ children }) => <View style={styles.screen}>{children}</View>

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Centered
