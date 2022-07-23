import React from "react";
import { View } from "react-native";

import { PaperSelect } from "react-native-paper-select";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import Text from "@components/Text";

import THEME, { COLORS } from "@constants/theme";
import { useMemo } from "react";

export default function FormSelectInput({
  containerStyle,
  inputStyle,
  errorStyle,
  name,
  control,
  rules,
  label: labelKey,
  outlineColor,
  textInputColor,
  ...props
}) {
  const language = useSelector(({ language }) => language);

  function SelectInput({
    field: { onChange, value, onBlur },
    fieldState: { invalid, isTouched, isDirty, error },
  }) {
    return (
      <View style={[containerStyle]}>
        <PaperSelect
          {...props}
          textInputTheme={THEME}
          dialogTitleStyle={{
            color: COLORS.primary
          }}
          style={[inputStyle]}
          label={language.dictionary[labelKey] || labelKey}
          value={value}
          onSelection={(value) => {
            onChange(value.text);
          }}
          multiEnable={false}
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
      render={SelectInput}
    />
  );
}
