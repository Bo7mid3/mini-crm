import React from "react";
import { View } from "react-native";

import { TextInput as Input } from "react-native-paper";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import Text from "@components/Text";

import THEME from "@constants/theme";
import { useMemo } from "react";

export default function FormTextInput({
  containerStyle,
  inputStyle,
  errorStyle,
  name,
  control,
  rules,
  label: labelKey,
  ...props
}) {
  const language = useSelector(({ language }) => language);

  function TextInput({
    field: { onChange, value, onBlur },
    fieldState: { invalid, isTouched, isDirty, error },
  }) {
    return (
      <View style={containerStyle}>
        <Input
          {...props}
          style={inputStyle}
          label={language.dictionary[labelKey] || labelKey}
          value={value}
          onBlur={onBlur}
          theme={THEME}
          error={error}
          onChangeText={(value) => onChange(value)}
        />
        {error && <Text style={errorStyle}>{error.message}</Text>}
      </View>
    );
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={TextInput}
    />
  );
}
