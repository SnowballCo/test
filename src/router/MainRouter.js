import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

// const TabNavImg = [
//   {
//     name: "Home",
//     com: Home,
//     activelIcon: require("../img/homeOn/HOME_ICON_C.png"),
//     inactivelcon: require("../img/homeOff/HOME_ICON.png")
//   },
//   {
//     name: "Menu",
//     com: Menu,
//     activelIcon: require("../img/menuOn/MENU_ICON_C.png"),
//     inactivelcon: require("../img/menuOff/MENU_ICON.png")
//   },
// ];

// const Stack = createStackNavigator({
//   Home: {
//     screen: BottomNavigation}
//   }
// });

const Tab = createBottomTabNavigator();

export default function MainRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen Name="Home" component={Home} />
      <Tab.Screen Name="Home" component={Home} />
    </Tab.Navigator>
  );
}