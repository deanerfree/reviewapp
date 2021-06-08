import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View>
      <Text style={styles.container}>Home on the range</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
export default Home
