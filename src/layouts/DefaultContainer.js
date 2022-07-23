import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import GoBack from "@components/GoBack";

import { DEFAULT_CONTAINER } from "@styles/containers";

export default function DefaultContainer({ hasBackButton, safe, children }) {
  return (
    <SafeAreaView
      edges={safe ? [] : ["top", "right", "bottom", "left"]}
      mode="margin"
      style={[style.container]}
    >
      {hasBackButton && <GoBack />}
      <ScrollView style={[style.subContainer]}>{children}</ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  ...DEFAULT_CONTAINER,
});
