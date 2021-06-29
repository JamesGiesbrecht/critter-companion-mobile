import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from 'src/navigation'
import useCachedResources from 'src/hooks/useCachedResources'
import useColorScheme from 'src/hooks/useColorScheme'
import theme from 'src/styles/theme'

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
