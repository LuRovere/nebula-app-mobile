import 'react-native-gesture-handler'

import { Text, View } from "react-native";

import DrawerNavigation from "./src/navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const App=()=> {
  return (
<NavigationContainer>
    <DrawerNavigation/>
</NavigationContainer>
  );
}

export default App