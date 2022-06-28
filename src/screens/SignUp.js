import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

import { default as FontAwesomeIcon } from "react-native-vector-icons/FontAwesome";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getDocumentAsync } from "expo-document-picker";

import { COLORS, FONTS } from "@constants/theme";
import GoBack from "@components/GoBack";
import FormTextInput from "@components/FormTextInput";
import STRINGS from "@constants/strings";
import Button from "@components/Button";

export default function SignUp() {
  const [image, setImage] = useState(null);

  const language = useSelector(({ language }) => language);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  async function pickImage() {
    setImage(await getDocumentAsync());
  }

  return (
    <View style={[styles.container]}>
      <GoBack />
      <View style={[styles.subContainer]}>
        <View style={styles.userImage}>
          {image ? (
            <Image source={image} style={{ width: 120, height: 120 }} />
          ) : (
            <FontAwesomeIcon
              style={styles.userLogo}
              solid
              name="user"
              size={110}
              color={COLORS.primary}
            />
          )}
        </View>
        <FormTextInput
          style={[styles.inputField]}
          name="fullName"
          control={control}
          mode="outlined"
          label={STRINGS[language.id].FULL_NAME}
        />
        <FormTextInput
          style={[styles.inputField]}
          name="email"
          control={control}
          mode="outlined"
          label={STRINGS[language.id].EMAIL}
        />
        <FormTextInput
          style={[styles.inputField]}
          name="password"
          control={control}
          mode="outlined"
          label={STRINGS[language.id].PASSWORD}
          secureTextEntry
        />
        <Button
          onPress={pickImage}
          style={[styles.uploadButton, styles.uploadButtonText]}
          mode="outlined"
        >
          {STRINGS[language.id].UPLOAD_PHOTO}
        </Button>
        <Button
          style={[styles.submitButton]}
          labelStyle={[styles.submitButtonLabelStyle]}
          mode="contained"
        >
          {STRINGS[language.id].SIGN_UP}
        </Button>
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
  userImage: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: 120,
    marginTop: -40,
    marginBottom: 30,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: COLORS.primary,
    borderRadius: 100,
    overflow: "hidden",
  },
  userLogo: {
    marginTop: 25,
  },
  userPickedImage: {},
  inputField: {
    textTransform: "capitalize",
    marginBottom: 20,
  },
  uploadButton: {
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  uploadButtonText: {
    ...FONTS.BUTTON_CALL_TO_ACTION,
  },
  submitButton: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  submitButtonLabelStyle: {
    textTransform: "none",
    ...FONTS.BUTTON_CALL_TO_ACTION,
  },
});
