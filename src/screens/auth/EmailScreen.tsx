import { RouteProp, useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { StyleSheet, View as DefaultView, KeyboardAvoidingView } from 'react-native'
import { Input, Card, Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from 'src/components/common/Form'

import useTheme from 'src/hooks/useTheme'
import { FormType } from 'src/typescript/enums'
import { AuthStackParamList, InputCollection } from 'src/typescript/types'

type EmailScreenRouteProp = RouteProp<AuthStackParamList, 'Email'>

interface Props {
  route: EmailScreenRouteProp
}

export const emailInputs: InputCollection = {
  email: {
    label: 'Email',
    inputProps: {
      autoCompleteType: 'email',
      textContentType: 'emailAddress',
      autoCapitalize: 'none',
      value: '',
    },
    validation: {
      required: true,
      email: true,
    },
  },
  password: {
    label: 'Password',
    inputProps: {
      autoCompleteType: 'password',
      textContentType: 'password',
      value: '',
    },
    validation: {
      required: true,
      minLength: 6,
    },
  },
  confirmPassword: {
    label: 'Confirm Password',
    inputProps: {
      autoCompleteType: 'password',
      textContentType: 'password',
      value: '',
    },
    validation: {
      required: true,
      matches: { name: 'password' },
      minLength: 6,
    },
  },
}

const EmailScreen: FC<Props> = ({ route }) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const { type } = route.params

  const handleSubmit = () => {
    console.log('Submitting Email')
    navigation.navigate('Root')
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="padding">
        <Card>
          <Text h1 style={styles.title}>
            {type === FormType.Login ? 'Sign In' : 'Sign Up'}
          </Text>
          <Form
            submitButtonProps={{
              containerStyle: styles.button,
              buttonStyle: { backgroundColor: theme.primary },
              title: type === FormType.Login ? 'Sign In' : 'Sign Up',
            }}
            inputs={
              type === FormType.SignUp
                ? emailInputs
                : { email: emailInputs.email, password: emailInputs.password }
            }
            type={type}
            onSubmit={handleSubmit}
          />
          <Button
            containerStyle={styles.button}
            buttonStyle={{ backgroundColor: theme.secondary }}
            title="Back"
            titleStyle={{ color: 'black' }}
            onPress={() => navigation.goBack()}
          />
        </Card>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
