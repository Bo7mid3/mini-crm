import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { useForm } from "react-hook-form";
import { default as EntypoIcon } from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import FormTextInput from "@components/FormTextInput";
import Button from "@components/Button";
import Text from "@components/Text";
import { COLORS, FONTS } from "@constants/theme";
import STRINGS from "@constants/strings";
import { goToSignUp } from "@helpers/navigation";

export default function Login() {
  const language = useSelector(({ language }) => language);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onsubmit(formData) {
    console.log(formData);
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.subContainer]}>
        <EntypoIcon
          style={[styles.appLogo]}
          name="flattr"
          size={110}
          color={COLORS.primary}
        />
        <FormTextInput
          style={[styles.inputField]}
          name="email"
          control={control}
          mode="outlined"
          label={STRINGS[language].EMAIL}
          rules={{}}
        />
        <FormTextInput
          style={[styles.inputField]}
          name="password"
          control={control}
          mode="outlined"
          label={STRINGS[language].PASSWORD}
          secureTextEntry
        />
        <View style={[styles.forgotPasswordContainer]}>
          <Pressable>
            <Text style={[styles.callToAction]}>
              {STRINGS[language].FORGOT_PASSWORD_QUESTION}
            </Text>
          </Pressable>
        </View>
        <Button
          style={[styles.submitButton]}
          labelStyle={[styles.buttonLabelStyle]}
          mode="contained"
          onPress={handleSubmit(onsubmit)}
        >
          {STRINGS[language].LOGIN}
        </Button>
        <View style={[styles.signupContainter]}>
          <Text style={[styles.informativeText]}>
            {STRINGS[language].NO_ACCOUNT_QUESTION}
          </Text>
          <Pressable onPress={goToSignUp}>
            <Text style={[styles.callToAction]}>
              {STRINGS[language].SIGN_UP}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "80%",
  },
  appLogo: {
    alignSelf: "center",
    marginTop: -40,
    marginBottom: 30,
  },
  inputField: {
    textTransform: "capitalize",
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonLabelStyle: {
    textTransform: "capitalize",
    ...FONTS.BUTTON_CALL_TO_ACTION,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 6,
  },
  signupContainter: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
    gap: 6,
  },
  informativeText: {},
  callToAction: {
    color: COLORS.primary,
    ...FONTS.CALL_TO_ACTION,
  },
});
