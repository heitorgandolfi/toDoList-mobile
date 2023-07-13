import {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from "react-native-toast-message";
import { defaultTheme } from "../../styles/defaultTheme";

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: defaultTheme["yellow-500"] }}
      contentContainerStyle={{
        paddingHorizontal: 12,
        backgroundColor: defaultTheme["gray-600"],
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "700",
        color: defaultTheme["white"],
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: defaultTheme["red-500"] }}
      contentContainerStyle={{
        paddingHorizontal: 12,
        backgroundColor: defaultTheme["gray-600"],
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "700",
        color: defaultTheme["white"],
      }}
    />
  ),
};
