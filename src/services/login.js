import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import STORE from "@store";

const { LOGIN_URL } = require("@constants/end-points");
const { logIn } = require("@store/slices/login-status");
const { useState } = require("react");
const { useDispatch } = require("react-redux");

function login(token) {
  STORE.dispatch(logIn());
  if (["ios", "android"].includes(Platform.OS))
    return SecureStore.setItemAsync("auth-token", token);
  if (["web"].includes(Platform.OS))
    return localStorage.setItem("auth-token", token);
}

export default function useLogin() {
  const [loginError, setLoginError] = useState(null);
  const controller = new AbortController();
  const abortLogin = () => {
    if (controller.signal) controller.abort();
  };
  const authenticate = async (credentials) => {
    const res = await axios({
      url: LOGIN_URL,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      signal: controller.signal,
      data: credentials,
    });
    if (res.status == 200) {
      return login(res.data.token);
    }
    return setLoginError(res.data.error);
  };
  return {
    authenticate,
    loginError,
    abortLogin,
  };
}
