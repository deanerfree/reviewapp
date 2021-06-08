import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home on the range</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'Inter_900Black',
    fontSize: 18,
  },
})
export default Home
