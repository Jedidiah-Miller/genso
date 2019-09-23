import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { config } from './PlatformConfig';

import HomeScreen from '../screens/NavScreens/HomeScreen';
import NewPostScreen from '../screens/NewPostScreen';

export default HomeScreenStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    NewPostScreen: { screen: NewPostScreen }
  }, {
    initialRoute: 'HomeScreen'
  },
  config
)