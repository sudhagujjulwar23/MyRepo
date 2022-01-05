
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/Signup';
import ButtonsScreen from './Screens/Buttons';
import CategoriesScreen from './Screens/Categories';
import DetailsScreen from './Screens/Details';
const navigator = createStackNavigator(
  {
    
    Login: {
      screen: LoginScreen,
    },

    SignUp: {
      screen: SignUpScreen,
    },

    Buttons: {
        screen: ButtonsScreen,
      },

      Categories: {
        screen: CategoriesScreen,
      },
      Details: {
        screen: DetailsScreen,
      },

},
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(navigator);
