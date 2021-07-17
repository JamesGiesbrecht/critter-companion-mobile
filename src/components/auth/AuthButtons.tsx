import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Centered from 'src/components/ui/Centered'
import useTheme from 'src/hooks/useTheme'
import { AccountType } from 'src/typescript/enums'
import useStore from 'src/store'

interface Props {
  type: 'signIn' | 'signUp'
  onSubmit: () => void
}

const AuthButtons: FC<Props> = ({ type, onSubmit }) => {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  const [buttonType, setButtonType] = useState(type)
  const setAccountType = useStore((state) => state.setAccountType)

  const handleLogInWithApple = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    onSubmit()
  }
  const handleLogInWithGoogle = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    onSubmit()
  }
  const handleLogInWithFacebook = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    onSubmit()
  }
  const handleLogInWithEmail = () => {
    setAccountType(AccountType.ONLINE_ACCOUNT)
    onSubmit()
  }
  const handleOfflineAccount = () => {
    setAccountType(AccountType.LOCAL_ACCOUNT)
    onSubmit()
  }

  const handleToggleType = () => setButtonType((prev) => (prev === 'signIn' ? 'signUp' : 'signIn'))

  const getButtonText = (provider: string) =>
    `${buttonType === 'signIn' ? 'Sign in' : 'Sign up'} with ${provider}`

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
        <Button
          containerStyle={styles.button}
          buttonStyle={{ backgroundColor: '#3F5AA8' }}
          title={getButtonText('Facebook')}
          icon={<Icon iconStyle={styles.buttonIcon} name="facebook" type="font-awesome" />}
          onPress={handleLogInWithFacebook}
        />
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
          buttonType === 'signIn'
            ? "Don't have an account? Sign Up."
            : 'Already have an account? Sign In.'
        }
        onPress={handleToggleType}
      />
    </View>
  )
}

export default AuthButtons

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
