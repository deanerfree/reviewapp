import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../globalStyles/global'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home on the range</Text>
    </View>
  )
}

export default Home
