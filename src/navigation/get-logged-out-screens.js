import Login from "@screens/Login";
import SignUp from "@screens/SignUp";
import NativeStackNavigator from "@navigation/native-stack-navigator";
import { NO_HEADER } from "@constants/header-styles";

export default function getLoggedOutScreens() {
  return [
    <NativeStackNavigator.Screen key={0} name="Login" component={Login} options={NO_HEADER} />,
    <NativeStackNavigator.Screen key={1} name="SignUp" component={SignUp} options={NO_HEADER} />,
  ];
}
