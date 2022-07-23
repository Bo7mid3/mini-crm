import { View, Text, StyleSheet } from "react-native";
import React, {useState} from "react";

import { Appbar, Menu } from "react-native-paper";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import UserImage from "@components/UserImage";
import mapRouteNameToTitle from "@helpers/mapRouteNameToTitle";

import THEME, { COLORS } from "@constants/theme";
import { WINDOW_WIDTH } from "@constants/dimensions";
import { MAIN_HEADER } from "@styles/headers";

export default function MainHeader() {
  const [menuVisible, setmenuVisible] = useState(false);
  const openMenu = () => setmenuVisible(true);
  const closeMenu = () => setmenuVisible(false);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Appbar.Header
      theme={THEME}
      style={styles.header}
    >
      {navigation.canGoBack() && (
        <Appbar.BackAction color={COLORS.primary} onPress={navigation.goBack} />
      )}
      <Appbar.Content titleStyle={{fontWeight: "200", textTransform: "uppercase", fontSize: 18}} color={COLORS.primary} title={mapRouteNameToTitle(route.name)} />
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<UserImage mode="outline" onPress={openMenu} size={40} />}
      >
        <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Logout" />
      </Menu>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  ...MAIN_HEADER
})