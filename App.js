import React from "react";

import { Provider } from "react-redux";

import STORE from "@store";
import Root from "@root/Root";


export default function App() {

  return (
    <Provider store={STORE}>
      <Root />
    </Provider>
  );
}
