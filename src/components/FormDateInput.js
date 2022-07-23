import React from "react";
import { View } from "react-native";

import { PaperSelect } from "react-native-paper-select";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { DatePickerInput } from "react-native-paper-dates";

import Text from "@components/Text";

import THEME, { COLORS } from "@constants/theme";
import { useMemo } from "react";

export default function FormDateInput({
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

  function DateInput({
    field: { onChange, value, onBlur },
    fieldState: { invalid, isTouched, isDirty, error },
  }) {
    return (
      <View style={[containerStyle]}>
        <DatePickerInput
          locale="en"
          label="Birthdate"
          value={value}
          onChange={onChange}
          inputMode="start"
          theme={THEME}
          style={{backgroundColor: COLORS.background, color: "red" }}
          placeholderTextColor="red"
          mode="outlined"

          // validRange={{
          //   startDate: new Date(2021, 1, 2),  // optional
          //   endDate: new Date(), // optional
          //   disabledDates: [new Date()] // optional
          // }}
          // onChange={} // same props as onConfirm but triggered without confirmed by user
          // saveLabel="Save" // optional
          // uppercase={false} // optional, default is true
          // label="Select date" // optional
          // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
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
      render={DateInput}
    />
  );
}
