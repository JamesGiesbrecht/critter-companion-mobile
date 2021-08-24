import { RouteProp, useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'

import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import Form from 'src/components/common/Form'
import { useAuth } from 'src/context/Auth'
import useTheme from 'src/hooks/useTheme'
import { AuthError, FormType } from 'src/typescript/enums'
import { AuthStackParamList, FormState, InputCollection } from 'src/typescript/types'

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
  const { login, signUp } = useAuth()
  const [submitError, setSubmitError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (formState: FormState) => {
    setIsLoading(true)
    let result
    const email = formState.inputs.email.inputProps.value || ''
    const password = formState.inputs.password.inputProps.value || ''
    try {
      if (type === FormType.Login) {
        result = await login(email, password)
      } else if (type === FormType.SignUp) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        result = await signUp(email, password)
      } else {
        throw new Error(`Unhandled submission type: ${type}`)
      }
      navigation.navigate('Root')
    } catch (error) {
      let errorMessage
      switch (error.code) {
        case AuthError.InvalidEmail:
          errorMessage = 'Please enter a valid email address.'
          break
        case AuthError.UserDisabled:
          errorMessage = `The account associated with ${email} has been disabled. Contact support for help with this issue.`
          break
        case AuthError.UserNotFound:
          errorMessage = 'An account with this email does not exist, did you mean to sign up?'
          break
        case AuthError.WrongPassword:
          errorMessage =
            'Incorrect password provided. Reset your password, or try signing in with another provider like Google.'
          break
        case AuthError.EmailAlreadyInUse:
          errorMessage =
            'An account already exists with this email, did you mean to login? An account may also already exist with another provider like Google.'
          break

        case AuthError.TooManyRequests:
          errorMessage = 'You have made too many requests, try again later.'
          break
        case AuthError.OperationNotAllowed:
        case AuthError.MissingContinueUri:
        case AuthError.MissingIOSBundleId:
        case AuthError.MissingAndroidPkgName:
        case AuthError.InvalidContinueUri:
        case AuthError.UnauthorizedContinueUri:
          errorMessage =
            'There is an error with the app configuration, please notify the administrator.'
          break
        case AuthError.WeakPassword:
          errorMessage = error.message
          break
        default:
          errorMessage = 'Something went wrong, try again later.'
      }
      setSubmitError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="padding">
        <Card>
          <Text h1 style={styles.title}>
            {type === FormType.Login ? 'Sign In' : 'Sign Up'}
          </Text>
          {!!submitError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{submitError}</Text>
            </View>
          )}
          <Form
            submitButtonProps={{
              containerStyle: styles.button,
              buttonStyle: { backgroundColor: theme.primary },
              title: type === FormType.Login ? 'Sign In' : 'Sign Up',
              loading: isLoading,
            }}
            inputs={
              type === FormType.SignUp
                ? emailInputs
                : { email: emailInputs.email, password: emailInputs.password }
            }
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

      <Button
        containerStyle={{ alignItems: 'center' }}
        buttonStyle={[styles.button, { backgroundColor: 'white' }]}
        titleStyle={{ color: 'black' }}
        title={
          type === FormType.Login
            ? "Don't have an account? Sign Up."
            : 'Already have an account? Sign In.'
        }
        onPress={() => {}}
      />
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
  errorContainer: {
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 15,
  },
})
