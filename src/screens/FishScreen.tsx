import React from 'react'
import { StyleSheet } from 'react-native'
import { fishData } from '@james-giesbrecht/critter-companion-utility'

import CritterList from 'src/components/critters/CritterList'
import Centered from 'src/components/ui/Centered'

const FishScreen = () => {
  return (
    <Centered defaultView>
      <CritterList critters={fishData} />
    </Centered>
  )
}

export default FishScreen

const styles = StyleSheet.create({})
