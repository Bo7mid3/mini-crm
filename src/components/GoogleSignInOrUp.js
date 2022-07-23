import { View, Text, Pressable } from "react-native";
import React from "react";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { default as MaterialCommunityIconsIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

import { COLORS } from "@constants/theme";

GoogleSignin.configure({
  //scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    "562928997410-8ag57rdgbsa93oodoqggvb0met4noa9g.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //accountName: '', // [Android] specifies an account name on the device that should be used
  //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

async function googleAuth() {
  try {
    const userInfo = await GoogleSignin.signIn();
    const res = axios.get(
      `https://Nodejs-1.ahmedbahloul.repl.co/?idToken=${userInfo.idToken}`
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

export default function GoogleSignInOrUp() {
  return (
    <Pressable onPress={googleAuth}>
      <MaterialCommunityIconsIcon
        style={{ marginHorizontal: 20 }}
        color={COLORS.primary}
        name="google"
        size={30}
      />
    </Pressable>
  );
}
