import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "./screens/Home";
import { Updates } from "./screens/Updates";
import { Tamagui } from "./screens/sandboxes/Tamagui";
import { ReactForm } from "./screens/sandboxes/ReactForm";
import { Valtio } from "./screens/sandboxes/Valtio";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Sandboxes",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications" size={size} color={color} />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Tamagui: {
      screen: Tamagui,
      options: {
        title: "Tamagui Sandbox",
      },
    },
    ReactForm: {
      screen: ReactForm,
      options: {
        title: "React Form Sandbox",
      },
    },
    Valtio: {
      screen: Valtio,
      options: {
        title: "Valtio Sandbox",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
