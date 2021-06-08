import React from 'react'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import Navigator from './routes/homeStack'

export default function App() {
  let [fontsLoaded] = useFonts({ Inter_900Black })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Navigator />
  }
}
