import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'

import ReviewDetails from '../screens/reviewDetails'

const screens = {
  //Whatever is the first object that will be what is displayed first ie Home
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
