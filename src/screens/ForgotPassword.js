import { View, Text } from "react-native";
import React from "react";

import { default as FontAwesome5Icon } from "react-native-vector-icons/FontAwesome5";

import GoBack from "@components/GoBack";
import FormTextInput from "@components/FormTextInput";
import STRINGS from "@constants/strings";

export default function ForgotPassword() {


  return (
    <View>
      <GoBack />
      <View>
        <FontAwesome5Icon
          name="user-lock"
          size={80}
          color={theme.colors.primary}
          solid
        />
        <FormTextInput
            name="email"
            label={"test"}
        />
      </View>
    </View>
  );
}
