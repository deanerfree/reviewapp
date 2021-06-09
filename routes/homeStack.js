import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'

import ReviewDetails from '../screens/reviewDetails'

const screens = {
  //Whatever is the first object that will be what is displayed first ie Home
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Game Reviews',
      headerStyle: {
        backgroundColor: '#eee',
      },
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
    headerStyle: { backgroundColor: { backgroundColor: '#eee', height: 60 } },
  },
})

export default createAppContainer(HomeStack)
