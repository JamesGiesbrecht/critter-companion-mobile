import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'

import { useAuth } from 'src/context/Auth'
import { firebaseDb } from 'src/firebase/config'

import { Text } from 'src/components/Themed'
import Centered from 'src/components/ui/Centered'

const BugsScreen = () => {
  const { user } = useAuth()

  const handleGetDonated = async () => {
    console.log('User', user)
    if (user) {
      const result = await firebaseDb.ref(`users/${user.uid}/donated`).get()
      console.log('DB', result)
    }
  }

  return (
    <Centered>
      <Text>Bugs</Text>
      <Button
        title="Get Donated"
        onPress={handleGetDonated}
        buttonStyle={{ backgroundColor: '#3F81EC' }}
      />
      <Text>Bugs</Text>
    </Centered>
  )
}

export default BugsScreen

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({})
