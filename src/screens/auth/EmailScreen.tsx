import { RouteProp, useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { StyleSheet, View as DefaultView } from 'react-native'
import { Input, Card, Text } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'

import useTheme from 'src/hooks/useTheme'
import { AuthStackParamList } from 'src/typescript/types'

type EmailScreenRouteProp = RouteProp<AuthStackParamList, 'Email'>

interface Props {
  route: EmailScreenRouteProp
}

const EmailScreen: FC<Props> = ({ route }) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const { type } = route.params

  return (
    <DefaultView style={styles.screen}>
      <Card>
        <Text h1 style={styles.title}>
          {type === 'signIn' ? 'Sign In' : 'Sign Up'}
        </Text>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: theme.primary }}
          title={type === 'signIn' ? 'Sign In' : 'Sign Up'}
          onPress={() => {}}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: theme.secondary }}
          title="Back"
          titleStyle={{ color: 'black' }}
          onPress={() => navigation.goBack()}
        />
      </Card>
    </DefaultView>
  )
}

export default EmailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 15,
  },
})
