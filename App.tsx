import { StatusBar } from "react-native";

import { Home } from "./src/screens/Home";

import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/SystemMessage";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/styles/defaultTheme";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />

      <Toast config={toastConfig} />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
