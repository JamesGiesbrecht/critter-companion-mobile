import React from 'react'
import { StyleSheet } from 'react-native'
import { seaData } from '@james-giesbrecht/critter-companion-utility'

import CritterList from 'src/components/critters/CritterList'
import Centered from 'src/components/ui/Centered'

const SeaCreaturesScreen = () => {
  return (
    <Centered defaultView>
      <CritterList critters={seaData} />
    </Centered>
  )
}

export default SeaCreaturesScreen

const styles = StyleSheet.create({})
