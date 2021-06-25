import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from 'src/constants/Colors'
import useColorScheme from 'src/hooks/useColorScheme'
import MenuButton from 'src/navigation/buttons/MenuButton'
import { MaterialCommunityIcons } from 'src/navigation/icons/TabBarIcon'
import BugsScreen from 'src/screens/BugsScreen'
import FishScreen from 'src/screens/FishScreen'
import SeaCreaturesScreen from 'src/screens/SeaCreaturesScreen'

const CrittersBottomTab = createBottomTabNavigator()

const CritterBottomTabNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <CrittersBottomTab.Navigator
      initialRouteName="Bugs"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <CrittersBottomTab.Screen
        name="Bugs"
        component={BugsNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="ladybug" color={color} />,
        }}
      />
      <CrittersBottomTab.Screen
        name="Fish"
        component={FishNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="fish" color={color} />,
        }}
      />
      <CrittersBottomTab.Screen
        name="Sea Creatures"
        component={SeaCreaturesNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="jellyfish" color={color} />,
        }}
      />
    </CrittersBottomTab.Navigator>
  )
}

const BugsStack = createStackNavigator()
const BugsNavigator = () => {
  return (
    <BugsStack.Navigator>
      <BugsStack.Screen
        name="Bugs"
        component={BugsScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
        })}
      />
    </BugsStack.Navigator>
  )
}

const FishStack = createStackNavigator()
const FishNavigator = () => {
  return (
    <FishStack.Navigator>
      <FishStack.Screen
        name="Fish"
        component={FishScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
        })}
      />
    </FishStack.Navigator>
  )
}

const SeaCreaturesStack = createStackNavigator()
const SeaCreaturesNavigator = () => {
  return (
    <SeaCreaturesStack.Navigator>
      <SeaCreaturesStack.Screen
        name="Sea Creatures"
        component={SeaCreaturesScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />,
        })}
      />
    </SeaCreaturesStack.Navigator>
  )
}

export default CritterBottomTabNavigator
