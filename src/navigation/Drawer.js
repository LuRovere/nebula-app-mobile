import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';
import Login from '../screens/Login';

import Favorites from '../screens/Favorites';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Favorites" component={Favorites} />
    
  </Drawer.Navigator>
  )
}

export default DrawerNavigation