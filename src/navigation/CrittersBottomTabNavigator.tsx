import React, { ComponentProps } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from 'src/constants/Colors'
import useColorScheme from 'src/hooks/useColorScheme'
import BugsScreen from 'src/screens/BugsScreen'
import FishScreen from 'src/screens/FishScreen'
import SeaCreaturesScreen from 'src/screens/SeaCreaturesScreen'
import MenuButton from './buttons/MenuButton'

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
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <CrittersBottomTab.Screen
        name="Fish"
        component={FishNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <CrittersBottomTab.Screen
        name="Sea Creatures"
        component={SeaCreaturesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </CrittersBottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
const TabBarIcon = (props: { name: ComponentProps<typeof Ionicons>['name']; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
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
