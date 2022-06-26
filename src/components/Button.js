import React from "react";

import { Button as PaperButton } from "react-native-paper";

import THEME from "@constants/theme";

export default function Button({ ...props }) {

  return (
    <PaperButton
      theme={THEME}
      {...props}
    />
  );
}
