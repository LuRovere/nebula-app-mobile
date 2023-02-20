/* import 'react-native-gesture-handler'
import { Provider } from 'react-redux';

import DrawerNavigation from "./src/navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
      <Provider />
      );
}
  */

import 'react-native-gesture-handler';

import DrawerNavigation from './src/navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}