import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar } from "react-native-paper";
import THEME, { COLORS } from "@constants/theme";

const DEFAULT_USER_IMAGE = require("@assets/images/user-default.png");

export default function UserImage({
  source,
  size,
  mode,
  onPress,
  containerStyle,
  imageStyle,
}) {

  const containerDefaultOutlineStyle = {
    borderWidth: Math.floor(size * 0.036),
    borderRadius: 100,
    borderColor: COLORS.primary,
    
  };

  return (
    <Pressable onPress={onPress } style={[(mode === "outline") && containerDefaultOutlineStyle, containerStyle]}>
      <Avatar.Image
        style={[imageStyle]}
        source={source || DEFAULT_USER_IMAGE}
        theme={THEME}
        size={size}
      />
    </Pressable>
  );
}
