import React, { useCallback, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import NAVIGATION_REFERNCE from "@navigation/navigation-reference";
import getLoggedOutScreens from "@navigation/get-logged-out-screens";
import NativeStackNavigator from "@navigation/native-stack-navigator";
import getLoggedInScreens from "@navigation/get-logged-in-screens";
import getSplashScreen from "@navigation/get-splash-screen";
import { logOut } from "@store/slices/login-status";
import setUpTranslator from "@helpers/translator";

export default function Root() {
  const loginStatus = useSelector(({ loginStatus }) => loginStatus);

  const dispatch = useDispatch();

  const switchRoutes = useCallback(() => {
    switch (loginStatus) {
      case "loading":
        return getSplashScreen();
      case "logged in":
        return getLoggedInScreens();
      case "logged out":
        return getLoggedOutScreens();
    }
  }, [loginStatus]);

  async function setUp() {
    await setUpTranslator();
    await dispatch(logOut());
  }

  useEffect(() => {
    setUp();
  }, []);

  return (
    <NavigationContainer ref={NAVIGATION_REFERNCE}>
      <NativeStackNavigator.Navigator>
        {switchRoutes()}
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  );
}
