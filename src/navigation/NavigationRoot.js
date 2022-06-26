import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import NAVIGATION_REFERNCE from "@navigation/navigation-reference";
import getLoggedOutScreens from "@navigation/get-logged-out-screens";
import NativeStackNavigator from "@navigation/native-stack-navigator";

export default function NavigationRoot() {

  return (
    <NavigationContainer ref={NAVIGATION_REFERNCE}>
      <NativeStackNavigator.Navigator>
        {getLoggedOutScreens()}
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  );
}
