import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../globalStyles/global'
import Card from '../shared/card'
const About = () => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>About Something</Text>
      </Card>
    </View>
  )
}
export default About
