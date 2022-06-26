import { DefaultTheme } from "react-native-paper";

export const COLORS = {
  ...DefaultTheme.colors,
  surface: "#fff",
  text: "#000",
  primary: "#588bae",
  error: "#e1341e",
  placeholder: "#588bae",
  secondary: "#6200ee",
  accent: "#65676B",
};

export const FONTS = {
  FORM_TEXT_INPUT: {
  },
  CALL_TO_ACTION: {
    fontWeight: 600,
  },
  BUTTON_CALL_TO_ACTION: {
    fontWeight: 600,
    fontSize: 18,
  },
};

const THEME = {
  ...DefaultTheme,
  colors: COLORS,
};

export default THEME;
