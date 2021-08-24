import React, { FC } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BaseCritter } from '@james-giesbrecht/critter-companion-utility'
import { Button, ListItem } from 'react-native-elements'

const { width } = Dimensions.get('window')

interface Props {
  critter: BaseCritter
}

const CritterRow: FC<Props> = ({ critter }) => (
  <ListItem.Swipeable
    containerStyle={styles.container}
    leftContent={
      <Button
        title="Donated"
        icon={{ name: 'info', color: 'white' }}
        buttonStyle={{ minHeight: '100%' }}
      />
    }>
    <ListItem.Content>
      <ListItem.Title>{critter.name}</ListItem.Title>
    </ListItem.Content>
  </ListItem.Swipeable>
)

export default CritterRow

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
})
