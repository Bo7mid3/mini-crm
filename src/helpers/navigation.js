import { getNavigation } from "@navigation/navigation-reference";

const NAVIGATION = getNavigation();

export function goBack() {
  NAVIGATION.goBack();
}

export function goToSignUp() {
  NAVIGATION.navigate("SignUp");
}
