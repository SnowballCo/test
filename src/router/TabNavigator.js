import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import List from '../pages/List';
import Form from '../pages/Form';

const TabNavigator  = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Menu: {
    screen: Menu,
  },
});

export default createAppContainer(TabNavigator);