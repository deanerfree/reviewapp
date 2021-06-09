import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import Header from '../shared/header'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
  //Whatever is the first object that will be what is displayed first ie Home
  Home: {
    screen: Home,
    headerTitleAlign: 'center',
    navigationOptions: ({ navigation }) => {
      //headerTitle prop can take in a function instead of a string compared to 'title'
      return {
        headerTitle: () => <Header navigation={navigation} title="home" />,
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Reviews',
      headerStyle: {
        backgroundColor: '#eee',
      },
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: { backgroundColor: '#eee', height: 60 },
    },
  },
})

export default HomeStack
