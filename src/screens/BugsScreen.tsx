import React from 'react'
import { StyleSheet } from 'react-native'
import { bugsData } from '@james-giesbrecht/critter-companion-utility'
import { Button } from 'react-native-elements'

import { useAuth } from 'src/context/Auth'
import { firebaseDb } from 'src/firebase/config'

import CritterList from 'src/components/critters/CritterList'
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
      <Button
        title="Get Donated"
        onPress={handleGetDonated}
        buttonStyle={{ backgroundColor: '#3F81EC' }}
      />
      <CritterList critters={bugsData.slice(0, 20)} />
    </Centered>
  )
}

export default BugsScreen

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({})
