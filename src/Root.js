import React, { useCallback, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";

import NAVIGATION_REFERNCE from "@navigation/navigation-reference";
import getLoggedOutRoutes from "@navigation/get-logged-out-routes";
import getLoggedInRoutes from "@navigation/get-logged-in-routes";
import { logOut, logIn } from "@store/slices/login-status";
import setUpTranslator from "@helpers/translator";
import Splash from "@screens/Splash";

const Stack = createNativeStackNavigator();

export default function Root() {
  const loginStatus = useSelector(({ loginStatus }) => loginStatus);

  const dispatch = useDispatch();

  const switchRoutes = useCallback(() => {
    switch (loginStatus) {
      case "logged in":
        return getLoggedInRoutes(Stack);
      case "logged out":
        return getLoggedOutRoutes(Stack);
    }
  }, [loginStatus]);

  async function setUp() {
    await setUpTranslator();
    await dispatch(logOut());
  }

  useEffect(() => {
    setUp();
  }, []);

  if (loginStatus === "loading") return <Splash />;

  return <Stack.Navigator>{switchRoutes()}</Stack.Navigator>;
}
