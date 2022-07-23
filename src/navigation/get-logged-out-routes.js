import Login from "@screens/Login";
import SignUp from "@screens/SignUp";
import { NO_HEADER } from "@constants/screen-options";
import ForgotPassword from "@screens/ForgotPassword";

export default function getLoggedOutRoutes(Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={Login} options={NO_HEADER} />
      <Stack.Screen name="SignUp" component={SignUp} options={NO_HEADER} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={NO_HEADER}
      />
    </>
  );
}
