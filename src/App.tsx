import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
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
    return <AppLoading />
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
