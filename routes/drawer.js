import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

//Might have to restructure to drop home button down
//lesson 24 https://www.youtube.com/watch?v=EaNCi8o8H0A&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=24
//Checkout https://reactnavigation.org/docs/drawer-navigator/
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
})

export default createAppContainer(RootDrawerNavigator)
