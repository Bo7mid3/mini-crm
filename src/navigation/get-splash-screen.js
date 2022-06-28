import NativeStackNavigator from "@navigation/native-stack-navigator";
import { NO_HEADER } from "@constants/header-styles";
import Splash from "@screens/Splash";

export default function getSplashScreen() {
  return [
    <NativeStackNavigator.Screen  key={0} name="Splash" component={Splash} options={NO_HEADER} />
  ];
}
