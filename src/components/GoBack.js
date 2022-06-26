import { Pressable, StyleSheet } from "react-native";
import React from "react";

import { default as IoniconsIcons } from "react-native-vector-icons/Ionicons";

import { COLORS } from "@constants/theme";
import { goBack } from "@helpers/navigation";

export default function GoBack() {
  return (
    <Pressable style={[styles.clickable]} onPress={goBack}>
        <IoniconsIcons name="arrow-back-circle" size={50} color={COLORS.primary} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    clickable: {
        position: "absolute",
        top: 20,
        left: 20
    }
})