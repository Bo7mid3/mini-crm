import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { default as AntDesignIcons } from "react-native-vector-icons/AntDesign";
import { default as MaterialIconsIcons } from "react-native-vector-icons/MaterialIcons";

import Profile from "@screens/Profile";

import { MAIN_HEADER, NO_HEADER } from "@constants/screen-options";
import ListRessources from "@screens/ListRessources";
import { COLORS } from "@constants/theme";
import AddRessource from "@screens/AddRessource";

const Tab = createBottomTabNavigator();
const StackLvl1 = createNativeStackNavigator();

export default function getLoggedInScreens(Stack) {
  function ressourcesNavigator() {
    return (
      <StackLvl1.Navigator screenOptions={{ ...MAIN_HEADER }}>
        <StackLvl1.Screen name="ListRessources" component={ListRessources} />
        <StackLvl1.Screen name="AddRessource" component={AddRessource} />
      </StackLvl1.Navigator>
    );
  }

  function homeNavigator() {
    return (
      <Tab.Navigator screenOptions={{ ...MAIN_HEADER, tabBarActiveTintColor: COLORS.primary }}>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="profile" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Ressources"
          options={{
            ...NO_HEADER,
            tabBarLabel: "Ressources",
            tabBarIcon: ({ color, size }) => (
              <MaterialIconsIcons name="article" color={color} size={size} />
            ),
          }}
        >
          {ressourcesNavigator}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }

  return (
    <>
      <Stack.Screen name="Home" options={NO_HEADER}>
        {homeNavigator}
      </Stack.Screen>
    </>
  );
}
