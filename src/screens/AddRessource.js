import { View, StyleSheet, Image } from "react-native";
import React, { useCallback, useState } from "react";

import { default as FontAwesomeIcon } from "react-native-vector-icons/FontAwesome";
import { useForm } from "react-hook-form";
import { getDocumentAsync } from "expo-document-picker";
import { useFocusEffect } from "@react-navigation/native";

import UserImage from "@components/UserImage";
import FormTextInput from "@components/FormTextInput";
import Button from "@components/Button";
import CenterContainer from "@layouts/CenterContainer";

import { COLORS, FONTS } from "@constants/theme";
import { DEFAULT_INPUT } from "@styles/inputs";
import { USER_IMAGE as USER_IMAGE_STYLE } from "@styles/images";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@styles/buttons";
import FormSelectInput from "@components/FormSelectInput";
import FormDateInput from "@components/FormDateInput";


export default function AddRessource() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      field: "",
    },
  });

  return (
    <CenterContainer safe>
      <FormTextInput
        containerStyle={[styles.inputContainer]}
        errorStyle={[styles.inputError]}
        inputStyle={[styles.inputField]}
        name="name"
        control={control}
        mode="outlined"
        label="Name"
      />
      <FormSelectInput
        control={control}
        name="field"
        label="Field"
        arrayList={[
          { _id: "1", value: "BLUE" },
          { _id: "2", value: "RED" },
          { _id: "3", value: "GREEN" },
          { _id: "4", value: "YELLOW" },
          { _id: "5", value: "BROWN" },
          { _id: "6", value: "BLACK" },
          { _id: "7", value: "WHITE" },
          { _id: "8", value: "CYAN" },
        ]}
        selectedArrayList={[]}
      />
      <FormDateInput name="date" control={control} />
      <Button
        style={[styles.primaryButton]}
        labelStyle={[styles.primaryButtonLabelStyle]}
        mode="contained"
      >
        Submit
      </Button>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  ...DEFAULT_INPUT,
  ...PRIMARY_BUTTON,
  ...SECONDARY_BUTTON,
  ...USER_IMAGE_STYLE,
});
