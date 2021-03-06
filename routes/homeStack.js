import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import Header from '../shared/header'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
  //Whatever is the first object that will be what is displayed first ie Home
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      //headerTitle prop can take in a function instead of a string compared to 'title'
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Game Review" />
        ),
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Reviews',
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
})

export default HomeStack
