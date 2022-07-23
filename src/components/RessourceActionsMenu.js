import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Menu } from "react-native-paper";
import Translator from "./Translator";
import { COLORS } from "@constants/theme";

export default function RessourceActionsMenu({ children, deletePressed }) {
  const [menuVisible, setmenuVisible] = useState(false);
  const openMenu = () => setmenuVisible(true);
  const closeMenu = () => setmenuVisible(false);
  
    useEffect(() => console.log(menuVisible),[menuVisible])

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <Pressable onPress={openMenu}>
          <Text style={{color: COLORS.primary, textDecoration: "underline"}}>
            <Translator>{children}</Translator>
          </Text>
        </Pressable>
      }
    >
        <Menu.Item icon="pencil" onPress={() => {console.log('Option 3 was pressed')}} title="Modify" />
        <Menu.Item icon="delete" onPress={() => {deletePressed();closeMenu()}} title="Delete" />
    </Menu>
  );
}
