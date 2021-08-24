import React, { FC } from 'react'
import { FlatList, StyleSheet, ListRenderItem } from 'react-native'
import { BaseCritter } from '@james-giesbrecht/critter-companion-utility'

import CritterRow from 'src/components/critters/CritterRow'

interface Props {
  critters: BaseCritter[]
}

const CritterList: FC<Props> = ({ critters }) => {
  const renderRow: ListRenderItem<BaseCritter> = ({ item }) => <CritterRow critter={item} />

  return <FlatList data={critters} renderItem={renderRow} />
}

export default CritterList

const styles = StyleSheet.create({})
