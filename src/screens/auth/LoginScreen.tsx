import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon } from 'react-native-elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useAuth } from 'src/context/Auth'
import useTheme from 'src/hooks/useTheme'
import useStore from 'src/store'
import { AccountType, FormType } from 'src/typescript/enums'

import Centered from 'src/components/ui/Centered'

const LoginScreen: FC = () => {
  const { signInWithGoogle } = useAuth()
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  const navigation = useNavigation()
  const [buttonType, setButtonType] = useState<FormType>(FormType.SignUp)
  const setAccountType = useStore((state) => state.setAccountType)

  const onSubmit = () => {
    navigation.navigate('Root')
  }

  const handleLogInWithApple = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    onSubmit()
  }
  const handleLogInWithGoogle = async () => {
    try {
      await signInWithGoogle()
      setAccountType(AccountType.ONLINE_ACCOUNT)
      onSubmit()
    } catch (e) {
      console.log('AUTH ERROR', e)
    }
  }
  // const handleLogInWithFacebook = () => {
  //   setAccountType(AccountType.ONLINE_ACCOUNT)
  //   onSubmit()
  // }
  const handleLogInWithEmail = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    navigation.navigate('Email', { type: buttonType })
  }
  const handleOfflineAccount = () => {
    setAccountType(AccountType.LOCAL_ACCOUNT)
    onSubmit()
  }

  const handleToggleType = () =>
    setButtonType((prev) => (prev === FormType.Login ? FormType.SignUp : FormType.Login))

  const getButtonText = (provider: string) =>
    `${buttonType === FormType.Login ? 'Sign in' : 'Sign up'} with ${provider}`

  return (
    <View style={styles.screen}>
      <Centered defaultView style={styles.screen}>
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: 'black' }}
          title={getButtonText('Apple')}
          icon={<Icon iconStyle={styles.buttonIcon} name="apple1" type="antdesign" />}
          onPress={handleLogInWithApple}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#3F81EC' }}
          title={getButtonText('Google')}
          icon={<Icon iconStyle={styles.buttonIcon} name="google" type="antdesign" />}
          onPress={handleLogInWithGoogle}
        />
        {/* <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#3F5AA8' }}
          title={getButtonText('Facebook')}
          icon={<Icon iconStyle={styles.buttonIcon} name="facebook" type="font-awesome" />}
          onPress={handleLogInWithFacebook}
        /> */}
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: theme.primary }}
          title={getButtonText('Email')}
          icon={<Icon iconStyle={styles.buttonIcon} name="ios-mail" type="ionicon" />}
          onPress={handleLogInWithEmail}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: theme.secondary }}
          titleStyle={{ color: 'black' }}
          title="Use an offline account"
          onPress={handleOfflineAccount}
        />
      </Centered>
      <Button
        containerStyle={{ alignItems: 'center', paddingBottom: insets.bottom + 5 }}
        buttonStyle={[styles.button, { backgroundColor: 'white' }]}
        titleStyle={{ color: 'black' }}
        title={
          buttonType === FormType.Login
            ? "Don't have an account? Sign Up."
            : 'Already have an account? Sign In.'
        }
        onPress={handleToggleType}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    width: 300,
    marginTop: 20,
  },
  buttonIcon: {
    marginRight: 10,
    fontSize: 20,
    color: 'white',
  },
  typeToggleContainer: {
    alignItems: 'center',
  },
})
