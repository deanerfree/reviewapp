import React, { useState } from 'react'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import { AppLoading } from 'expo'
import Home from './screens/home'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <AppLoading startAsync={useFonts} onFinish={() => setFontsLoaded(true)} />
    )
  } else {
    return <Home />
  }
}
