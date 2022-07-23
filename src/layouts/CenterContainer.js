import { View, StyleSheet } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import GoBack from "@components/GoBack";

import { CENTER_CONTAINER } from "@styles/containers";

export default function CenterContainer({ hasBackButton, safe, children }) {
  return (
    <SafeAreaView
      edges={safe ? [] : ["top", "right", "bottom", "left"]}
      mode="margin"
      style={[style.container]}
    >
      {hasBackButton && <GoBack />}
      <View style={[style.subContainer]}>{children}</View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  ...CENTER_CONTAINER,
});
