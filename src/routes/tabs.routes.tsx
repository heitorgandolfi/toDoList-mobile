import { Platform } from "react-native";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { DoneTasks } from "../screens/DoneTasks";

import { defaultTheme } from "../styles/defaultTheme";

type RootTabParamList = {
  Home: undefined;
  DoneTasks: undefined;
};

export type NavigatorRoutesProps = BottomTabNavigationProp<RootTabParamList>;

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();

export function TabsRoutes() {
  const iconSize = 24;

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarInactiveTintColor: defaultTheme["gray-400"],
        tabBarActiveTintColor: defaultTheme["yellow-500"],

        tabBarStyle: {
          height: Platform.OS === "android" ? 70 : 96,
          backgroundColor: defaultTheme["black"],
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              // Criar um componente?
              <MaterialCommunityIcons
                name="text-box"
                size={iconSize}
                focused={focused}
                color={color}
              />
            );
          },
        }}
      />
      <Screen
        name="DoneTasks"
        component={DoneTasks}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MaterialCommunityIcons
                name="text-box-check"
                size={iconSize}
                focused={focused}
                color={color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
