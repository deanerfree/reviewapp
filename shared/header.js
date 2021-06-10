import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerThing}>
        <Text style={styles.headerText}>{title}</Text>
        <Image
          style={styles.headerImage}
          source={require('../assets/heart_logo.png')}
        />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
  headerThing: {
    flexDirection: 'row',
  },
})
export default Header
