import React from "react";

import { Button as PaperButton } from "react-native-paper";

import THEME from "@constants/theme";
import Translator from "./Translator";

export default function Button({ children, ...props }) {
  return (
    <PaperButton theme={THEME} {...props}>
      <Translator>{children}</Translator>
    </PaperButton>
  );
}
