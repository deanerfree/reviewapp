import React from 'react'
import Header from '../shared/header'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'

const screens = {
  //Whatever is the first object that will be what is displayed first ie About
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About Game Review" />
        ),
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: { backgroundColor: '#eee', height: 60 } },
  },
})

export default AboutStack
