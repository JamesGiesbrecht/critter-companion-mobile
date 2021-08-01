import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  type: 'signIn' | 'signUp'
  onSubmit: () => void
}

const EmailForm: FC<Props> = ({ type }) => {
  return (
    <View style={styles.root}>
      <Text>Email {type}</Text>
    </View>
  )
}

export default EmailForm

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
