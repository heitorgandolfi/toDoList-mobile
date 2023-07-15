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
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarInactiveTintColor: defaultTheme["gray-400"],
        tabBarActiveTintColor: defaultTheme["yellow-500"],

        tabBarStyle: {
          height: 70,
          backgroundColor: defaultTheme["black"],
          borderTopColor: defaultTheme["gray-600"],
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MaterialCommunityIcons
                name="text-box"
                size={24}
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
                size={24}
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
