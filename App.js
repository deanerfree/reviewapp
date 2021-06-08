import React from 'react'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import Home from './screens/home'

export default function App() {
  let [fontsLoaded] = useFonts({ Inter_900Black })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Home />
  }
}
