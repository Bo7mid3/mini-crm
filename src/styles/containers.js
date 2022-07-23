import { WINDOW_WIDTH } from "@constants/dimensions";
import { COLORS } from "@constants/theme";

export const DEFAULT_CONTAINER = {
  container: {
    height: "100%",
    backgroundColor: COLORS.surface,
    alignItems: "center",
  },
  subContainer: {
    width: "80%",
    maxWidth: 350,
    minHeight: WINDOW_WIDTH,
  },
}

export const CENTER_CONTAINER = {
  container: {
    height: "100%",
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "80%",
    maxWidth: 350,
  },
};

