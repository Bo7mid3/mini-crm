import NavigationRoot from "@navigation/NavigationRoot";
import React from "react";

import { Provider } from "react-redux";

import STORE from "@store";

export default function App() {
  return (
    <Provider store={STORE}>
      <NavigationRoot />
    </Provider>
  );
}
