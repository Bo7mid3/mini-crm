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
import { USER_IMAGE as USER_IMAGE_STYLE} from "@styles/images";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@styles/buttons";

export default function SignUp() {
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  async function pickImage() {
    setImage(await getDocumentAsync());
  }

  return (
    <CenterContainer hasBackButton>
      <UserImage size={110} mode="outline" containerStyle={[styles.userImageContainer]} imageStyle={[styles.userImage]} />
      <FormTextInput
        containerStyle={[styles.inputContainer]}
        errorStyle={[styles.inputError]}
        inputStyle={[styles.inputField]}
        name="fullName"
        control={control}
        mode="outlined"
        label="FULL_NAME"
      />
      <FormTextInput
        containerStyle={[styles.inputContainer]}
        errorStyle={[styles.inputError]}
        inputStyle={[styles.inputField]}
        name="email"
        control={control}
        mode="outlined"
        label="EMAIL"
      />
      <FormTextInput
        containerStyle={[styles.inputContainer]}
        errorStyle={[styles.inputError]}
        inputStyle={[styles.inputField]}
        name="password"
        control={control}
        mode="outlined"
        label="PASSWORD"
        secureTextEntry
      />
      <Button
        onPress={pickImage}
        style={[styles.secondaryButton]}
        labelStyle={[styles.secondaryButtonLabelStyle]}
        mode="outlined"
      >
        UPLOAD_PHOTO
      </Button>
      <Button
        style={[styles.primaryButton]}
        labelStyle={[styles.primaryButtonLabelStyle]}
        mode="contained"
      >
        SIGN_UP
      </Button>
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  ...DEFAULT_INPUT,
  ...PRIMARY_BUTTON,
  ...SECONDARY_BUTTON,
  ...USER_IMAGE_STYLE
});
