import { View, StyleSheet } from "react-native";
import React from "react";

import { useForm } from "react-hook-form";
import { default as FontAwesome5Icon } from "react-native-vector-icons/FontAwesome5";

import Text from "@components/Text";
import FormTextInput from "@components/FormTextInput";
import CenterContainer from "@layouts/CenterContainer";
import Button from "@components/Button";

import { COLORS, FONTS } from "@constants/theme";
import { WINDOW_HEIGHT } from "@constants/dimensions";
import { PRIMARY_BUTTON } from "@styles/buttons";
import { DEFAULT_INPUT } from "@styles/inputs";

export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  return (
    <CenterContainer hasBackButton>
      <FontAwesome5Icon
        style={[styles.iconStyle]}
        name="user-lock"
        size={100}
        color={COLORS.primary}
        solid
      />
      <FormTextInput
        containerStyle={[styles.inputContainer, styles.textUnder]}
        errorStyle={[styles.inputError]}
        inputStyle={[styles.inputField]}
        name="email"
        control={control}
        mode="outlined"
        label="EMAIL"
      />
      <Text>EMAIL_RESET_HINT</Text>
      <Button
        style={[styles.primaryButton]}
        labelStyle={[styles.primaryButtonLabelStyle]}
        mode="contained"
      >
        SEND_INSTRUCTIONS
      </Button>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  ...PRIMARY_BUTTON,
  ...DEFAULT_INPUT,
  iconStyle: {
    marginTop: -WINDOW_HEIGHT * 0.07,
    marginBottom: 20,
    alignSelf: "center",
  },
  textUnder: {
    marginBottom: 10
  }
});
