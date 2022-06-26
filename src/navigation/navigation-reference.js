import { createNavigationContainerRef } from "@react-navigation/native";

const NAVIGATION_REFERNCE = createNavigationContainerRef();

export function getNavigation() {
  return NAVIGATION_REFERNCE;
}

export default NAVIGATION_REFERNCE;