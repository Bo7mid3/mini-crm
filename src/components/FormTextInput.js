import React from "react";
import { StyleSheet, Text } from "react-native";

import { TextInput as Input } from "react-native-paper";
import { Controller } from "react-hook-form";

import THEME from "@constants/theme";

export default function FormTextInput({ name, control, rules, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          {...props}
          value={value}
          onBlur={onBlur}
          theme={THEME}
          onChangeText={(value) => onChange(value)}
        />
      )}
    />
  );
}