import React, { useEffect, useCallback, useState } from "react";
import { View, StyleSheet, Pressable, Platform } from "react-native";

import { useForm } from "react-hook-form";
import { default as EntypoIcon } from "react-native-vector-icons/Entypo";
import { default as MaterialCommunityIconsIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import FormTextInput from "@components/FormTextInput";
import Button from "@components/Button";
import Text from "@components/Text";
import GoogleSignInOrUp from "@components/GoogleSignInOrUp";
import CenterContainer from "@layouts/CenterContainer";
import { goToForgotPassword, goToSignUp } from "@helpers/navigation";
import useLogin from "@services/login";

import { LOGIN as LOGIN_FORM_DEFAULT_VALUES } from "@constants/form-default-values";
import { EMAIL_VALIDATION as EMAIL_VALIDATION_RULES } from "@constants/form-rules";
import { COLORS, FONTS } from "@constants/theme";
import { DEFAULT_INPUT } from "@styles/inputs";
import { PRIMARY_BUTTON } from "@styles/buttons";



export default function Login() {
  const { authenticate, loginError, abortLogin } = useLogin();

  const language = useSelector(({ language }) => language);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
  } = useForm({
    mode: "onBlur",
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
  });

  const setUpOnFocus = useCallback(() => {
    return () => {
      clearErrors();
      abortLogin();
    };
  }, []);

  useFocusEffect(setUpOnFocus);

  function onsubmit(formData) {
    console.log(formData);
    authenticate(formData);
  }

  return (
    <CenterContainer>
      <EntypoIcon
        style={[styles.appLogo]}
        name="flattr"
        size={110}
        color={COLORS.primary}
      />
      <FormTextInput
        containerStyle={styles.inputContainer}
        errorStyle={styles.inputError}
        inputStyle={[styles.inputField]}
        name="email"
        control={control}
        mode="outlined"
        label="EMAIL"
        rules={EMAIL_VALIDATION_RULES}
      />
      <FormTextInput
        containerStyle={[styles.inputContainer]}
        errorStyle={styles.e}
        inputStyle={[styles.inputField]}
        name="password"
        control={control}
        mode="outlined"
        label="PASSWORD"
        secureTextEntry
      />
      <View style={[styles.forgotPasswordContainer]}>
        <Pressable onPress={goToForgotPassword}>
          <Text style={[styles.forgotPasswordText]}>
            FORGOT_PASSWORD_QUESTION
          </Text>
        </Pressable>
      </View>
      <Button
        style={[styles.primaryButton]}
        labelStyle={[styles.primaryButtonLabelStyle]}
        mode="contained"
        onPress={handleSubmit(onsubmit)}
      >
        LOGIN
      </Button>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <GoogleSignInOrUp />
        <MaterialCommunityIconsIcon
          style={{ marginHorizontal: 20 }}
          color={COLORS.primary}
          name="facebook"
          size={30}
        />
        <MaterialCommunityIconsIcon
          style={{ marginHorizontal: 20 }}
          color={COLORS.primary}
          name="linkedin"
          size={30}
        />
      </View>
      <View style={[styles.signupContainter]}>
        <Text style={[styles.informativeText]}>NO_ACCOUNT_QUESTION</Text>
        <Pressable onPress={goToSignUp}>
          <Text style={[styles.signUpText]}>SIGN_UP</Text>
        </Pressable>
      </View>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  ...DEFAULT_INPUT,
  ...PRIMARY_BUTTON,
  appLogo: {
    alignSelf: "center",
    marginTop: -20,
    marginBottom: 30,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  signupContainter: {
    flexDirection: "row",
    marginTop: 25,
  },
  informativeText: {},
  signUpText: {
    color: COLORS.primary,
    marginLeft: 5,
    ...FONTS.CALL_TO_ACTION,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    ...FONTS.CALL_TO_ACTION,
  },
});
