import React from "react";

import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import STORE from "@store";
import NAVIGATION_REFERNCE from "@navigation/navigation-reference";

export default function AppContainer({ children }) {
  return (
    <Provider store={STORE}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer ref={NAVIGATION_REFERNCE}>
            {children}
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
